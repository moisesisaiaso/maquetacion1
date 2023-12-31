import curriculumStyles from "../../assets/css/curriculum.module.css";
export const Habilidad = ({ skill }) => {
    return (
        <>
            <div className={curriculumStyles.skills__skill}>
                <h3 className={curriculumStyles.skill__name}>{skill.name} </h3>{" "}
                <span className={curriculumStyles.skill__porcentage}>{skill.porcentage}%</span>
                <progress value={skill.porcentage} max="100" className={curriculumStyles.progress}>
                    {skill.porcentage}%
                </progress>
            </div>
        </>
    );
};
