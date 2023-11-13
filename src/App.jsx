import { useState } from "react";
import inicioStyles from "./assets/css/inicio.module.css";
import miFoto from "./assets/img/default-user2.jpg";
function App() {
    return (
        <>
            {/* <!--^ Layput principal --> */}
            <div className={inicioStyles.layout}>
                {/* <!--^ barra lateral (info usuario) --> */}
                <aside className={inicioStyles.layout__aside}>
                    <section className={inicioStyles.aside__user_info}>
                        {/* <!--~ info general usuario  --> */}
                        <div className={inicioStyles.user_info__general}>
                            <div className={inicioStyles.user_info__container_image}>
                                <img
                                    className={inicioStyles.user_info__image}
                                    src={miFoto}
                                    alt="miFoto"
                                />
                                {/* <!-- aquí la sombra del seudoelemento --> */}
                            </div>

                            <h2 className={inicioStyles.user_info__name}>Moisés Ortíz</h2>
                            <h4 className={inicioStyles.user_info__job}>Desarrollador Web</h4>
                        </div>

                        {/* <!--~ Menú de navegación  --> */}
                        <nav className={inicioStyles.layout__menu}>
                            <ul className={inicioStyles.menu__list}>
                                <li className={inicioStyles.menu__option}>
                                    <a href="index.html" className={inicioStyles.menu__link}>
                                        <i
                                            className={`${inicioStyles.menu__icon}   fa-solid fa-house`}
                                        ></i>
                                        <span className={inicioStyles.menu__overlay}>Home</span>
                                    </a>
                                </li>
                                <li className={inicioStyles.menu__option}>
                                    <a href="sobre-mi.html" className={inicioStyles.menu__link}>
                                        <i
                                            className={`${inicioStyles.menu__icon} fa-solid fa-user
                                                `}
                                        ></i>
                                        <span className={inicioStyles.menu__overlay}>Sobre mi</span>
                                    </a>
                                </li>
                                <li className={inicioStyles.menu__option}>
                                    <a href="estudios.html" className={inicioStyles.menu__link}>
                                        <i
                                            className={`
                                                ${inicioStyles.menu__icon} fa-solid fa-graduation-cap
                                            `}
                                        ></i>
                                        <span className={inicioStyles.menu__overlay}>Estudios</span>
                                    </a>
                                </li>
                                <li className={inicioStyles.menu__option}>
                                    <a href="portafolio.html" className={inicioStyles.menu__link}>
                                        <i
                                            className={`
                                                ${inicioStyles.menu__icon} fa-solid fa-briefcase
                                            `}
                                        ></i>
                                        <span className={inicioStyles.menu__overlay}>
                                            Portafolio
                                        </span>
                                    </a>
                                </li>
                                <li className={inicioStyles.menu__option}>
                                    <a href="blog.html" className={inicioStyles.menu__link}>
                                        <i
                                            className={`
                                                ${inicioStyles.menu__icon} fa-solid fa-book
                                            `}
                                        ></i>
                                        <span className={inicioStyles.menu__overlay}>Blog</span>
                                    </a>
                                </li>
                                <li className={inicioStyles.menu__option}>
                                    <a href="contacto.html" className={inicioStyles.menu__link}>
                                        <i
                                            className={`
                                                ${inicioStyles.menu__icon} fa-solid fa-envelope
                                            `}
                                        ></i>
                                        <span className={inicioStyles.menu__overlay}>Contacto</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        {/* <!--~ Links a redes sociales  --> */}
                        <div className={inicioStyles.user_info__links}>
                            <ul className={inicioStyles.links__social}>
                                <li className={inicioStyles.social__option}>
                                    <a href="#" className={inicioStyles.social__link}>
                                        <i
                                            className={`
                                                ${inicioStyles.social__icon} fa-brands fa-youtube 
                                            `}
                                        ></i>
                                    </a>
                                </li>
                                <li className={inicioStyles.social__option}>
                                    <a href="#" className={inicioStyles.social__link}>
                                        <i
                                            className={`
                                                ${inicioStyles.social__icon} fa-brands fa-linkedin
                                            `}
                                        ></i>
                                    </a>
                                </li>
                                <li className={inicioStyles.social__option}>
                                    <a href="#" className={inicioStyles.social__link}>
                                        <i
                                            className={`
                                                ${inicioStyles.social__icon} fa-brands fa-instagram
                                               `}
                                        ></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {/* <!--~ Botón del curriculum   --> */}
                        <div className={inicioStyles.user_info__curriculum}>
                            <a href="#" className={inicioStyles.user_info__btn}>
                                Descargar CV
                            </a>
                        </div>
                        {/* <!--~ Pie de Página  --> */}
                        <footer className={inicioStyles.user_info__footer}>
                            &copy; 2024 Moisés Ortíz Gracia
                        </footer>
                    </section>
                </aside>

                <main className={inicioStyles.layout__content}>
                    <section className={inicioStyles.content__page}>
                        <h1 className={inicioStyles.page__name}>MOISES ORTIZ</h1>
                        <p className={inicioStyles.page__job}>Desarrolador Web</p>
                    </section>
                </main>
            </div>
        </>
    );
}

export default App;
