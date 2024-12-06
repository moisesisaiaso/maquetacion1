import React, { useState } from "react";
import portafolioStyles from "../assets/css/portafolio.module.css";
import scrollStyles from "../assets/css/scroll.module.css";
import { useLocation } from "react-router-dom";

export const PortafolioComponent = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    const [optionMenu, setOptionMenu] = useState("Todo");

    const menuOptions = ["Todo", "Cursos", "Web", "Redes Sociales", "Videos", "Proyectos"];

    return (
        <div className={scrollStyles.content__page_scrolling}>
            <h1 className={portafolioStyles.page__title}>
                <span className={portafolioStyles.portafolio__cuadricula}>Portafolio</span>
            </h1>

            <nav className={portafolioStyles.portafolio__navbar}>
                <ul className={portafolioStyles.portafolio__menu}>
                    {menuOptions.map((option, i) => (
                        <li className={portafolioStyles.portafolio__option} key={i}>
                            <a
                                className={
                                    portafolioStyles.option__link +
                                    " " +
                                    `${optionMenu === option && portafolioStyles.option__active}`
                                }
                                onClick={() => setOptionMenu(option)}
                            >
                                {option}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            <section className={portafolioStyles.portafolio}></section>
        </div>
    );
};
