import style from 'index.module.scss';
import instagram from '../../../public/instagram.svg';
import facebook from '../../../public/facebook.svg';
import pinterest from '../../../public/pinterest.svg';
import twitter from '../../../public/twitter.svg';
import snapchat from '../../../public/snapchat.svg';
import Image from 'next/image';

const social = {
  instagram: {
    image: instagram,
    link: '',
  },
  facebook: {
    image: facebook,
    link: '',
  },
  pinterest: {
    image: pinterest,
    link: '',
  },
  twitter: {
    image: twitter,
    link: '',
  },
  snapchat: {
    image: snapchat,
    link: '',
  },
};

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.primary}>
        <div className={style.service}>
          <h2>Customer service</h2>
          <span>Blog</span>
          <span>Cancellation</span>
          <span>Track Your Animal</span>
          <span>Luxe’s Annual Spa Day 2021</span>
          <span>Payment Options</span>
        </div>
        <div className={style.subscribe}>
          <span>Subscribe to our Newsletter</span>
          <div>
            <input placeholder={'Email'} type="text" />
            <button>Submit</button>
          </div>
          <div className={style.social}>
            <span>Connect With Us On Social Media</span>
            <div>
              {Object.values(social).map(({ image }) => (
                <Image src={image as string} alt={'test'} />
              ))}
            </div>
          </div>
        </div>
        <div className={style.navigation}>
          <div>
            <h2>Navigation</h2>
            <span>Home</span>
            <span>About Us</span>
            <span>Contact Us</span>
            <span>FAQs</span>
            <span>Help with navigation</span>
          </div>
        </div>
      </div>
      <div className={style.secondary}>
        <span>Cookie policy</span>
        <span>Cookie settings</span>

        <span>Copyright 2021 Luxe Animal Spa, LLC. All rights reserved.</span>
        <span>Terms</span>
        <span>Privacy</span>
        <span>Security</span>
      </div>
    </footer>
  );
};
