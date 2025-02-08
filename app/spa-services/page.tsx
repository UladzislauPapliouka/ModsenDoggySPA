import { SpaService } from '@components/SpaService';
import styles from './page.module.scss';
import { spaServices } from '../../shared/spa-services';
import { Typography } from '@components/Typography';

export default function IndexPage() {
  return (
    <div className={styles.container}>
      <Typography weight={'bold'} variant={'header-1'}>
        Spa Service
      </Typography>
      <hr />
      {spaServices.map(service => (
        <SpaService {...service} />
      ))}
      <hr />
    </div>
  );
}
