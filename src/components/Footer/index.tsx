import style from './index.module.scss';
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
          <input type="text" />
          <button>Submit</button>
        </div>
        <div className={style.social}>
          <span>Connect With Us On Social Media</span>
          <img src="a" alt="inst" />
          <img src="a" alt="facebook" />
          <img src="a" alt="pintrest" />
          <img src="a" alt="twitter" />
          <img src="a" alt="span" />
        </div>
        <div className={style.navigation}>
          <h2>Navigation</h2>
          <span>Home</span>
          <span>About Us</span>
          <span>Contact Us</span>
          <span>FAQs</span>
          <span>Help with navigation</span>
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
