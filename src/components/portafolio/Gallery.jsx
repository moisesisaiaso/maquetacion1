import React from "react";
import portafolioStyles from "../../assets/css/portafolio.module.css";
import { FaReact } from "react-icons/fa";
import { LiaYarn } from "react-icons/lia";
import { SiCssmodules } from "react-icons/si";
import { SiReactrouter } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa"; //js
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiSequelize } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiJsonwebtokens } from "react-icons/si";

const allTechnologies = {
    FaReact,
    LiaYarn,
    SiCssmodules,
    SiReactrouter,
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    FaNodeJs,
    SiExpress,
    SiSequelize,
    BiLogoPostgresql,
    SiJsonwebtokens,
};

export const Gallery = ({ project }) => {
    const technologiesObj = Object.fromEntries(
        Object.entries(allTechnologies).filter(([key]) => project.technologies.includes(key))
    );
    //Object.entries Convierte el objeto original en un array de pares [clave, valor]
    //Filtra los pares cuya clave está incluida en el array technologies
    //Object.fromEntries(...): Convierte el array filtrado de pares [clave, valor] de nuevo en un objeto.

    const technologies = Object.values(technologiesObj); // convierto los valores del objeto en elemento de un array

    return (
        <figure className={portafolioStyles.gallery__item}>
            <div className={portafolioStyles.portafolio__container_image}>
                <a href="#" className={portafolioStyles.portafolio__link}>
                    <img src={project.image} alt="" className={portafolioStyles.gallery__image} />
                </a>
            </div>

            <figcaption className={portafolioStyles.gallery__title}>{project.title}</figcaption>
            <div className={portafolioStyles.gallery__technologies}>
                {technologies?.map((Technologie) => (
                    <Technologie size="1.7em" color="gray" />
                ))}
            </div>
            <span className={portafolioStyles.gallery__etiqueta}>
                {project.category[0]}
                {project.category.length > 1 && " ..."}
            </span>
        </figure>
    );
};