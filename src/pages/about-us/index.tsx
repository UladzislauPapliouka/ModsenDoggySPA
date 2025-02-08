import { InfoCard } from '@components/InfoCard';
import styles from './index.module.scss';
import { PageTitle } from '@components/PageTitle';
import firstImage from '../../assets/about-us-1.png';
import secondImage from '../../assets/about-us-2.png';
export default function AboutUsPage() {
  return (
    <div className={styles.container}>
      <PageTitle
        title={'About Us'}
        subtitle={' Our Owners Love Dogs and Cats Only'}
      />

      <>
        <InfoCard
          image={firstImage.src}
          text={
            'Here at Luxe Animal Spa we aim to provide you with the best service\n' +
            '          possible for both you and your pet! We pride ourselves in offering a\n' +
            '          true first-class experience.\n\n Our grooming equipment is top quality. We\n' +
            '          use only the most trusted brands in the industry which provides a\n' +
            '          beautiful, calming, and safe salon experience for your pets.'
          }
        />
        <InfoCard
          image={secondImage.src}
          reversed
          text={
            'Here at Luxe Animal Spa we aim to provide you with the best service\n' +
            '          possible for both you and your pet! We pride ourselves in offering a\n' +
            '          true first-class experience.\n\n Our grooming equipment is top quality. We\n' +
            '          use only the most trusted brands in the industry which provides a\n' +
            '          beautiful, calming, and safe salon experience for your pets.'
          }
        />
      </>
    </div>
  );
}
