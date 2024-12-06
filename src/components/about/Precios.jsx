import sobreMiStyles from "../../assets/css/sobreMi.module.css";

import PropTypes from "prop-types";

export const Precios = ({ price }) => {
    return (
        <>
            <article className={sobreMiStyles.prices__box}>
                <dir className={sobreMiStyles.prices__subtitle}>
                    <span className={sobreMiStyles.prices__text}>{price.type}</span>
                </dir>

                <div className={sobreMiStyles.prices__price}>
                    <span className={sobreMiStyles.prices__number}>{price.value} </span>
                    <small className={sobreMiStyles.prices__advice}> Al mes</small>
                </div>

                <div className={sobreMiStyles.prices__buy}>
                    <a href="#" className={sobreMiStyles.prices__btn}>
                        Prueba Gratis
                    </a>
                </div>

                <div className={sobreMiStyles.prices__reward}>{price.cursos} </div>
                <div className={sobreMiStyles.prices__reward}>{price.extras} </div>
                <div className={sobreMiStyles.prices__reward}>Certificado de finalización</div>
            </article>
        </>
    );
};

Precios.propTypes = {
    price: PropTypes.object.isRequired,
};
