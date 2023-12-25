import { useState } from "react"
import style from "../styles/ResponsiveHeader.module.css"

const ResponsiveHeader = () => {

    const [toggle, setToggle] = useState(style.toggleOff)
    const [plusLess, setPlusLess] = useState(true);

    return (
        <div className={style.popUpMenu}>
            <button onClick={() => { setPlusLess(!plusLess) }}>{plusLess ? "+" : "-"}</button>
            <nav className={plusLess?style.toggleOff:style.toggleOn}>
                <ul className={style.lista}>
                    <li><a href="/" className={style.link}>Home</a></li>
                    <li><a href="/about" className={style.link}>About me</a></li>
                    <li><a href="/references" className={style.link}>References</a></li>
                    <li><a href="/tools" className={style.link}>Tools</a></li>
                    <li><a href="/certificates" className={style.link}>Certificates</a></li>
                    <li><a href="/contactMe" className={style.link}>Contact Me</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default ResponsiveHeader