import styles from "../styles/SectionHome.module.css";

const SectionHome = () => {
  return (
    <div className={styles.container}>
      <img
        className={styles.imgSectionHome}
        src="https://i.pinimg.com/736x/d8/de/97/d8de976afd880ce5afa55eed14a79fc8.jpg"
        alt=""
      />

      <p className={styles.pSectionHome}>
        En nuestro exclusivo salón para caballeros, la elegancia y el estilo se
        fusionan. Aquí, no solo cuidamos tu cabello, sino también tu confianza.
        Nuestros talentosos barberos están listos para ofrecerte cortes de
        vanguardia, afeitados impecables y tratamientos personalizados. Desde el
        clásico corte de caballero hasta las últimas tendencias, estamos
        comprometidos con tu satisfacción. ¡Relájate, disfruta de una bebida y
        déjanos realzar tu apariencia! ¡Te esperamos con los brazos abiertos!
        💪✂️
        <br />
        <br />
        En BarberStyle, no solo se trata de cortes y afeitados; es una
        experiencia completa. Nuestro ambiente masculino y relajado te hará
        sentir como en casa. Desde la bienvenida con una taza de café hasta la
        atención personalizada, cada detalle está diseñado para ti. Nuestros
        barberos expertos no solo dominan las tijeras, sino también las
        conversaciones. Compartimos historias, risas y consejos sobre cuidado
        del cabello y barba. Ya sea que busques un look clásico o algo más
        atrevido, estamos aquí para asesorarte y crear un estilo que refleje tu
        personalidad.
      </p>
    </div>
  );
};

export default SectionHome;
