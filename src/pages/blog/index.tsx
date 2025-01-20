import { PageTitle } from '@components/PageTitle';
import styles from './index.module.scss';
import { InfoCard } from '@components/InfoCard';
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
        image={
          'https://s3-alpha-sig.figma.com/img/439a/3122/02997f565eb75a9d1161406a93bb0279?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BBC8XjrXk3gYV-6RrThIqRObE99PFeAFwyerjv~9kj3EIKx4YvufvrrW-SrGLUWrrWFyS2Qlo00M9gDWw5DC6BBlWOzZ5k5hnLdWc33MFEYtO~O2WTUBB8b2geSFc4dnW7wCKSglzXm4fhIBrA5e7s2ZTvV3o6SIQB4JAcTR1BnsKz2e-5Wvs1j3RZFKcihiO7BjBdZMLDEULyWqi3X4y4GLvYJgZv~Gj2Qf~S7peN5cRCwfJ-l04xqxHtkxP6lN3nZccihFizGNf99VoGtYeFs6sMs0mFBk5P-BQa~O5cQjyH7OrI9es-CLKaIPrDEpeQI1jo4lLZJ2iDjFrzj2jg__'
        }
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
        image={
          'https://s3-alpha-sig.figma.com/img/439a/3122/02997f565eb75a9d1161406a93bb0279?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BBC8XjrXk3gYV-6RrThIqRObE99PFeAFwyerjv~9kj3EIKx4YvufvrrW-SrGLUWrrWFyS2Qlo00M9gDWw5DC6BBlWOzZ5k5hnLdWc33MFEYtO~O2WTUBB8b2geSFc4dnW7wCKSglzXm4fhIBrA5e7s2ZTvV3o6SIQB4JAcTR1BnsKz2e-5Wvs1j3RZFKcihiO7BjBdZMLDEULyWqi3X4y4GLvYJgZv~Gj2Qf~S7peN5cRCwfJ-l04xqxHtkxP6lN3nZccihFizGNf99VoGtYeFs6sMs0mFBk5P-BQa~O5cQjyH7OrI9es-CLKaIPrDEpeQI1jo4lLZJ2iDjFrzj2jg__'
        }
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
