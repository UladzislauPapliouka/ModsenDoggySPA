import styles from './index.module.scss';

type Props = {
  title: string;
  price: number;
  description: string;
};
export const SpaService = ({ title, description, price }: Props) => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>{title}</span>
      <span className={styles.price}>{`$${price}`}</span>
      <span className={styles.description}>{description}</span>
    </div>
  );
};
