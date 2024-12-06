import curriculumStyles from "../assets/css/curriculum.module.css";
import scrollStyles from "../assets/css/scroll.module.css";

import { FormacionExperience, Habilidad } from "../components/curriculum";

/* Datos para las props */
import {
    studies,
    experiences,
    skillsDiseño,
    skillsCodigo,
} from "../components/curriculum/datosCurriculum.js";

import certificado from "../assets/img/certificado-1.png";

export const CurriculumComponent = () => {
    return (
        <div className={scrollStyles.content__page_scrolling}>
            <h1 className={curriculumStyles.page__title}>
                <span className={curriculumStyles.curriculum__cuadricula}>Curriculum</span>
            </h1>

            <section className={curriculumStyles.page__curriculum}>
                <section className={curriculumStyles.curriculum__formation_experience}>
                    <article className={curriculumStyles.curriculum__formation}>
                        <h2 className={curriculumStyles.curriculum__subtitle}>
                            <span className={curriculumStyles.curriculum__subtitle_cuadricula}>
                                Formación
                            </span>
                        </h2>

                        <div className={curriculumStyles.formation__group}>
                            {studies.map((studioExperiencie, i) => (
                                <FormacionExperience
                                    key={i}
                                    studioExperiencie={studioExperiencie}
                                />
                            ))}
                        </div>
                    </article>

                    <article className={curriculumStyles.curriculum__experience}>
                        <h2 className={curriculumStyles.curriculum__subtitle}>
                            <span className={curriculumStyles.curriculum__subtitle_cuadricula}>
                                Experiencia
                            </span>
                        </h2>

                        <div className={curriculumStyles.formation__group}>
                            {experiences.map((studioExperiencie, i) => (
                                <FormacionExperience
                                    key={i}
                                    studioExperiencie={studioExperiencie}
                                />
                            ))}
                        </div>
                    </article>
                </section>

                <section className={curriculumStyles.curriculum__skills}>
                    <article className={curriculumStyles.skills__diseño}>
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
                        <div className={curriculumStyles.skills__group}>
                            {skillsDiseño.map((skill, i) => (
                                <Habilidad key={i} skill={skill} />
                            ))}
                        </div>
                    </article>

                    {/* habilidades de codigo */}
                    <article className={curriculumStyles.skills__codigo}>
                        <h2 className={curriculumStyles.curriculum__subtitle}>
                            <span className={curriculumStyles.curriculum__subtitle_cuadricula}>
                                Habilidades de Codigo
                            </span>
                        </h2>
                        <div className={curriculumStyles.skills__group}>
                            {skillsCodigo.map((skill, i) => (
                                <Habilidad key={i} skill={skill} />
                            ))}
                        </div>
                    </article>

                    {/* Áreas de conocimiento */}
                    <article className={curriculumStyles.skills__areas}>
                        <h2 className={curriculumStyles.curriculum__subtitle}>
                            <span className={curriculumStyles.curriculum__subtitle_cuadricula}>
                                Áreas de conocimiento
                            </span>
                        </h2>
                        <div className={curriculumStyles.skills__knowledges}>
                            <ul className={curriculumStyles.knowledges__list}>
                                <li className={curriculumStyles.knowledges__option}>
                                    Programación
                                </li>
                                <li className={curriculumStyles.knowledges__option}>
                                    Desarrollo Web
                                </li>
                                <li className={curriculumStyles.knowledges__option}>Diseño Web</li>
                                <li className={curriculumStyles.knowledges__option}>
                                    Redes sociales
                                </li>
                                <li className={curriculumStyles.knowledges__option}>
                                    Comunicación
                                </li>
                                <li className={curriculumStyles.knowledges__option}>
                                    Edición de videos
                                </li>
                                <li className={curriculumStyles.knowledges__option}>Formación</li>
                            </ul>
                        </div>
                    </article>
                </section>
            </section>

            <section className={curriculumStyles.curriculum__certificates}>
                <section className={curriculumStyles.certificates__container}>
                    <h2 className={curriculumStyles.curriculum__subtitle}>
                        <span className={curriculumStyles.curriculum__subtitle_cuadricula}>
                            Certificados
                        </span>
                    </h2>

                    <div className={curriculumStyles.certificate__group}>
                        <article className={curriculumStyles.certificates__certificate}>
                            <div className={curriculumStyles.certificate__logo}>
                                <img src={certificado} alt="certificates__image" />
                            </div>

                            <div className={curriculumStyles.certificate__content}>
                                <h4 className={curriculumStyles.certificate__title}>
                                    Master en PHP, SQl, POO, MVC, Laravel, Synfony, Wordpress +
                                </h4>
                                <span className={curriculumStyles.certificate__id}>
                                    ID Verificación: 7891
                                </span>
                                <span className={curriculumStyles.certificate__data}>
                                    23 Marzo 2023
                                </span>
                            </div>
                        </article>

                        <article className={curriculumStyles.certificates__certificate}>
                            <div className={curriculumStyles.certificate__logo}>
                                <img src={certificado} alt="certificates__image" />
                            </div>

                            <div className={curriculumStyles.certificate__content}>
                                <h4 className={curriculumStyles.certificate__title}>
                                    Master en Pruebas Técnicas: +70 Nuevos Ejercicios de Código
                                </h4>
                                <span className={curriculumStyles.certificate__id}>
                                    ID Verificación: 145783
                                </span>
                                <span className={curriculumStyles.certificate__data}>
                                    01 Marzo 2024
                                </span>
                            </div>
                        </article>
                    </div>
                </section>
            </section>
        </div>
    );
};

export default CurriculumComponent;
