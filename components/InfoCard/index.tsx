import styles from './index.module.scss';
import Image from 'next/image';
interface Props {
  image: string;
  text: string;
  reversed?: boolean;
}

export const InfoCard = ({ image, text, reversed }: Props) => {
  return (
    <div className={`${styles.infoCard} ${reversed && styles.reversed}`}>
      <Image
        height={500}
        width={500}
        src={image}
        alt="info-card-provided-image"
      />
      <span>{text}</span>
    </div>
  );
};
