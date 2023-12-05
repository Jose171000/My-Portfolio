import styles from "../styles/FirtsMe.module.css"

function MyData (){
    return(
        <section>
        <h2>Hi, I'm a fullStack web developer and my name is <span className={styles.nombre}>Jose Reategui</span></h2>
        <p>I'm from Peru, I studied programming for more than a year and I'm always aware of all the technologies that can reduce the cost when it comes to website creation.</p>
        </section>
    )
}

export default MyData;