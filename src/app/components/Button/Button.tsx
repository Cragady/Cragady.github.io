import { JSX, MouseEventHandler } from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  children?: JSX.Element | string;
  className?: string;
  isDropdown?: boolean;
  name?: string;
  dataAttributes?: Record<string, string>;

  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function Button({ children, className, isDropdown = false, name='', dataAttributes, onClick }: ButtonProps) {
  const passedClass = className !== undefined ? className : '';
  const dropdown = isDropdown ? styles['dropdown-toggle'] : '';
  const dataAttrs = dataAttributes !== undefined ? dataAttributes : {'data-placeholder-attr': ''};

  const classes = `${styles.btn} ${dropdown} ${passedClass}`;

  return (
    <button className={classes} name={name} onClick={onClick} {...dataAttrs}>{children !== undefined && children}</button>
  )
}
