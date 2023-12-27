import sobreMiStyles from "../../assets/css/sobreMi.module.css";
import PropTypes from "prop-types";
export const Testimonials = ({ testimonial }) => {
    return (
        <>
            <article className={sobreMiStyles.reviews__review}>
                <div className={sobreMiStyles.review__img_container}>
                    <img
                        src={testimonial.image}
                        alt="testimonio-image"
                        className={sobreMiStyles.review__image}
                    />
                </div>

                <div className={sobreMiStyles.review__descrip_aut}>
                    <div className={sobreMiStyles.review__description}>
                        <p className={sobreMiStyles.review__text}>{testimonial.description}</p>
                    </div>

                    <div className={sobreMiStyles.review__author}>
                        <div className={sobreMiStyles.review__author_info}>
                            <h4 className={sobreMiStyles.review__name}>{testimonial.author}</h4>
                            <h5 className={sobreMiStyles.review__company}>{testimonial.company}</h5>
                        </div>

                        <div className={sobreMiStyles.review__author_icon}>
                            <i
                                className={`${sobreMiStyles.review__icon} fa-solid fa-quote-right`}
                            ></i>
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
};

Testimonials.propTypes = {
    testimonial: PropTypes.object.isRequired,
};
