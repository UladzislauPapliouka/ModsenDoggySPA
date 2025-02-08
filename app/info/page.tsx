'use client';
import { PageTitle } from '@components/PageTitle';
import styles from './page.module.scss';
import { CiSearch } from 'react-icons/ci';
import { InfoCard } from '../../components/InfoCard';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
interface MinimalBreedInfo {
  id: string;
  name: string;
  image: { url: string };
}

async function getBreeds(
  signal: AbortSignal
): Promise<Array<MinimalBreedInfo>> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_DOG_API_DOMAIN as string}v1/breeds/?limit=10`,
    {
      headers: { 'x-api-key': process.env.NEXT_PUBLIC_DOG_API_KEY as string },
      signal,
    }
  );

  return res.json() as Promise<Array<MinimalBreedInfo>>;
}

export default function IndexPage() {
  const router = useRouter();
  const [breeds, setBreeds] = useState<MinimalBreedInfo[]>([]);
  useEffect(() => {
    const ac = new AbortController();
    getBreeds(ac.signal).then(data => {
      setBreeds(data);
    });
    return () => {
      ac.abort('');
    };
  }, []);
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
          <div
            key={breed.id}
            onClick={() => {
              router.push(`/info/${breed.id}`);
            }}>
            <InfoCard
              image={breed.image.url}
              text={breed.name}
              reversed={i % 2 == 0}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
