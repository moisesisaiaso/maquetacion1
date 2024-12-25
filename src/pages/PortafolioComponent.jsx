import React, { useEffect, useState } from "react";
import portafolioStyles from "../assets/css/portafolio.module.css";
import scrollStyles from "../assets/css/scroll.module.css";
import { Gallery } from "../components/portafolio";

import { gallery } from "../components/portafolio/datos.js";

export const PortafolioComponent = () => {
    const [optionMenu, setOptionMenu] = useState("Todo");
    const [filterGallery, setFilterGallery] = useState(gallery);

    const menuOptions = ["Todo", "Páginas", "Aplicaciones", "Herramientas y Utilidades", "Videos"];

    useEffect(() => {
        if (optionMenu === "Todo") {
            setFilterGallery(gallery);
        } else {
            const newGallery = gallery.filter((gallery) => gallery.category.includes(optionMenu));
            setFilterGallery(newGallery);
        }
    }, [optionMenu]);

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
            <section className={portafolioStyles.portafolio__gallery}>
                {filterGallery?.map((project, i) => (
                    <Gallery project={project} key={i} />
                ))}
            </section>
        </div>
    );
};
