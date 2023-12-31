import curriculumStyles from "../../assets/css/curriculum.module.css";

export const FormacionExperience = ({ studioExperiencie }) => {
    return (
        <>
            <div className={curriculumStyles.formation__studio}>
                <div className={curriculumStyles.formation__info}>
                    <h3 className={curriculumStyles.info__date}>{studioExperiencie.date}</h3>
                    <p className={curriculumStyles.info__place}>{studioExperiencie.place}</p>
                </div>

                <div className={curriculumStyles.formation__description}>
                    <h3 className={curriculumStyles.description__studyName}>
                        {studioExperiencie.studiName}{" "}
                    </h3>
                    <p className={curriculumStyles.description__info}>
                        Lorem ipsum dolor sit, amet day on the consectetur adipisicinng elit. All
                        natus porro enim veniam consequuntur deserunt.
                    </p>
                </div>
            </div>
        </>
    );
};
