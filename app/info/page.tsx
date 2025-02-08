import { PageTitle } from '@components/PageTitle';
import styles from './page.module.scss';
import { CiSearch } from 'react-icons/ci';
import { InfoCard } from '@components/InfoCard';
import Link from 'next/link';

interface MinimalBreedInfo {
  id: string;
  name: string;
  image: { url: string };
}

async function getBreeds(): Promise<Array<MinimalBreedInfo>> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_DOG_API_DOMAIN as string}v1/breeds/?limit=10`,
    {
      headers: { 'x-api-key': process.env.NEXT_PUBLIC_DOG_API_KEY as string },
    }
  );

  return res.json() as Promise<Array<MinimalBreedInfo>>;
}

export default async function IndexPage() {
  const breeds = await getBreeds();
  return (
    <div className={styles.container}>
      <PageTitle title={'INFO DOGS'} />
      <div>
        <span>
          Current Selection: <span>Beds & Cushions</span>
        </span>
        <label aria-label={'input'}>
          <input id={'input'} type="text" />
          <CiSearch size={40} />
        </label>
      </div>
      <div>
        {breeds.map((breed, i) => (
          <Link key={breed.id} href={`/info/${breed.id}`}>
            <InfoCard
              image={breed.image.url}
              text={breed.name}
              reversed={i % 2 == 0}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
