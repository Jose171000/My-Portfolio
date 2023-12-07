import style from "../../styles/Card.module.css"
import { useState } from "react";

function Card(props) {
    const [cardFullScreen, setCardFullScreen] = useState(style.container)
    const [curtainFS, setCurtainFS] = useState(style.curtain)
    const handleClick = (event) => {
        event.preventDefault();
        setCardFullScreen(cardFullScreen === style.container ? style.fullScreen : style.container)
        setCurtainFS(curtainFS === style.curtain ? style.curtainFS : style.curtain)
    }
    return (
        <div >
            {curtainFS === style.curtainFS && <div className={style.curtainFS}></div>}
            <section onClick={handleClick} className={cardFullScreen}>
                <div className={style.curtain}>
                    {curtainFS === style.curtain && <h2 style={{color:"white", fontSize: "30px"}}>{props.titulo}</h2>}
                {/* {curtainFS === style.curtainFS && <h2 style={{color:"white", fontSize: "30px"}}>{props.titulo}</h2>} */}
                </div>
                <img src={props.picture} alt="No photo" className={style.picture} />
                {curtainFS === style.curtainFS && <p >Hola, mundo tengo todo lo que necesitas para ser el mejor programador</p>}
            </section>
        </div>
    )
}

export default Card;