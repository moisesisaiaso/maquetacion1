import sobreMiStyles from "../assets/css/sobreMi.module.css";
import scrollStyles from "../assets/css/scroll.module.css";

/* datos para las props */
import {
    activities,
    testimonials,
    clients,
    prices,
    extras,
} from "../components/about/datos.js";

/* components hijos*/
import {
    Actividades,
    Testimonials,
    Clientes,
    Precios,
    Extra,
} from "../components/about";

export const SobreMiComponent = () => {
    return (
        <div className={scrollStyles.content__page_scrolling}>
            {/* sobre Mi */}
            <section className={sobreMiStyles.page__about}>
                <h1 className={sobreMiStyles.about__title}>
                    Sobre{" "}
                    <span className={sobreMiStyles.about__title_color}>Mi</span>
                </h1>
                <article className={sobreMiStyles.about__description}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Earum aut veniam, voluptatibus cum repellendus commodi ullam
                    in, ad quas dolorum a cumque. Amet nemo corrupti, aperiam
                    natus recusandae eveniet iusto quisquam consequuntur
                    consequatur fugit voluptatibus ducimus dolorem facilis
                    doloribus? Expedita.
                </article>
                <article className={sobreMiStyles.about__personalInfo}>
                    <ul className={sobreMiStyles.personalInfo__infoList}>
                        <li>
                            <span className={sobreMiStyles.personalInfo__title}>
                                Edad{" "}
                            </span>{" "}
                            25
                        </li>
                        <li className={sobreMiStyles.personalInfo__info}>
                            <span className={sobreMiStyles.personalInfo__title}>
                                País{" "}
                            </span>{" "}
                            Ecuador
                        </li>
                        <li className={sobreMiStyles.personalInfo__info}>
                            <span className={sobreMiStyles.personalInfo__title}>
                                Dirección
                            </span>{" "}
                            Lorem ipsum dolor sit amet.
                        </li>
                        <li className={sobreMiStyles.personalInfo__info}>
                            <span className={sobreMiStyles.personalInfo__title}>
                                Correo
                            </span>{" "}
                            moises@gmail.com
                        </li>
                        <li className={sobreMiStyles.personalInfo__info}>
                            <span className={sobreMiStyles.personalInfo__title}>
                                Telefono
                            </span>{" "}
                            0968478460
                        </li>
                    </ul>
                </article>
            </section>

            {/* Lo que hago */}
            <section className={sobreMiStyles.page__services}>
                <h2 className={sobreMiStyles.services__title}>
                    Lo que{" "}
                    <span className={sobreMiStyles.services__title_color}>
                        hago
                    </span>
                </h2>
                {activities.map((activitie, i) => (
                    <Actividades key={i} activitie={activitie} />
                ))}
            </section>

            {/* testimonios */}
            <section className={sobreMiStyles.page__reviews}>
                <header className={sobreMiStyles.reviews__header}>
                    <h2 className={sobreMiStyles.reviews__title}>
                        {" "}
                        <span className={sobreMiStyles.about__element_color}>
                            Reseñas
                        </span>
                    </h2>
                </header>

                <div className={sobreMiStyles.reviews__container}>
                    {testimonials.map((testimonial, i) => (
                        <Testimonials key={i} testimonial={testimonial} />
                    ))}
                </div>
            </section>

            {/* about-clients */}
            <section className={sobreMiStyles.page__clients}>
                <header className={sobreMiStyles.clients__header}>
                    <h2 className={sobreMiStyles.clients__title}>
                        <span className={sobreMiStyles.about__element_color}>
                            Clientes
                        </span>
                    </h2>
                </header>

                <div className={sobreMiStyles.clients__container}>
                    {clients.map((client, i) => (
                        <Clientes key={i} client={client} />
                    ))}
                </div>
            </section>

            {/* about-prices */}
            <section className={sobreMiStyles.page__prices}>
                <header className={sobreMiStyles.prices__header}>
                    <h2 className={sobreMiStyles.prices__title}>
                        <span className={sobreMiStyles.about__element_color}>
                            Precios
                        </span>
                    </h2>
                </header>

                <div className={sobreMiStyles.prices__container}>
                    {prices.map((price, i) => (
                        <Precios key={i} price={price} />
                    ))}
                </div>
            </section>

            {/* about-extra */}
            <section className={sobreMiStyles.page__extra}>
                <header className={sobreMiStyles.extra__header}>
                    <h2 className={sobreMiStyles.extra__title}>
                        Información{" "}
                        <span className={sobreMiStyles.services__title_color}>
                            Extra
                        </span>
                    </h2>
                </header>

                <div className={sobreMiStyles.extra__container}>
                    {extras.map((extra, i) => (
                        <Extra key={i} extra={extra} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default SobreMiComponent;
