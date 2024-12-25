import React from "react";
import scrollStyles from "../assets/css/scroll.module.css";
import blogStyles from "../assets/css/blog.module.css";

import { blogData } from "../components/blog/datos.js";
import { Gallery } from "../components/blog/Gallery.jsx";

export const BlogComponent = () => {
    return (
        <div className={scrollStyles.content__page_scrolling}>
            <h1 className={blogStyles.page__title}>
                <span className={blogStyles.blog__cuadricula}>Blog</span>
            </h1>

            {/* <nav className={blogStyles.blog__navbar}>
                <ul className={blogStyles.blog__menu}>
                    {menuOptions.map((option, i) => (
                        <li className={blogStyles.blog__option} key={i}>
                            <a
                                className={
                                    blogStyles.option__link +
                                    " " +
                                    `${optionMenu === option && blogStyles.option__active}`
                                }
                                onClick={() => setOptionMenu(option)}
                            >
                                {option}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav> */}
            <section className={blogStyles.blog__gallery}>
                {blogData.map((blog, i) => (
                    <Gallery blog={blog} key={i} />
                ))}
            </section>
        </div>
    );
};
