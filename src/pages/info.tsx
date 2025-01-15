import { PageTitle } from '@components/PageTitle';
import styles from './info.module.scss';
import { CiSearch } from 'react-icons/ci';

export default function IndexPage() {
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
      <div className={styles.image}>
        <img
          src="https://s3-alpha-sig.figma.com/img/24d9/f38e/529f34ac75f68f1b68eadb80a067d320?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MBNwF3O6V5boo409s2nSgWustOPQzUe4IW289we7a6oT9WmtwyD5Oyvvjun7lWupJwXBC2v5WaKglyWetRDay11L5sgTVly8cn5I3XRjYdTZwLMI9LBHAmGsXwegAgJ~tTsp4ZHH4ziQNa6sE~zFenobjsqJLDkvltyjI4KNbPwG48IEKuC~m48G~RfqfdiV1hTqwoDx5cNN~Xdkh1-bw27ewK6D9aWiOwej8oqWlI7Fo8UvYCqfYmf5UOOCV5ZRS~~pMOmIkLDMk3WW2i24~lcqpLsMd4iYGifacpgjCNgngsyRzAbxJ4C8zfMG73k8aorjporQfuw8Riskj-KxGg__"
          alt=""
        />
        <span>Siberian Husky</span>
      </div>
      <div className={styles.descriptions}>
        <span>Energy: 5</span>
        <span>Min life expectancy: 5</span>
        <span>Good with strangers: 5</span>
        <span>Good with other dogs: 5</span>
      </div>
    </div>
  );
}
