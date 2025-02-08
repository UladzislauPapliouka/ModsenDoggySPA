// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { PageTitle } from '@components/PageTitle';
import styles from './page.module.scss';
import { CiSearch } from 'react-icons/ci';

// import * as process from 'node:process';

interface BreedInfo {
  id: number;
  name: string;
  weight: { imperial: string; metric: string };
  height: { imperial: string; metric: string };
  life_span: string;
  bred_for: string;
  breed_group: string;
  country_code: string;
  temperament: string;
  origin: string;
  reference_image_id: string;
}
async function getBreed(id: string): Promise<BreedInfo & { image: string }> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_DOG_API_DOMAIN as string}v1/breeds/${id}`,
    { headers: { 'x-api-key': process.env.NEXT_PUBLIC_DOG_API_KEY as string } }
  );
  const dogInfo = (await res.json()) as BreedInfo;
  const res2 = await fetch(
    `${process.env.NEXT_PUBLIC_DOG_API_DOMAIN as string}v1/images/${dogInfo.reference_image_id}`,
    { headers: { 'x-api-key': process.env.NEXT_PUBLIC_DOG_API_KEY as string } }
  );
  const dogInfo2 = (await res2.json()) as { url: string };
  return { ...dogInfo, image: dogInfo2.url };
}

export default async function IndexPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const dog = await getBreed(id);
  console.log(dog);
  return (
    <div className={styles.container}>
      <PageTitle title={'INFO DOGS'} />
      <div>
        <span>
          Current Selection: <span>{dog.breed_group}</span>
        </span>
        <label aria-label={'input'}>
          <input id={'input'} type="text" />
          <CiSearch size={40} />
        </label>
      </div>
      <div className={styles.image}>
        <img src={dog.image} alt="" />
        <span>{dog.name}</span>
      </div>
      <div className={styles.descriptions}>
        {Object.entries(dog).map(([name, key]) => {
          if (/image|id|origin/.test(name)) return null;
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          if (typeof dog[name] === 'object') {
            return (
              <span>
                {name
                  .split('_')
                  .join(' ')
                  .replace(/\w/, m => m.toUpperCase())}
                : {dog[name].metric}
              </span>
            );
          }
          return (
            <span>
              {name
                .split('_')
                .join(' ')
                .replace(/\w/, m => m.toUpperCase())}
              : {key}
            </span>
          );
        })}
      </div>
    </div>
  );
}
