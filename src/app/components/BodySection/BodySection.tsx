import './BodySection.css';

interface BodySectionProps {
  children: any;
  titleLevel: number;
  titleText: string;
  className?: string | undefined;
  maxWidth: number,
}

export default function BodySection({
  children,
  titleLevel = 2,
  titleText = "Hello, World!",
  className,
  maxWidth = 1200,
}: BodySectionProps) {

  function Title() {

    const titleClass = 'text-center border-top border-secondary text-white';

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
    <section className={`container cont-cust py-2 ${classPass}`}>
      <div className="card-header">
        <Title />
      </div>

      {children}

    </section>
  );
}

