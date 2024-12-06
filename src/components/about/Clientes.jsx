import PropTypes from "prop-types";
import sobreMiStyles from "../../assets/css/sobreMi.module.css";
export const Clientes = ({ client }) => {
    return (
        <>
            <article className={sobreMiStyles.clients__item}>
                <a href="#" className={sobreMiStyles.clients__link}>
                    <img src={client} className={sobreMiStyles.clients__image} alt="logo cliente" />
                </a>
            </article>
        </>
    );
};

Clientes.propTypes = {
    client: PropTypes.string.isRequired,
};
