import styles from './Footer.module.css';
import liBlack from '../../linkedin-black.png'
import liColor from '../../linkedin-color.png'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            All rights reserved
            <a className={styles.liAnchor} href="https://www.linkedin.com/in/marco-tignanelli-34871a217/" target='_blank'>
                <img className={styles.liBlack} src={liBlack} alt="Author's LinkedIn" />
                <img className={styles.liColor} src={liColor} alt="Author's LinkedIn" />
            </a>
        </footer>
    )
}

export default Footer;