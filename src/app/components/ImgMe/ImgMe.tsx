import styles from './ImgMe.module.css';

interface ImgMeProps {
  className?: string;
}

export default function ImgMe({ className }: ImgMeProps) {
  const passedClass = className !== undefined ? ` ${className}` : '';

  return (
    <img className={`${styles['img-me']}${passedClass} mb-1`} src='/images/propic2.jpg' alt='Craig Wright' />
  )
}
