import { useState } from "react";
import { Helmet } from "react-helmet";
/* esta librería permite poner etiquetas de metadatos como normalemnte se haría en html -  yarn add react-helmet
 */
import inicioStyles from "./assets/css/inicio.module.css";
import scrollStyles from "./assets/css/scroll.module.css";
import miFoto from "./assets/img/default-user2.jpg";
import documentoCv from "./assets/CV-MOISÉS-ORTIZ-GRACIA-F.pdf";

import HomePageComponent from "./components/HomePageComponent";
import SobreMiComponent from "./components/about/SobreMiComponent";
import CurriculumComponent from "./components/curriculum/CurriculumComponent";
function App() {
    const [page, setPage] = useState("HomePageComponent");

    const handleClick = (component) => {
        setPage(component);
    };

    const pages = {
        HomePageComponent,
        SobreMiComponent,
        CurriculumComponent,
    };

    const PageComponent = pages[page];

    /* Se tiene que hacer de esta forma ya que no se puede cambiar la estructura de un componente de esta forma se mantiene y la variable que representa a los posibles componentes tiene el formato de un nombre de componente habitual*/

    /* aunque si se puede poner el objeto del componente en esta variable no tiene sentido por que es solo como cambiarle el nombre al componente y cuando queremos dinamizar lo que viene en esta variable esta es la forma correcta ya que poner solo pages como una variable que recibe directamente el objeto en sí  es como poner otra variable dentro de otra para recibir recien un valor esto causa error y por eso en se le da directamente el valor a la variable atraves de el nombre de la propiedad que contienen los objetos de componente*/

    return (
        <>
            <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Portafolio</title>
                <link rel="icon" href={miFoto} />
            </Helmet>
            {/* <!--^ Layput principal --> */}
            <div className={inicioStyles.layout}>
                {/* <!--^ barra lateral (info usuario) --> */}
                <aside
                    className={
                        inicioStyles.layout__aside + " " + scrollStyles.layout__aside_scrolling
                    }
                >
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
                                    {/* OJO: Existe un problema cuando manda a llamar una función dentro de un onclick en estos casos si el evento no tien la función de flecha al renderizarse el componente siempre va a ejecutar todo lo que esté en las llaves así sea que no haya sido presionada o activado el evento y por esto puede causar un re-renders  o renderizado infinito */}
                                    <a
                                        href="#"
                                        className={inicioStyles.menu__link}
                                        onClick={() => handleClick("HomePageComponent")}
                                    >
                                        <i
                                            className={`${
                                                inicioStyles.menu__icon
                                            } fa-solid fa-house ${
                                                page === "HomePageComponent" &&
                                                inicioStyles.menu__icon_active
                                            }`}
                                        ></i>
                                        <span className={inicioStyles.menu__overlay}>Home</span>
                                    </a>
                                </li>

                                <li className={inicioStyles.menu__option}>
                                    <a
                                        href="#"
                                        className={inicioStyles.menu__link}
                                        onClick={() => handleClick("SobreMiComponent")}
                                    >
                                        <i
                                            className={`
                                                ${inicioStyles.menu__icon} fa-solid fa-user ${
                                                page === "SobreMiComponent" &&
                                                inicioStyles.menu__icon_active
                                            }`}
                                        ></i>
                                        <span className={inicioStyles.menu__overlay}>Sobre mi</span>
                                    </a>
                                </li>

                                <li className={inicioStyles.menu__option}>
                                    <a
                                        href="#"
                                        className={inicioStyles.menu__link}
                                        onClick={() => handleClick("CurriculumComponent")}
                                    >
                                        <i
                                            className={`
                                                ${
                                                    inicioStyles.menu__icon
                                                } fa-solid fa-graduation-cap
                                                ${
                                                    page === "CurriculumComponent" &&
                                                    inicioStyles.menu__icon_active
                                                }`}
                                        ></i>
                                        <span className={inicioStyles.menu__overlay}>
                                            Curriculum
                                        </span>
                                    </a>
                                </li>

                                <li className={inicioStyles.menu__option}>
                                    <a href="#" className={inicioStyles.menu__link}>
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
                                    <a href="#" className={inicioStyles.menu__link}>
                                        <i
                                            className={`
                                                ${inicioStyles.menu__icon} fa-solid fa-book
                                            `}
                                        ></i>
                                        <span className={inicioStyles.menu__overlay}>Blog</span>
                                    </a>
                                </li>

                                <li className={inicioStyles.menu__option}>
                                    <a href="#" className={inicioStyles.menu__link}>
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
                                            className={`${inicioStyles.social__icon} fa-brands fa-linkedin
                                            `}
                                        ></i>
                                    </a>
                                </li>
                                <li className={inicioStyles.social__option}>
                                    <a href="#" className={inicioStyles.social__link}>
                                        <i
                                            className={`
                                                ${inicioStyles.social__icon} fa-brands fa-instagram`}
                                        ></i>
                                    </a>
                                </li>
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

                <main className={inicioStyles.layout__content}>
                    <section
                        className={
                            page === "HomePageComponent"
                                ? inicioStyles.content__page_home
                                : scrollStyles.content__page
                        }
                    >
                        {page == "HomePageComponent" ? (
                            <PageComponent />
                        ) : (
                            <div className={scrollStyles.content__page_scrolling}>
                                <PageComponent />
                            </div>
                        )}
                    </section>
                </main>
            </div>
        </>
    );
}

export default App;
