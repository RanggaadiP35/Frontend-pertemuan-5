import styles from "./addmovie.module.css";

function Addmovie(){
    return (
        <div className={styles.container}>
        <section className={styles.addmovie}>
        <div className="addmovie__left">
                <img 
                className={styles.addmovie__image}
                src="https://picsum.photos/536/354" 
                alt=""></img>
            </div>
            <div className={styles.addmovie__right}> 
                <h2 className={styles.addmovie__judul}>Add Movie</h2>
                <h1 className={styles.addmovie__title}>title
                <td ><input type="text" name="title"></input></td></h1>
                <h1 className={styles.addmovie__year}>Year
                <td className={styles.addmovie__type}><input type="text" name="year"></input></td></h1>
                <button className={styles.addmovie__button}>Submit</button>
            </div>
        </section>
        </div>
    )
}

export default Addmovie