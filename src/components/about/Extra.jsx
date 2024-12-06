import sobreMiStyles from "../../assets/css/sobreMi.module.css";

import PropTypes from "prop-types";
export const Extra = ({ extra }) => {
    return (
        <>
            <article className={sobreMiStyles.extra__info}>
                <i className={`fa-solid ${extra.icon} ${sobreMiStyles.extra__icon}`}></i>
                <h4 className={sobreMiStyles.extra__subtitle}>{extra.subtitle} </h4>
                <span className={sobreMiStyles.extra__quantity}>{extra.quantity} </span>
            </article>
        </>
    );
};

Extra.propTypes = {
    extra: PropTypes.object.isRequired,
};
