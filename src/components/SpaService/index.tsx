import styles from './index.module.scss';
import { Typography } from '@components/Typography';

type Props = {
  title: string;
  price: number;
  description: string;
};
export const SpaService = ({ title, description, price }: Props) => {
  return (
    <div className={styles.container}>
      <Typography variant={'header-3'} weight={'bold'}>
        {title}
      </Typography>
      <Typography
        variant={'header-3'}
        weight={'bold'}>{`$${price}`}</Typography>
      <Typography variant={'body-2'}>{description}</Typography>
    </div>
  );
};
