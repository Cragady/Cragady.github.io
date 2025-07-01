'use client';

import { useRef, useState, useEffect } from 'react';

import Skills from "../Skills/Skills";
import './PSkillScroll.css';

//Throw this into the database later
const testArray = [
    'AJAX',
    'API',
    'Bootstrap',
    'CSS3',
    'Express',
    'Firebase',
    'git',
    'Handlebars',
    'Heroku',
    'HTML5',
    'JavaScript',
    'jQuery',
    'MERN',
    'MongoDB',
    'Mongoose',
    'MySQL',
    'Node',
    'React',
    'REST',
    'Sequelize'
];

export default function PSkillScroll() {
  const skillTimerRef = useRef(null);
  const skillResetterSetRef = useRef(null);
  const skillShowerSetRef = useRef(null);
  const [ skillShower, setSkillShower ] = useState([]);
  const [ skillWord, setSkillWord ] = useState('');

  useEffect(() => {
    skillTimerRef.current = skillTimerSet();

    return () => {
      clearInterval(skillTimerRef.current);
    }
  }, []);

  function skillTimerSet() {
    return setTimeout(() => {
      skillChanger();
    }, 10000)
  };

  function skillChanger() {
    function randSetter(){
      return Math.floor(Math.random() * testArray.length);
    };
    const oldWord = document.querySelector('.pskill-word').textContent;
    let hotSwap = randSetter();
    while(oldWord === testArray[hotSwap]){
      hotSwap = randSetter();
    };
    wordHandler(testArray[hotSwap]);
  };


  function skillShowerTimerSet() {
    return setTimeout(() => {
      skillTimerRef.current = skillTimerSet();
      const pWord = document.querySelector('.pskill-word');
      const pShow = document.querySelector('.pskill-show');
      if (pWord) pWord.style.opacity = 1;
    if (pShow) pShow.style.opacity = 1;
    }, 1000);
  };


  function skillResetter(skill) {
    clearInterval(skillShowerSetRef);
    return setTimeout(() => {
      setSkillWord(skill);
      setSkillShower([
        <Skills
          key={skill + 'shower'}
          img={`/images/skills/${skill}.png`} skill={skill}
          funkPass={() => {return}}
          extraClassName='pskill-pic psk-pic-shower' />
      ]);
      skillShowerSetRef.current = skillShowerTimerSet(skillTimerRef);
    }, 1500);
  };

  function wordHandler(e) {
    clearInterval(skillTimerRef.current);
    clearInterval(skillResetterSetRef.current);
    let skill;
    if(typeof e === 'string'){
      skill = e;
    } else if (typeof e === 'object'){
      skill = e.target.dataset.skill;
    };
    document.querySelector('.pskill-word').style.opacity = 0;
    document.querySelector('.pskill-show').style.opacity = 0;
    skillResetterSetRef.current = skillResetter(skill);
  };


  return(
    <section className='pskillscroll-container rounded'>
      <section className='pskill-sibling'>

        <div className='psk-child d-flex justify-content-center'>
          <h1 className='pskill-word col-12'>{skillWord ? skillWord : 'Skills'}</h1>
        </div>

      </section>

      <div className='pskillscroll'>
        <section className='pskill-elem'>

          <div className='pskill-show col-12'>{skillShower}</div>

          {testArray.map(skill =>{
            return (
              <Skills key={skill}
                img={`/images/skills/${skill}.png`} skill={skill}
                funkPass={(e) => {wordHandler(e)}}
                extraClassName='pskill-pic'
              />
            );
          })}

        </section>
      </div>
    </section>
  );
};
