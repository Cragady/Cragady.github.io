'use client';

import { useEffect } from 'react';

import './BackgroundDancer.css';

const PIC_LIFETIME = 90000;
// const PIC_LIFETIME = 5000;


export default function BackgroundDancer() {
  useEffect(() => {
    diffground();
  }, []);

  function picRando(pathing: string, rando: any, inheriter?: any, cb?: any) {
    const esperPic = pathing + rando[Math.floor(Math.random() * rando.length)];
    if(inheriter === esperPic){
      return cb(pathing, rando, inheriter, cb);
    };
    return esperPic;
  };

  function fadeGround(fRun: any, fBack: any, runner: any, finisher: any, cb: any, middle: any) {
    const element = document.getElementById('diffground2');
    if (!element) return;
    if(fRun){
      runner += 10;
    } else if(fBack){
      runner -= 10;
    };
    if(runner === finisher && middle !== undefined){
      element.style.background = 'rgba(0, 0, 0, 1)';
      middle();
      setTimeout(function(){cb(false, true, 1000, 770, cb)}, 600);
      return;
    } else if(runner === finisher && middle === undefined){
      element.style.background = 'rgba(0, 0, 0, 0.770)';
      return;
    };
    element.style.background = `rgba(0, 0, 0, 0.${runner})`;
    setTimeout(function(){cb(fRun, fBack, runner, finisher, cb, middle)}, 35);
  };

  function diffground() {
    const picArr = ['bamazon.PNG', 'Book-MarkY!.PNG', 'burgers.png',
      'Burgers2.PNG', 'chef-in-your-pantry.PNG', 'clicky.PNG',
      'friend-finder.PNG', 'friend-finder2.PNG',
      'hangman-game.PNG', 'intronerd.PNG', 'liriJS.PNG', 'nyt-scrubber.PNG',
      'RPG-game.PNG', 'RPS-game.PNG', 'trivia-game.PNG', 'web-scraper.PNG',
    'word-guess-pic.PNG'];
    const element = document.getElementById('diffground');
    if (!element) return;
    const prePath = '/images/';
    const piPath = picRando(prePath, picArr);
    let passPi = piPath;
    element.style.background = `url(${piPath})`;
    element.style.position = 'fixed';
    element.style.backgroundSize = '100% 100vh';
    element.style.height = '100%';
    element.style.minHeight = '100%';
    element.style.width = '100%';
    element.style.zIndex = '-2';

    setInterval(function(){
      const piPath = picRando(prePath, picArr, passPi, picRando);
      passPi = piPath;
      fadeGround(true, false, 770, 1000, fadeGround,
        function(){
          element.style.background = `url(${piPath})`;
          element.style.position = 'fixed';
          element.style.backgroundSize = '100% 100vh';
          element.style.height = '100%';
          element.style.minHeight = '100%';
          element.style.width = '100%';
          element.style.zIndex = '-2';
        }
      );
    }, PIC_LIFETIME);
  };

  return(
    <div className='diffground' id='diffground'>
      <div className='diffground2' id='diffground2'></div>
    </div>
  );
};
