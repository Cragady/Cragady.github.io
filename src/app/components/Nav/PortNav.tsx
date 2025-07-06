import Button from '../Button/Button';
import styles from './Nav.module.css';

//temporary array for laying the buttons,
//I will probably find a smarter way to do this later

const butArr = ['Portfolio', 'No-Script', 'Basic',
    'HTML', 'CSS', 'JavaScript', 'Vanilla-JS',
    'Bootstrap', 'jQuery', 'Firebase', 'API', 'Hardware-Interface',
    'Node', 'CLI', 'NPM', 'MySQL', 'Express', 'Handlebars',
    'Sequelize', 'ORM', 'MongoDB', 'Passport', 'User-Login',
    'Mongoose', 'ES6', 'React', 'Yarn', 'MERN', 'Axios',
];

// eslint-disable-next-line
function accordionBtn(e: any){
  const element = document.getElementById('show-hide');
  if (!element) return;

  if(element.style.maxHeight){
    element.style.maxHeight = '';
  } else {
    element.style.maxHeight = element.scrollHeight + 'px';
  }
};

export default function PortNav(props: any) {
  return(
    <section className={styles['port-head']}>
      <h1 className={styles['port-head-heading']}>Projects</h1>

      <div className={styles['nav-cust-port']}>
        <div>Filtered By: </div>
        <div className={styles['btn-acc-holder']}>
          <Button isDropdown={true} onClick={accordionBtn}>{props.fType ? props.fType : 'All'}</Button>
        </div>
        <div className='types-holder'>
          <div className={styles['btn-in-hiding']} id='show-hide'>
            <Button className={styles['btn-port']} onClick={(event) => {props.onClick(event); accordionBtn(event)}}>All</Button>
            {butArr.map(types =>{
              return(<Button className={styles['btn-port']} name={types} key={types + '-skills'} onClick={(event) => {props.onClick(event); accordionBtn(event)}}>{types}</Button>)
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
