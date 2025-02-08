import styles from './index.module.scss';

interface Props {
  title: string;
  subtitle?: string;
}
export const PageTitle = ({ title, subtitle }: Props) => {
  return (
    <div className={styles.titleContainer}>
      <span className={styles.title}>{title}</span>
      {subtitle && <span className={styles.subTitle}>{subtitle}</span>}
    </div>
  );
};
