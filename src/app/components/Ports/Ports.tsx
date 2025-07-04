import './Ports.css';

import { MouseEventHandler } from "react";

interface PortsProps {
  _id?: string;
  className?: string;
  piPath?: string | Blob;
  title: string;
  link?: string;
  repo?: string;
  onMouseLeave?: MouseEventHandler<HTMLDivElement>;
  onMouseOver?: MouseEventHandler<HTMLDivElement>;
}

export default function Ports({ _id, className, piPath, title, link, repo, onMouseOver, onMouseLeave }: PortsProps) {
  const passedClasses = className !== undefined ? ` ${className}` : '';

  return (
    <div className={`col p-0 p-img-div my-1 mx-auto${passedClasses}`} id={_id} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
      <img className='portimage' src={piPath} alt={title + ' project'} />
      <div className='view-destroyer' id={'cover-' + title}>
        <h1 className='col-12 destroyer-text'>{title}</h1>
        <a className='col another-a' href={link} target='_blank'>App</a>
        <a className='col another-a' href={repo} target='_blank'>Repository</a>
      </div>
    </div>
  );
};

