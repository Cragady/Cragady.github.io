import BodySection from '../components/BodySection/BodySection';
import ImgMe from '../components/ImgMe/ImgMe';
import styles from './page.module.css';
import globalStyles from '@/app/css_modules/global.module.css'

export default function About() {

  return(
    <BodySection
      className={`py-2 mb-3`}
      headingClassName={`${styles['about-title']}`}
      imgSlot={<ImgMe className={styles['img-me-override']} />}
      titleLevel={1}
      titleText="About Me"
    >

      <p className={`${globalStyles['p-about']} ${styles['mt-4']}`}>My name is Craig, I&apos;m currently seeking a more technicaly oriented career.
        To actualize this goal, I attended a six month long coding bootcamp hosted by the University of Utah.
        My experience with this course was crucial for my growth as a developer. It has given me a strong
        starting point to build off of, and has given me important studying techniques to learn new technologies
        and current web development practices. With these techniques, I can keep expanding my knowledge to learn
        anything I set my mind to.
      </p>

      <p className={`${globalStyles['p-about']}`}>My interest in web development began as I was taking a class through SLCC,
        Living in a Digital World. On one assignment, the class was split into groups to build a wiki page.
        This excersize required the groups to create a mock event; the wiki had a complete setup with scheduling,
        a map of the area with hotel markers, video advertisements, and descriptions of the event.
      </p>

      <p className={`${globalStyles['p-about']}`}>
        One of my responsibilities was the overall design of the page. The wiki had templates available for this
        portion. The vanilla templates were boring, so I explored my options with the setup. There was an option
        to edit the html of the page. It was with this that I was exposed to HTML and inline CSS. Since then
        I&apos;ve had a fascination for what makes a web page what it is, and how it works; I&apos;ve decided to take steps
        towards becoming a web developer.
      </p>

      <p className={`${globalStyles['p-about']}`}>
        While learning web development, I had those same feelings of satisfaction as I did with the group project
        in my early college days. With the SLCC class, everything was purely visual. When I was introduced to
        JavaScript, I learned I could do anything that any other website could do with the correct implementation
        of logic. This added a whole new level of nuance to web development that I found enthralling. Being able to
        approach a problem with code, and finding a solution feels very rewarding. Even rewarding at the times where
        a work around, or a new approach is necessary for the completion of the overall goal.
      </p>

      <h2 className={`${styles['about-second-heading']}`}>A more personal and relaxed note:</h2>

      <p className={`${globalStyles['p-about']}`}>
        I have several different hobbies, most the time I can&apos;t keep up with them all as I like to experience a plethora
        of activities. To work around my need for a vast set of hobbies, I focus on a few and touch up on the lesser visited
        hobbies sporadically.

      </p>

      <p className={`${globalStyles['p-about']}`}>
        I usually like to go longboarding when the weather is nice, or if that seems a bit too quick paced for me at the
        time I&apos;ll just go on a walk. I also enjoy gaming, although recently I haven&apos;t had as much time to devote towards gaming
        as I have in the past, but that&apos;s not necessarily a bad thing; I am devoting more time towards learning and self-driven
        projects.
      </p>

    </BodySection>
  );
}
