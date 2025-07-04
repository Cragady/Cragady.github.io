import { JSX } from 'react';
import ContentArea from '../ContentArea/ContentArea';
import styles from './BodySection.module.css';

interface BodySectionProps {
  children: any;
  imgSlot?: JSX.Element;
  titleLevel: number;
  titleText: string;
  className?: string | undefined;
}

export default function BodySection({
  children,
  imgSlot = undefined,
  titleLevel = 2,
  titleText = "Hello, World!",
  className,
}: BodySectionProps) {

  function Title() {

    const titleClass = styles.heading;

    switch (titleLevel) {
      case 1:
        return <h1 className={titleClass}>{titleText}</h1>
      case 2:
        return <h2 className={titleClass}>{titleText}</h2>
      case 3:
        return <h3 className={titleClass}>{titleText}</h3>
      default:
        return <h2 className={titleClass}>{titleText}</h2>
    }
  }

  const classPass = className !== undefined ? className : '';

  return(
    <ContentArea className={`container ${styles['cont-cust']} py-2 ${classPass}`}>
      <div className={styles['card-header']}>
        {imgSlot !== undefined && imgSlot}
        <Title />
      </div>

      {children}

    </ContentArea>
  );
}

