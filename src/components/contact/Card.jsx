import React from "react";
import contactStyles from "../../assets/css/contact.module.css";

export const Card = ({ dato }) => {
    console.log(dato);
    return (
        <div className={contactStyles.contact_card}>
            <i className={dato.icon + " " + contactStyles.card__icon}></i>
            <span className={contactStyles.card__info}>{dato.info}</span>
        </div>
    );
};
