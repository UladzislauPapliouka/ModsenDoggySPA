import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import styles from './index.module.scss';
interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?:
    | 'header-1'
    | 'header-2'
    | 'header-3'
    | 'header-4'
    | 'header-5'
    | 'body-1'
    | 'body-2'
    | 'body-3';
  weight?: 'normal' | 'bold';
}
export const Typography = ({
  variant = 'body-1',
  weight = 'normal',
  ...props
}: Props) => {
  return (
    <span
      className={`${styles.component} ${styles[variant]} ${styles[weight]}`}
      {...props}></span>
  );
};
