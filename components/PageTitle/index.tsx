import styles from './index.module.scss';
import { Typography } from '@components/Typography';
import cn from 'classnames';

interface Props {
  title: string;
  subtitle?: string;
  className?: string;
}
export const PageTitle = ({ title, subtitle, className }: Props) => {
  return (
    <div className={cn(styles.titleContainer, className)}>
      <Typography variant={'header-1'} weight={'bold'} className={styles.title}>
        {title}
      </Typography>
      {subtitle && (
        <Typography variant={'body-1'} className={styles.subTitle}>
          {subtitle}
        </Typography>
      )}
    </div>
  );
};
