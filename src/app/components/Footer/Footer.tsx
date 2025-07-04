'use client';

import ContentArea from '../ContentArea/ContentArea';
import styles from './Footer.module.css';

export default function Footer() {
  return(
    <footer>
      <ContentArea className={styles.footer + ' text-center'}>
        <div className={styles.socials}>
          <div className='col-6 text-right'>
            <a href='https://github.com/Cragady' target='_blank' rel="noopener noreferrer">
              <img className={`${styles['aref-img']}`} alt='' src='/images/GitHub-Mark.png' />
            </a>
          </div>
          <div className='col-6 text-left'>
            <a href='https://www.linkedin.com/in/craigwrightcm/' target='_blank' rel="noopener noreferrer">
              <img className={`${styles['aref-img']}`} alt='' src='/images/Linkedin-ico.png' />
            </a>
          </div>
        </div>
      </ContentArea>
    </footer>
  );
};
