'use client';

import { useEffect, useState } from 'react';
import PortNav from '../components/Nav/PortNav';
import Ports from '../components/Ports/Ports';
import { PictureInfo, PictureData, pictureInfoData } from '@/utils/PicData';
import '../globals.css';

export default function Portfolio() {

  const [ picData, setPicData ] = useState<PictureData>([]);
  const [ filterType, setFilterType ] = useState('');

  useEffect(() => {
    setPicData(pictureInfoData);
  }, []);

  function filterChange(event: any) {
    setFilterType(event.target.name);
  }

  function handleMouseOver(passer: string, visibility: string) {
    const el = document.getElementById('cover-' + passer);
    if (!el) return;
    el.style.visibility = visibility;
  }

  return(
    <section className='container px-0'>
      <PortNav fType={filterType} onClick={filterChange} />
      <div id='my-ports' className='container px-0 no-gutters row'>
        {picData !== undefined &&
          picData.map((pics: PictureInfo, i) =>{
            const {piPath, title, link, repo} = pics;
            return filterType === '' ?
              (
                <Ports _id={'ports-' + i + '-pic-data-info'} key={i + '_pic-data-info'} piPath={piPath}
                  title={title} link={link} repo={repo}
                  onMouseOver={() => handleMouseOver(title, 'visible')}
                  onMouseLeave={() => {handleMouseOver(title, 'hidden')}}
                />
              )
            : !pics.tags.includes(filterType.toLowerCase()) ?
              null
            : (
              <Ports _id={'ports-elsed-' + i + '-pic-data-info'} key={i + '_pic-data-info_elsed'} piPath={piPath}
                title={title} link={link} repo={repo}
                onMouseOver={() => handleMouseOver(title, 'visible')}
                onMouseLeave={() => {handleMouseOver(title, 'hidden')}}
              />
            );
          })
        }
      </div>
    </section>
  );

}
