import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import styles from "../styles/Footer.module.css";
import { IoMailSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <h1 className={styles.title}>BarberStyle</h1>
      </div>
      <div className={styles.containerIcons}>
        <FaLinkedin className={styles.iconLinkdin} />
        <FaGithub className={styles.iconGithub} />
        <IoLogoInstagram className={styles.iconInstagram} />
        <IoMailSharp className={styles.iconMail} />
      </div>
    </footer>
  );
};

export default Footer;
