'use client';
import styles from './page.module.scss';
import {
  object,
  ObjectSchema,
  string as yupString,
  date as yupDate,
} from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@components/Button';
import image from '../../public/assets/book-appointment.png';

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  message: string;
  time: string;
  date: Date;
  cardNumber: string;
  ccv: string;
  expiryDate: string;
  nameOnCard: string;
}
const validationSchema: ObjectSchema<FormState> = object({
  firstName: yupString().required(),
  lastName: yupString().required(),
  email: yupString().email().required(),
  phoneNumber: yupString().optional(),
  message: yupString().required(),
  time: yupString().required(),
  date: yupDate().required(),
  cardNumber: yupString().required(),
  ccv: yupString().required(),
  expiryDate: yupString().required(),
  nameOnCard: yupString().required(),
});

export default function IndexPage() {
  const { register, handleSubmit, reset } = useForm<FormState>({
    resolver: yupResolver(validationSchema),
  });
  return (
    <>
      <div className={styles.image}>
        <div>
          <span>Book An Appointment With Our Groom Specialist Today!</span>
        </div>
        <img src={image.src} alt="" />
      </div>
      <div className={styles.main}>
        <span>Enter your information here</span>
        <div>
          <form
            className={styles.form}
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
              rows={2}
              placeholder={'Your massage goes here...'}
            />
            <div className={styles.time}></div>
            <div className={styles.date}></div>
            <div className={styles.card}>
              <span>Enter your payment information</span>
              <input
                {...register('cardNumber')}
                style={{ gridArea: 'cardNumber' }}
                placeholder={'Card Number'}
              />
              <input
                {...register('ccv')}
                style={{ gridArea: 'ccv' }}
                placeholder={'CCV'}
              />
              <input
                {...register('expiryDate')}
                style={{ gridArea: 'expiryDate' }}
                placeholder={'Expiry Date'}
              />
              <input
                {...register('nameOnCard')}
                style={{ gridArea: 'nameOnCard' }}
                placeholder={'Name On Card'}
              />
              <div className={styles.paymentInfo}>
                <div>1 2 3 4 5</div>
                <span>
                  Please be advised cancelling within 24 hours of your scheduled
                  appointment will result in a cancellation fee of $300.00.
                </span>
              </div>
              <Button
                style={{
                  gridArea: 'submit',
                  justifySelf: 'center',
                }}>
                Submit
              </Button>
            </div>
          </form>
          <div></div>
        </div>
      </div>
    </>
  );
}
