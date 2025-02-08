import { PageTitle } from '@components/PageTitle';
import styles from './page.module.scss';
import { InfoCard } from '@components/InfoCard';
import firstImage from '../../public/assets/blog-1.png';
import secondImage from '../../public/assets/blog-2.png';

export default function IndexPage() {
  return (
    <div className={styles.container}>
      <PageTitle
        title={'The Bark Chronicles'}
        subtitle={'Where To Read All About The Bark!'}
      />
      <span className={styles.cytate}>
        Rex, The Dog Who Never Stops Playing ... Ever
      </span>
      <InfoCard
        image={firstImage.src}
        text={
          'Sometimes it is difficult to get dogs \n' +
          '\n' +
          'interested in the toys you buy for them. .. \n' +
          '\n' +
          'Luckily for Rex, everything he sees is a \n' +
          '\n' +
          'potential toy for him! Never let him around \n' +
          '\n' +
          'your valuables or any socks. He will steal \n' +
          '\n' +
          'them and you will never see them again...\n'
        }
      />
      <InfoCard
        image={secondImage.src}
        text={
          'Sometimes it is difficult to get dogs \n' +
          '\n' +
          'interested in the toys you buy for them. .. \n' +
          '\n' +
          'Luckily for Rex, everything he sees is a \n' +
          '\n' +
          'potential toy for him! Never let him around \n' +
          '\n' +
          'your valuables or any socks. He will steal \n' +
          '\n' +
          'them and you will never see them again...\n'
        }
        reversed
      />
    </div>
  );
}
