import React from "react";
import blogStyles from "../../assets/css/blog.module.css";

export const Gallery = ({ blog }) => {
    return (
        <figure className={blogStyles.gallery__item}>
            <div className={blogStyles.blog__container_image}>
                <a href="#" className={blogStyles.blog__link}>
                    <img src={blog.image} alt="" className={blogStyles.gallery__image} />
                    <i className={blogStyles.blog__icon + " " + "fa-solid fa-book"}></i>
                </a>
            </div>

            <div className={blogStyles.gallery__info}>
                <times className={blogStyles.gallery__date}>{blog.createDate}</times>
                <figcaption className={blogStyles.gallery__title}>{blog.title}</figcaption>
                <span className={blogStyles.gallery__etiqueta}>{blog.category}</span>
                <i></i>
            </div>
        </figure>
    );
};
