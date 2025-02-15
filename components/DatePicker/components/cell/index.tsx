import styles from './index.module.scss';
import cn from 'classnames';

type Props = {
  children: string;
  isActive?: boolean;
  isDayName?: boolean;
  disabled?: boolean;
};

export const Cell = ({ children, isActive, isDayName, disabled }: Props) => {
  return (
    <span
      className={cn(styles.cell, {
        [styles.active]: isActive,
        [styles.dayName]: isDayName,
        [styles.disabled]: disabled,
      })}>
      {children?.slice(0, 2)}
    </span>
  );
};
