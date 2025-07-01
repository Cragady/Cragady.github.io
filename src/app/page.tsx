// import Image from 'next/image';
// import styles from './page.module.css';

import PSkillScroll from './components/PSkillScroll/PSkillScroll';

export default function Home() {
  return (
    <section className="container cont-cust">

      <div className="card-header">
        <h3 className="text-center border-top border-secondary text-white pt-3">Welcome! I&apos;m Craig Wright, a certified Full Stack Developer</h3>
      </div>

      <div className='row'>
        <div className='col'>

          {/* <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          /> */}
          <img className='rounded img-fluid img-me mb-1' src='/images/propic2.jpg' alt='Craig Wright' />
        </div>

        <div className='col quick-intro text-white align-self-center'>
          <p>As a developer, my goal is to ever expand my skill set, enabling me to be versatile in any work environment.</p>
        </div>
      </div>

      <PSkillScroll />

      <div className='badge mt-5' ><a href='https://www.youracclaim.com/badges/d41a41a4-1de2-48d4-8d46-545d4ff49c9b/public_url' target='_blank' rel='noopener noreferrer'><img className='img-fluid badge-img' src='/images/badge/badge-coding-bootcamp-trilogy.png' alt='certificate badge' /></a></div>

    </section>
  );
}
