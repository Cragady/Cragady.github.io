'use client';

import root from 'react-shadow';
import BodySection from '@/app/components/BodySection/BodySection';
import Button from '@/app/components/Button/Button';
import Markdown from '@/app/components/Markdown/Markdown';
import { JSX, useEffect, useRef, useState } from 'react';
import styles from './page.module.css';
import globalStyles from '@/app/css_modules/global.module.css';


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
      <li className={styles['li-btn-house']} key={`portfolio-button-setter-${i}`}>
        <Button onClick={(e) => { portfolioButtonClickHandler(e, mapFiles) }} dataAttributes={{'data-public-path': fullPath, 'data-name': name}}>
          {name}
        </Button>
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
      <li className={styles['li-btn-house']} key={`file-button-fetcher-${i}`}>
        <Button onClick={fileButtonClickHandler} dataAttributes={{'data-public-path': fullPath, 'data-name': name}}>
          {name}
        </Button>
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
      <BodySection className={styles['body-section-spacer']} titleText={'Old Portfolios'} titleLevel={1} cardClassName={styles['card-header-spacer']}>
        <p className={globalStyles['p-about']}>
          This page will act as a directory for old portfolios that were required by the classes
          I&apos;ve attended. These are massively underwhelming, and I&apos;m keeping these around
          just for legacy&apos;s sake, to look at, cringe at, and make fun of.
        </p>

        <ul className='px-5'>
          {portfolioButtons}
        </ul>

      </BodySection>

      {files && <BodySection className={styles['body-section-spacer']} titleText={'Files & Link'} titleLevel={2} cardClassName={styles['card-header-spacer']}>

        <ul className='px-5'>
          {files}
        </ul>
      </BodySection>}

      {fileData && <BodySection className={styles['body-section-spacer']} titleText={`File Preview: ${projectName}`} titleLevel={2} cardClassName={styles['card-header-spacer']}>
        <Button className={styles['raw-btn']} onClick={viewRawButtonHandler}>{viewRaw ? 'View Parsed' : 'View Raw'}</Button>
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
