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
          <button className='btn dropdown-toggle btn-accordion' onClick={accordionBtn}>{props.fType ? props.fType : 'All'}</button>
        </div>
        <div className='types-holder'>
          <div className={styles['btn-in-hiding']} id='show-hide'>
            {/* @ts-expect-error defaultValue is an ancient artifact */}
            <button className='btn btn-port m-1' name='' defaultValue onClick={(event) => {props.onClick(event); accordionBtn(event)}} value='' >All</button>
            {butArr.map(types =>{
              return(<button className='btn btn-port m-1' name={types} key={types + '-skills'} onClick={(event) => {props.onClick(event); accordionBtn(event)}}>{types}</button>)
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
