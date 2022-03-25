import styles from "./Movies.module.css";

function Movies() {
  return (
    <div className={styles.container}>
      <section className={styles.movies}>
        <h2 className={styles.movies__title}>Latest Movies</h2>
        <div className={styles.movie__container}>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src="venom.jpg"
              alt=""
            />
            <h4 className={styles.movie__title}>Venom</h4>
            <p className={styles.movie__date}>Date Title</p>
          </div>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src="eternals.jpg"
              alt=""
            />
            <h3 className={styles.movie__title}>Eternals</h3>
            <p className={styles.movie__date}>Date Title</p>
          </div>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src="shangchi.jpg"
              alt=""
            />
            <h3 className={styles.movie__title}>Shang-Chi</h3>
            <p className={styles.movie__date}>Date Title</p>
          </div>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src="spongebob.png"
              alt=""
            />
            <h3 className={styles.movie__title}>Spongebob</h3>
            <p className={styles.movie__date}>Date Title</p>
          </div>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src="kong.jpg"
              alt=""
            />
            <h3 className={styles.movie__title}>Godzilla vs Kong</h3>
            <p className={styles.movie__date}>Date Title</p>
          </div>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src="mortal.jpg"
              alt=""
            />
            <h3 className={styles.movie__title}>Mortal Kombat</h3>
            <p className={styles.movie__date}>Date Title</p>
          </div>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src="f9.jpg"
              alt=""
            />
            <h3 className={styles.movie__title}>Fast & Furious 9</h3>
            <p className={styles.movie__date}>Date Title</p>
          </div>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src="ron.jpg"
              alt=""
            />
            <h5 className={styles.movie__title}>Ron's Gone </h5>
            <p className={styles.movie__date}>Date Title</p>
          </div>
          {/* <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src="shangchi.jpg"
              alt=""
            />
            <h3 className={styles.movie__title}>Shang-Chi</h3>
            <p className={styles.movie__date}>Date Title</p>
          </div>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src="mortal.jpg"
              alt=""
            />
            <h3 className={styles.movie__title}>Mortal Kombat</h3>
            <p className={styles.movie__date}>Date Title</p>
          </div>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src="spongebob.png"
              alt=""
            />
            <h3 className={styles.movie__title}>Spongebob</h3>
            <p className={styles.movie__date}>Date Title</p>
          </div> */}
        </div>
      </section>
    </div>
  );
}

export default Movies;
