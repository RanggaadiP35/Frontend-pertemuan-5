import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.hero__left}>
          <h2 className={styles.hero__title}>Spider-Man: No Way Home</h2>
          <h3 className={styles.hero__genre}>
            Genre: Laga/Petualangan
          </h3>
          <p className={styles.hero__description}>
          Identitas Spider-Man sekarang sudah terungkap, 
          dan Peter meminta bantuan Doctor Strange. 
          namun sebuah kesalahan terjadi, dan itu justru mengundang 
          musuh berbahaya dari dunia lain, mereka mulai bermunculan. 
          Hal itu memaksa Peter mencari apa makna sebenarnya menjadi Spider-Man.
          </p>
          <button className={styles.hero__button}>Watch</button>
        </div>
        <div className="hero__right">
          <img
            className={styles.hero__image}
            src="spidermain.jpg"
            alt="placeholder"
          />
        </div>
      </section>
    </div>
  );
}

export default Hero;
