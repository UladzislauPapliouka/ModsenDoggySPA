import styles from './contact-us.module.scss';
import { PageTitle } from '@components/PageTitle';
import { useForm } from 'react-hook-form';
import { object, ObjectSchema, string as yupString } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  message: string;
}
const validationSchema: ObjectSchema<FormState> = object({
  firstName: yupString().required(),
  lastName: yupString().required(),
  email: yupString().email().required(),
  phoneNumber: yupString().optional(),
  message: yupString().required(),
});

export default function IndexPage() {
  const { register, handleSubmit, reset } = useForm<FormState>({
    resolver: yupResolver(validationSchema),
  });
  return (
    <div className={styles.container}>
      <PageTitle title={'Contact'} />
      <hr />
      <span className={styles.info}>
        For customer service inquiries, please email us at{' '}
        <span className={styles.email}>customerservice@luxeanimalspa.ca</span>.
        For spa inquiries, please include your animal’s name for faster service.
        For your protection, please do not include your credit card or banking
        information details in your email.
      </span>
      <form
        className={styles.contactForm}
        onSubmit={handleSubmit(e => {
          console.log(e);
          reset();
        })}>
        <input
          {...register('firstName')}
          style={{ gridArea: 'firstName' }}
          placeholder={'First Name'}
        />
        <input
          {...register('lastName')}
          style={{ gridArea: 'lastName' }}
          placeholder={'Last Name'}
        />
        <input
          {...register('email')}
          style={{ gridArea: 'email' }}
          placeholder={'Email'}
        />
        <input
          {...register('phoneNumber')}
          style={{ gridArea: 'phoneNumber' }}
          placeholder={'Phone Number'}
        />
        <textarea
          {...register('message')}
          style={{ gridArea: 'message' }}
          rows={16}
          placeholder={'Your massage goes here...'}
        />
        <button
          style={{
            gridArea: 'submit',
            justifySelf: 'center',
          }}>
          Submit
        </button>
      </form>
    </div>
  );
}
