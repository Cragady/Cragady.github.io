'use client';

import Markdown from '@/app/components/Markdown/Markdown';
import { JSX, useEffect, useRef, useState } from 'react';
import root from 'react-shadow';

async function requestPortfolioDirectory() {
  try {
    const filePromise = await fetch('/old_portfolios/old_portfolio_directory.json');
    const fileData = await filePromise.json();
    return fileData;
  } catch (error: any) {
    console.error(error);
    return null;
  }
}

function BodySection(props: { children: any, titleLevel: number, titleText: string }) {

  function Title() {

    const titleClass = 'text-center border-top border-secondary text-white';

    switch (props.titleLevel) {
      case 1:
        return <h1 className={titleClass}>{props.titleText}</h1>
      case 2:
        return <h2 className={titleClass}>{props.titleText}</h2>
      default:
        return <h2 className={titleClass}>{props.titleText}</h2>
    }
  }

  return(
    <section className="container cont-cust py-2">
      <div className="card-header">
        <Title />
      </div>

      {props.children}

    </section>
  );
}

export default function OldPortfolios() {
  const [fileDirectory, setFileDirectory] = useState<any | null>(null);
  const [portfolioButtons, setPortfolioButtons] = useState<JSX.Element[] | null>(null);
  const [fileNames, setFileNames] = useState<string[] | null>(null);
  const [files, setFiles] = useState<JSX.Element[] | null>(null);
  const [fileData, setFileData] = useState<string | null>(null);
  const [fileExt, setFileExt] = useState<string>('md');
  const [fileName, setFileName] = useState<string>('');
  const [projectName, setProjectName] = useState<string>('');
  const [viewRaw, setViewRaw] = useState<boolean>(false);
  const shadowRef = useRef<HTMLElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const defaultWidth = 250;
  const [iframeWidth, setIframeWidth] = useState(shadowRef.current?.clientWidth || defaultWidth);
  const iframeHeight = iframeWidth * (9 / 16)
  const fileParts = fileName.split('/');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const fileBasicName = fileParts[fileParts.length - 1];

  function portfolioButtonClickHandler(e: React.MouseEvent<HTMLButtonElement, MouseEvent>, mapFiles: string[]) {
    setFileNames(mapFiles);
    const nullButton = e.target;
    if (nullButton === null) return;
    const button = nullButton as HTMLButtonElement;

    setFileData(null);
    setProjectName(button.dataset.name as string);
  }

  function mapPortfolioButton(name: string, fullPath: string, i: number, mapFiles: string[]) {
    return (
      <li key={`portfolio-button-setter-${i}`} className='text-left'>
        <button onClick={(e) => { portfolioButtonClickHandler(e, mapFiles) }} data-public-path={fullPath} data-name={name}>
          {name}
        </button>
      </li>
    )
  };

  async function requestAsset(fileName: string) {
    if (fileName === '') return;
    const filePromise = await fetch(fileName);
    const fileDataRes = await filePromise.text();
    const fileParts = fileName.split('.');
    setFileData(fileDataRes);
    setFileExt(fileParts[fileParts.length - 1]);
    setFileName(fileName);
  }

  async function fileButtonClickHandler(e: React.MouseEvent<HTMLButtonElement>) {
    if (!e.target) return;

    const element = e.target as HTMLElement;
    const publicPath = element.dataset.publicPath || '';

    await requestAsset(publicPath);
  }

  function mapFileButton(name: string, fullPath: string, i: number) {
    return (
      <li key={`file-button-fetcher-${i}`} className='text-left'>
        <button onClick={fileButtonClickHandler} data-public-path={fullPath} data-name={name}>
          {name}
        </button>
      </li>
    )
  }

  function viewRawButtonHandler() {
    setViewRaw(!viewRaw);
  }

  function handleResize() {
    setIframeWidth(shadowRef.current?.clientWidth || defaultWidth);
  }

  useEffect(() => {
    async function setData() {
      const fetchData = await requestPortfolioDirectory();
      if (fetchData === null) return;
      fetchData.structure.forEach((item: any) => {
        item.files = [
          ...fetchData.commonFiles,
        ];

        const _NAME_ = '_NAME_';
        const cssIndices = [];
        for (let i = 0; i < item.files.length; i++) {
          const file = item.files[i];
          if (file.includes('.css')) {
            cssIndices.push(i);
            item.files[i] = fetchData.cssPath + item.files[i];
          } else {
            item.files[i] = fetchData.portfolioPath + item.name + '/' + item.files[i];
          }
          if (file.includes(_NAME_)) {
            item.files[i] = item.files[i].replace(_NAME_, item.name);
          }
        }
        if (!item.hasCss) for (let i = cssIndices.length - 1; i >= 0; i--) {
          item.files.splice(cssIndices[i], 1);
        }
      });
      setFileDirectory(fetchData);

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      }
    }
    setData();
  }, []);

  useEffect(() => {
    if (fileDirectory === null) return;
    const buttons = fileDirectory.structure.map((directive: any, i: number) => {
      return mapPortfolioButton(directive.name, fileDirectory.portfolioPath + directive.name, i, directive.files);
    });
    setPortfolioButtons(buttons);
  }, [fileDirectory]);

  useEffect(() => {
    if (fileNames === null) return;
    setFiles(fileNames.map((name: string, i: number) => {
      const nameSplit = name.split('/');
      return mapFileButton(nameSplit[nameSplit.length - 1], name, i);
    }));
  }, [fileNames]);

  return (
    <>
      <BodySection titleText={'Old Portfolios'} titleLevel={1}>
        <p className="p-2 mt-4 p-about">
          This page will act as a directory for old portfolios that were required by the classes
          I&apos;ve attended. These are massively underwhelming, and I&apos;m keeping these around
          just for legacy&apos;s sake, to look at, cringe at, and make fun of.
        </p>

        <ul className='px-5'>
          {portfolioButtons}
        </ul>

      </BodySection>

      {files && <BodySection titleText={'Files & Link'} titleLevel={2}>

        <ul className='px-5'>
          {files}
        </ul>
      </BodySection>}

      {fileData && <BodySection titleText={`File Preview: ${projectName}`} titleLevel={2}>
        <button onClick={viewRawButtonHandler}>{viewRaw ? 'View Parsed' : 'View Raw'}</button>
        <root.div className='root-div text-left' ref={shadowRef}>
          {
            fileExt === 'html' && !viewRaw
              ? <iframe id="iframe-preview" ref={iframeRef} onLoad={() => {
                  if (shadowRef.current === null) return;
                  setIframeWidth(shadowRef.current.clientWidth);
                }} width={iframeWidth} height={iframeHeight} src={fileName} />
              : <Markdown viewRaw={viewRaw} markdownData={fileData} fileType={fileExt} />
          }
        </root.div>
      </BodySection>}
    </>
  )
}
