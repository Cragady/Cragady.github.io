'use client';

import './Footer.css';

export default function Footer() {
  return(
    <footer className='footer text-center'>
      <section className='container-fluid row no-gutters text-center'>
        <div className='col row'>
          <p className='col-12'>My Profiles:</p>
          <div className='col-6 text-right'><a href='https://github.com/Cragady' target='_blank' rel="noopener noreferrer"><img className='aref-img img-fluid rounded' alt='' src='/images/GitHub-Mark.png' /></a></div>
          <div className='col-6 text-left'><a href='https://www.linkedin.com/in/craigwrightcm/' target='_blank' rel="noopener noreferrer"><img className='aref-img img-fluid' alt='' src='/images/Linkedin-ico.png' /></a></div>
        </div>
      </section>
    </footer>
  );
};
