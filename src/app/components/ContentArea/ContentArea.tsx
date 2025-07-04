import styles from './ContentArea.module.css';

interface ContentAreaProps {
  children: any;
  contentMaxWidth?: string;
  className?: string;
}

export default function ContentArea({
  children,
  contentMaxWidth = process.env.NEXT_PUBLIC_CONTENT_MAX_WIDTH,
  className,
}: ContentAreaProps) {

  const maxWidth = contentMaxWidth === undefined ? 1200 : contentMaxWidth;
  const passedClassName = className !== undefined ? ` ${className}` : '';

  return (
    <section className={styles['content-area'] + passedClassName}>
      <div dangerouslySetInnerHTML={{__html: `<style>.${styles['content-area']} { max-width: ${maxWidth}px; } </style>`}}/>
      {children}
    </section>
  )
}
