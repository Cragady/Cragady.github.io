import styles from './ContentArea.module.css';

interface ContentAreaProps {
  children: any;
  className?: string;
}

export default function ContentArea({
  children,
  className,
}: ContentAreaProps) {

  const passedClassName = className !== undefined ? ` ${className}` : '';

  return (
    <section className={styles['content-area'] + passedClassName}>
      {children}
    </section>
  )
}
