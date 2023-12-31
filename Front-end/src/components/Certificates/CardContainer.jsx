import Card from "./Card.jsx";
import styles from "../../styles/CardContainer.module.css"

function CardsContainer() {
    return (
        <div className={styles.cardContainer}>
            <Card 
            picture={"https://res.cloudinary.com/dce6wpls5/image/upload/v1701817934/certificad-curso-threejs_rcskbv.png"}  
            titulo="ThreeJS"
            className={styles.card1}
            description="Esta tecnología me ayudó a construir todo un sitio web pero  "
            ></Card>
            <Card 
            picture={"https://res.cloudinary.com/dce6wpls5/image/upload/v1701817931/diploma-csharp_page-0001_hljxr4.jpg"} 
            titulo="C#"
            className={styles.card2}
            ></Card>
            <Card 
            picture={"https://res.cloudinary.com/dce6wpls5/image/upload/v1701817931/diploma-basico-javascript_page-0001_myuxxq.jpg"} 
            titulo="JavaScript"
            className={styles.card3}
            ></Card>   
        </div>
    )
};

export default CardsContainer;