'use client';

import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import styles from './index.module.scss';

export const Button = (
  props: DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) => {
  return <button className={styles.button} {...props} />;
};
