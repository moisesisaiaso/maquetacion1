import sobreMiStyles from "../../assets/css/sobreMi.module.css";

/* datos para las props */
import { testimonials, clients, prices, extras } from "./datos.js";

/* components hijos*/
import { Testimonials } from "./Testimonials";
import { Clientes } from "./Clientes";
import { Precios } from "./Precios";
import { Extra } from "./Extra.jsx";

export const SobreMiComponent = () => {
    return (
        <>
            {/* sobre Mi */}
            <section className={sobreMiStyles.page__about}>
                <h1 className={sobreMiStyles.about__title}>
                    Sobre <span className={sobreMiStyles.about__title_color}>Mi</span>
                </h1>
                <article className={sobreMiStyles.about__description}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum aut veniam,
                    voluptatibus cum repellendus commodi ullam in, ad quas dolorum a cumque. Amet
                    nemo corrupti, aperiam natus recusandae eveniet iusto quisquam consequuntur
                    consequatur fugit voluptatibus ducimus dolorem facilis doloribus? Expedita.
                </article>
                <article className={sobreMiStyles.about__personalInfo}>
                    <ul className={sobreMiStyles.personalInfo__infoList}>
                        <li>
                            <span className={sobreMiStyles.personalInfo__title}>Edad </span> 25
                        </li>
                        <li className={sobreMiStyles.personalInfo__info}>
                            <span className={sobreMiStyles.personalInfo__title}>País </span> Ecuador
                        </li>
                        <li className={sobreMiStyles.personalInfo__info}>
                            <span className={sobreMiStyles.personalInfo__title}>Dirección</span>{" "}
                            Lorem ipsum dolor sit amet.
                        </li>
                        <li className={sobreMiStyles.personalInfo__info}>
                            <span className={sobreMiStyles.personalInfo__title}>Correo</span>{" "}
                            moises@gmail.com
                        </li>
                        <li className={sobreMiStyles.personalInfo__info}>
                            <span className={sobreMiStyles.personalInfo__title}>Telefono</span>{" "}
                            0968478460
                        </li>
                    </ul>
                </article>
            </section>

            {/* Lo que hago */}
            <section className={sobreMiStyles.page__services}>
                <h2 className={sobreMiStyles.services__title}>
                    Lo que <span className={sobreMiStyles.services__title_color}>hago</span>
                </h2>

                <article className={sobreMiStyles.services__service}>
                    <i className={`${sobreMiStyles.service__icon} fa fa-code`}></i>
                    <h3 className={sobreMiStyles.service__title}>Programación</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur elit. A voluptatum, neque, aliquid
                        dolorum ab quaerat cum totam illo aspernatur dicta qui animi dolorem debitis
                        nesciunt fuga consequatur iste voluptas et culpa nam. Ratione ex voluptates
                        laboriosam quae natus fuga quidem.
                    </p>
                </article>

                <article className={sobreMiStyles.services__service}>
                    <i className={`${sobreMiStyles.service__icon} fa fa-chalkboard-teacher`}></i>
                    <h3 className={sobreMiStyles.service__title}>Estudiar</h3>
                    <p>
                        Lorem ipsum dolor sit amet, adipisicing elit. Consequatur blanditiis
                        doloribus commodi consequuntur voluptatem reprehenderit sapiente accusantium
                        eos nihil rem ratione vero cum magnam, est enim et.
                    </p>
                </article>

                <article className={sobreMiStyles.services__service}>
                    <i className={`${sobreMiStyles.service__icon} fa fa-computer`}></i>
                    <h3 className={sobreMiStyles.service__title}>Desarrollo Web</h3>
                    <p>
                        Lorem ipsum dolor sit amet, adipisicing elit. Consequatur blanditiis
                        doloribus commodi consequuntur voluptatem reprehenderit sapiente accusantium
                        eos nihil rem ratione vero cum magnam, est enim et.
                    </p>
                </article>

                <article className={sobreMiStyles.services__service}>
                    <i className={`${sobreMiStyles.service__icon} fa-solid fa-terminal`}></i>
                    <h3 className={sobreMiStyles.service__title}>Administración</h3>
                    <p>
                        Lorem ipsum dolor sit amet, adipisicing elit. Consequatur blanditiis
                        doloribus commodi consequuntur voluptatem reprehenderit sapiente accusantium
                        eos nihil rem ratione vero cum magnam, est enim et.
                    </p>
                </article>
            </section>

            {/* testimonios */}
            <section className={sobreMiStyles.page__reviews}>
                <header className={sobreMiStyles.reviews__header}>
                    <h2 className={sobreMiStyles.reviews__title}>
                        {" "}
                        <span className={sobreMiStyles.about__element_color}>Reseñas</span>
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
                        <span className={sobreMiStyles.about__element_color}>Clientes</span>
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
                        <span className={sobreMiStyles.about__element_color}>Precios</span>
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
                        <span className={sobreMiStyles.services__title_color}>Extra</span>
                    </h2>
                </header>

                <div className={sobreMiStyles.extra__container}>
                    {extras.map((extra, i) => (
                        <Extra key={i} extra={extra} />
                    ))}
                </div>
            </section>
        </>
    );
};

export default SobreMiComponent;
