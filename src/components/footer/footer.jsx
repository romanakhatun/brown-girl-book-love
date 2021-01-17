import styles from './footer.module.scss';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import Newsletter from '../newsletter/newsletter';

const Footer = () => {
  const todayYear = new Date().getFullYear();

  return (
    <footer className={styles['jsx-footer']}>
      <div className={styles['inner-container']}>
        <div>
          <div className={styles.social}>
            <a aria-label="facebook" href="https://www.facebook.com/browngirlbooklover/">
              <FaFacebookF />
            </a>
            <a aria-label="Instagram" href="https://www.instagram.com/browngirlbooklover/">
              <FaInstagram />
            </a>
            <a aria-label="Youtube" href="https://www.youtube.com/user/Lmurray81/">
              <FaYoutube />
            </a>
          </div>
          <div className={styles.copyright}>
            <small>&copy; {todayYear}, Brown Girl Book Lover</small>
          </div>
        </div>
        <div className={styles['newsletter-container']}>
          <Newsletter />
        </div>
      </div>
    </footer>
  );
}
export default Footer;
