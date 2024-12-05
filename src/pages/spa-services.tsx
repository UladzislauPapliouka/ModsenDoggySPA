import { SpaService } from '@components/SpaService';
import styles from './spa-service.module.scss';
import { spaServices } from '../shared/spa-services';

export default function IndexPage() {
  return (
    <div className={styles.container}>
      <span className={styles.title}>Spa Service</span>
      <hr />
      {spaServices.map(service => (
        <SpaService {...service} />
      ))}
      <hr />
    </div>
  );
}
