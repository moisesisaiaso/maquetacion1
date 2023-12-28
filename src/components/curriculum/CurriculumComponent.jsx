import curriculumStyles from "../../assets/css/curriculum.module.css";

const CurriculumComponent = () => {
    return (
        <>
            <h1 className={curriculumStyles.page__title}>
                <span className={curriculumStyles.curriculum__cuadricula}>Curriculum</span>
            </h1>

            <section className={curriculumStyles.page__curriculum}>
                <section className={curriculumStyles.curriculum__formacion}>
                    <h2 className={curriculumStyles.curriculum__subtitle}>
                        <span className={curriculumStyles.curriculum__subtitle_cuadricula}>
                            Formación
                        </span>
                    </h2>

                    <article className={curriculumStyles.curriculum__formation}>
                        <div className={curriculumStyles.formation__info}>
                            <h3 className={curriculumStyles.info__date}>2023</h3>
                            <p className={curriculumStyles.info__place}>
                                Universidad de Esmeraldas
                            </p>
                        </div>

                        <div className={curriculumStyles.formation__description}>
                            <h3 className={curriculumStyles.description__studyName}>
                                Ingeniería en TIC
                            </h3>
                            <p className={curriculumStyles.description__info}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. A, natus
                                porro enim veniam consequuntur deserunt.
                            </p>
                        </div>
                    </article>
                    <article className={curriculumStyles.curriculum__formation}>
                        <div className={curriculumStyles.formation__info}>
                            <h3 className={curriculumStyles.info__date}>2023</h3>
                            <p className={curriculumStyles.info__place}>SOLARI</p>
                        </div>

                        <div className={curriculumStyles.formation__description}>
                            <h3 className={curriculumStyles.description__studyName}>
                                Técnico de computadoras
                            </h3>
                            <p className={curriculumStyles.description__info}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. A, natus
                                porro enim veniam consequuntur deserunt.
                            </p>
                        </div>
                    </article>
                </section>

                <section className={curriculumStyles.curriculum__habilidades}>
                    <h2 className={curriculumStyles.curriculum__subtitle}>
                        Habilidades de{" "}
                        <span
                            className={
                                curriculumStyles.curriculum__subtitle_cuadricula +
                                " " +
                                curriculumStyles.curriculum__subtitle_color
                            }
                        >
                            Diseño
                        </span>
                    </h2>

                    <article className={curriculumStyles.habilidades__container}>
                        <div className={curriculumStyles.habilidades__tecnologias}>
                            <h3>Diseño Web</h3> <h2>95%</h2>
                            <progress value="95" max="100" className={curriculumStyles.progress}>
                                95%
                            </progress>
                        </div>
                        <div className={curriculumStyles.habilidades__tecnologias}>
                            <h3>Diseño Mockups</h3> <h2>65%</h2>
                            <progress value="65" max="100" className={curriculumStyles.progress}>
                                65%
                            </progress>
                        </div>
                        <div className={curriculumStyles.habilidades__tecnologias}>
                            <h3>Diseño de Logos</h3> <h2>80%</h2>
                            <progress value="80" max="100" className={curriculumStyles.progress}>
                                80%
                            </progress>
                        </div>
                        <div className={curriculumStyles.habilidades__tecnologias}>
                            <h3>Diseño Banners</h3> <h2>90%</h2>
                            <progress value="90" max="100" className={curriculumStyles.progress}>
                                90%
                            </progress>
                        </div>
                    </article>

                    {/* habilidades de codigo */}
                    <h2 className={curriculumStyles.curriculum__subtitle}>
                        Habilidades de{" "}
                        <span
                            className={
                                curriculumStyles.curriculum__subtitle_cuadricula +
                                " " +
                                curriculumStyles.curriculum__subtitle_color
                            }
                        >
                            Diseño
                        </span>
                    </h2>

                    <article className={curriculumStyles.habilidades__container}>
                        <div className={curriculumStyles.habilidades__tecnologias}>
                            <h3>Diseño Web</h3> <h2>95%</h2>
                            <progress value="95" max="100" className={curriculumStyles.progress}>
                                95%
                            </progress>
                        </div>
                        <div className={curriculumStyles.habilidades__tecnologias}>
                            <h3>Diseño Mockups</h3> <h2>65%</h2>
                            <progress value="65" max="100" className={curriculumStyles.progress}>
                                65%
                            </progress>
                        </div>
                        <div className={curriculumStyles.habilidades__tecnologias}>
                            <h3>Diseño de Logos</h3> <h2>80%</h2>
                            <progress value="80" max="100" className={curriculumStyles.progress}>
                                80%
                            </progress>
                        </div>
                        <div className={curriculumStyles.habilidades__tecnologias}>
                            <h3>Diseño Banners</h3> <h2>90%</h2>
                            <progress value="90" max="100" className={curriculumStyles.progress}>
                                90%
                            </progress>
                        </div>
                    </article>
                </section>
            </section>
        </>
    );
};

export default CurriculumComponent;
