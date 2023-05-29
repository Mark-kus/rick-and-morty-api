import styles from './Footer.module.css';
import liBlack from '../../assets/linkedin-black.png'
import liColor from '../../assets/linkedin-color.png'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <span>All rights reserved</span>
            <a className={styles.liAnchor} href="https://www.linkedin.com/in/marco-tignanelli-34871a217/" target='_blank'>
                <img className={styles.liBlack} src={liBlack} alt="Author's LinkedIn" />
                <img className={styles.liColor} src={liColor} alt="Author's LinkedIn" />
            </a>
        </footer>
    )
}

export default Footer;