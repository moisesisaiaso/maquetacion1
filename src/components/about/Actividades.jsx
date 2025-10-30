import sobreMiStyles from "../../assets/css/sobreMi.module.css";

export const Actividades = ({ activitie }) => {
    return (
        <article className={sobreMiStyles.services__service}>
            <i
                className={`${sobreMiStyles.service__icon} ${activitie?.icon}`}
            ></i>
            <h3 className={sobreMiStyles.service__title}>{activitie.title}</h3>
            <p>{activitie.description}</p>
        </article>
    );
};
