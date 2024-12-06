import React from "react";
import inicioStyles from "../assets/css/inicio.module.css";
import scrollStyles from "../assets/css/scroll.module.css";

import miFoto from "../assets/img/default-user2.jpg";

import documentoCv from "../assets/CV-MOISÉS-ORTIZ-GRACIA-F.pdf";
import { Nav } from "./Nav";

export const Aside = () => {
    const socialIcons = ["fa-brands fa-youtube", "fa-brands fa-linkedin", "fa-brands fa-instagram"];

    return (
        <aside className={inicioStyles.layout__aside + " " + scrollStyles.layout__aside_scrolling}>
            <section className={inicioStyles.aside__user_info}>
                {/* <!--~ info general usuario  --> */}
                <div className={inicioStyles.user_info__general}>
                    <div className={inicioStyles.user_info__container_image}>
                        <img className={inicioStyles.user_info__image} src={miFoto} alt="miFoto" />
                        {/* <!-- aquí la sombra del seudoelemento --> */}
                    </div>

                    <h2 className={inicioStyles.user_info__name}>Moisés Ortíz</h2>
                    <h4 className={inicioStyles.user_info__job}>Desarrollador Web</h4>
                </div>

                {/* <!--~ Menú de navegación  --> */}
                <Nav />

                {/* <!--~ Links a redes sociales  --> */}
                <div className={inicioStyles.user_info__links}>
                    <ul className={inicioStyles.links__social}>
                        {socialIcons.map((social, i) => (
                            <li className={inicioStyles.social__option} key={i}>
                                <a href="#" className={inicioStyles.social__link}>
                                    <i
                                        className={`
                                                ${inicioStyles.social__icon} ${social} 
                                            `}
                                    ></i>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* <!--~ Botón del curriculum   --> */}
                <div className={inicioStyles.user_info__curriculum}>
                    <a href={documentoCv} className={inicioStyles.user_info__btn} download>
                        Descargar CV
                    </a>
                </div>
                {/* <!--~ Pie de Página  --> */}

                <footer className={inicioStyles.user_info__footer}>
                    &copy; 2024 Moisés Ortíz Gracia
                </footer>
            </section>
        </aside>
    );
};
