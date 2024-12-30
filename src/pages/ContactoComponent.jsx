import React from "react";
import scrollStyles from "../assets/css/scroll.module.css";
import contactStyles from "../assets/css/contact.module.css";
import { datos } from "../components/contact/datos.js";
import { Card } from "../components/contact/Card.jsx";
import { Form } from "../components/contact/Form.jsx";

export const ContactoComponent = () => {
    console.log(datos);
    return (
        <div className={scrollStyles.content__page_scrolling}>
            <h1 className={contactStyles.page__title}>
                <span className={contactStyles.contact__cuadricula}>Contact</span>
            </h1>

            <section className={contactStyles.contact__containerGrid}>
                <aside className={contactStyles.contact__aside}>
                    {datos.map((dato, i) => (
                        <Card key={i} dato={dato} />
                    ))}
                </aside>
                <div className={contactStyles.contact__map}>
                    <iframe
                        frameborder="0"
                        scrolling="0"
                        marginheight="0"
                        marginwidth="0"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63828.065206501844!2d-79.68201522053786!3d0.9636071721728438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fd4beb08afdae79%3A0x58e2517154076f6!2sEsmeraldas!5e0!3m2!1ses-419!2sec!4v1735403547384!5m2!1ses-419!2sec"
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                        width="100%"
                        height="100%"
                    ></iframe>
                </div>
                <div className={contactStyles.contact__formulario}>
                    <h2 className={contactStyles.contact__subtitle_cuadricula}>
                        Cómo Puedo
                        <span className={contactStyles.contact__subtitle_color}>Ayudarte?</span>
                    </h2>
                    <div>
                        <Form />
                    </div>
                </div>
            </section>
        </div>
    );
};
