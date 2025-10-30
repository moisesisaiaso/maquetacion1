import React from "react";
import { NavLink } from "react-router-dom";

import inicioStyles from "../assets/css/inicio.module.css";

export const Nav = () => {
    const routesLink = [
        {
            path: "/",
            icon: "fa-solid fa-house",
            name: "Home",
        },
        {
            path: "/sobre-mi",
            icon: "fa-solid fa-user",
            name: "Sobre mi",
        },
        {
            path: "/curriculum",
            icon: "fa-solid fa-graduation-cap",
            name: "Curriculum",
        },
        {
            path: "/Portafolio",
            icon: "fa-solid fa-briefcase",
            name: "Portafolio",
        },
        {
            path: "/Blog",
            icon: "fa-solid fa-book",
            name: "Blog",
        },
        {
            path: "/Contacto",
            icon: "fa-solid fa-envelope",
            name: "Contacto",
        },
    ];

    return (
        <nav className={inicioStyles.layout__menu}>
            <ul className={inicioStyles.menu__list}>
                {routesLink.map(({ path, icon, name }, i) => (
                    <li className={inicioStyles.menu__option} key={i}>
                        <NavLink to={path} className={inicioStyles.menu__link}>
                            {({ isActive }) => (
                                <>
                                    <i
                                        className={`${
                                            inicioStyles.menu__icon
                                        } ${icon} ${
                                            isActive
                                                ? inicioStyles.menu__icon_active
                                                : ""
                                        }`}
                                    ></i>
                                    <span
                                        className={
                                            isActive
                                                ? `${inicioStyles.menu__overlay} ${inicioStyles.menu__active}`
                                                : inicioStyles.menu__overlay
                                        }
                                    >
                                        {name}
                                    </span>
                                </>
                            )}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
