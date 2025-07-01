'use client';

import './Footer.css';

// function copyText(event){
//     const {name} = event.target;
//     console.log(event.target);
    // const copyText = document.getElementById(name);
    // console.log(copyText.innerHTML);
    // copyText.select();
    // document.execCommand('copy');
// };

function copyText(event) {
  const name = event.target.getAttribute('name');
  const copyText = document.getElementById(name);
  copyText.select();
  document.execCommand('copy');
}

export default function Footer() {
  return(
    <footer className='footer text-center'>
      <section className='container-fluid row no-gutters text-center'>
        <div className='col row'>
          <p className='col-12'>My Profiles:</p>
          <div className='col-6 text-right'><a href='https://github.com/Cragady' target='_blank' rel="noopener noreferrer"><img className='aref-img img-fluid rounded' alt='' src='/images/GitHub-Mark.png' /></a></div>
          <div className='col-6 text-left'><a href='https://www.linkedin.com/in/craigwrightcm/' target='_blank' rel="noopener noreferrer"><img className='aref-img img-fluid' alt='' src='/images/Linkedin-ico.png' /></a></div>
        </div>
        <div className='col row'>
          <p className='col-12'>Files:</p>
          <div className='col-12'>Word Document</div>
          <div className='col-12'>PDF</div>
        </div>
        <p className='mb-0 col-12'> <span className='email' name='email' onClick={copyText}>Email me at: &nbsp;
          <input id='email' name='email' className='text-diff' value='' readOnly />
        </span></p>
      </section>
    </footer>
  );
};
