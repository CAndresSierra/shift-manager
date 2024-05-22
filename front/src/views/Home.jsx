import styles from "./styles/Home.module.css";
import SectionHome from "../components/SectionHome/SectionHome";

const Home = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1Home}>¡Bienvenidos a BarberStyle!💈</h1>
      <SectionHome />
    </div>
  );
};

export default Home;
