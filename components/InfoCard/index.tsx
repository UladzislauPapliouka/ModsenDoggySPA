import styles from './index.module.scss';
interface Props {
  image: string;
  text: string;
  reversed?: boolean;
}

export const InfoCard = ({ image, text, reversed }: Props) => {
  return (
    <div className={`${styles.infoCard} ${reversed && styles.reversed}`}>
      <img src={image} alt="info-card-provided-image" />
      <span>{text}</span>
    </div>
  );
};
