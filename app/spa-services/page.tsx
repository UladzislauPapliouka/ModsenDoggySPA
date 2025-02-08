import { SpaService } from '@components/SpaService';
import styles from './page.module.scss';
import { spaServices } from '../../shared/spa-services';
import { PageTitle } from '@components/PageTitle';

export default function IndexPage() {
  return (
    <div className={styles.container}>
      <PageTitle className={styles.title} title={'Spa Service'} />
      <hr />
      {spaServices.map(service => (
        <SpaService {...service} />
      ))}
      <hr />
    </div>
  );
}
