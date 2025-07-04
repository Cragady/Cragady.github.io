// import Image from 'next/image';
import styles from './page.module.css';

import BodySection from './components/BodySection/BodySection';
import PSkillScroll from './components/PSkillScroll/PSkillScroll';
import CertificateBadge from './components/CertificateBadge/CertificateBadge';

export default function Home() {
  return (
    <BodySection
      className={styles.main}
      titleText={"Welcome! I'm Craig Wright, a certified Full Stack Developer"}
      titleLevel={2}
    >

      <div className={styles.row}>
        <div className={styles.col}>

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

        <div className={`${styles.col} ${styles['align-self-center']} quick-intro text-white`}>
          <p>As a developer, my goal is to ever expand my skill set, enabling me to be versatile in any work environment.</p>
        </div>
      </div>

      <PSkillScroll />

      <CertificateBadge />

    </BodySection>
  );
}
