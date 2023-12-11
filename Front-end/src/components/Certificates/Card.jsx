import style from "../../styles/Card.module.css"
import { useState } from "react";

function Card(props) { 
    const [cardFullScreen, setCardFullScreen] = useState(style.container)
    const [curtainFS, setCurtainFS] = useState(style.curtain)
    const handleClick = (event) => {
        console.log(event);
        event.preventDefault();
        setCardFullScreen(cardFullScreen === style.container ? style.fullScreen : style.container)
        setCurtainFS(curtainFS === style.curtain ? style.curtainFS : style.curtain)
    }
    console.log(props.key);
    return (
        <div>
            {curtainFS === style.curtainFS && <div className={style.curtainFS}></div>}
            <section onClick={handleClick} className={cardFullScreen}>
                {curtainFS === style.curtain && <div className={style.curtain}>
                    <h2 style={{ color: "white", fontSize: "30px" }}>{props.titulo}</h2>
                </div>}
                <img src={props.picture} alt="No photo" className={style.picture} />
                {curtainFS === style.curtainFS && <div className={style.description}>
                    <h2>{props.titulo}</h2>
                    <p>{props.description}</p>
                </div>}
            </section>
        </div>
    )
}

export default Card;