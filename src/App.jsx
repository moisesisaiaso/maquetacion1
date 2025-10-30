import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
/* esta librería permite poner etiquetas de metadatos como normalemnte se haría en html -  yarn add react-helmet
 */
import inicioStyles from "./assets/css/inicio.module.css";
import scrollStyles from "./assets/css/scroll.module.css";
import miFoto from "./assets/img/default-user2.jpg";

import { Aside } from "./components/Aside";
import {
    SobreMiComponent,
    CurriculumComponent,
    HomePageComponent,
    PortafolioComponent,
    BlogComponent,
    ContactoComponent,
} from "./pages";
import { Route, Routes, useLocation } from "react-router-dom";

function App() {
    const location = useLocation();
    console.log(location.pathname);

    const [menuClickIsOpen, setMenuClickIsOpen] = useState(false);

    return (
        <>
            <Helmet>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximun-scale=1"
                />
                <title>Portafolio</title>
                <link rel="icon" href={miFoto} />
            </Helmet>
            {/* <!--^ Layput principal --> */}
            <div className={inicioStyles.layout}>
                {/* <!--^ barra lateral (info usuario) --> */}
                <Aside
                    setMenuClickIsOpen={setMenuClickIsOpen}
                    menuClickIsOpen={menuClickIsOpen}
                />
                {/* Mascara para cerrar el aside*/}
                <div
                    className={
                        menuClickIsOpen
                            ? `${inicioStyles.layout__mascara} ${inicioStyles.layout__mascara_activa}`
                            : inicioStyles.layout__mascara
                    }
                    onClick={() => setMenuClickIsOpen(!menuClickIsOpen)}
                ></div>

                <main className={inicioStyles.layout__content}>
                    <i
                        className={`${inicioStyles.content__icon_menu} fa-solid fa-bars`}
                        onClick={() => setMenuClickIsOpen(!menuClickIsOpen)}
                    ></i>
                    <section
                        className={
                            location.pathname === "/"
                                ? inicioStyles.content__page_home // sin scroll para home
                                : scrollStyles.content__page // con scroll para las demas paginas
                        }
                    >
                        <Routes>
                            <Route path="/" element={<HomePageComponent />} />
                            <Route
                                path="/sobre-mi"
                                element={<SobreMiComponent />}
                            />
                            <Route
                                path="/curriculum"
                                element={<CurriculumComponent />}
                            />
                            <Route
                                path="/Portafolio"
                                element={<PortafolioComponent />}
                            />
                            <Route path="/Blog" element={<BlogComponent />} />
                            <Route
                                path="/Contacto"
                                element={<ContactoComponent />}
                            />
                        </Routes>
                    </section>
                </main>
            </div>
        </>
    );
}

export default App;
