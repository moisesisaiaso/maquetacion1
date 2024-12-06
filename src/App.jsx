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
                <Aside />

                <main className={inicioStyles.layout__content}>
                    <section
                        className={
                            location.pathname === "/"
                                ? inicioStyles.content__page_home
                                : scrollStyles.content__page
                        }
                    >
                        <Routes>
                            <Route path="/" element={<HomePageComponent />} />
                            <Route path="/sobre-mi" element={<SobreMiComponent />} />
                            <Route path="/curriculum" element={<CurriculumComponent />} />
                            <Route path="/Portafolio" element={<PortafolioComponent />} />
                            <Route path="/Blog" element={<BlogComponent />} />
                            <Route path="/Contacto" element={<ContactoComponent />} />
                        </Routes>
                    </section>
                </main>
            </div>
        </>
    );
}

export default App;
