import React from "react";
import TextField from "@mui/material/TextField";
import contactStyles from "../../assets/css/contact.module.css";

export const Form = () => {
    return (
        <form action="#" onSubmit="#">
            <div className={contactStyles.formulario__container}>
                <section className={contactStyles.formulario__left}>
                    <TextField
                        id="outlined-basic"
                        label="Nombre"
                        variant="outlined"
                        className={
                            contactStyles.formulario__input +
                            " " +
                            contactStyles.formulario__input_left
                        }
                    />
                    <TextField
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        className={
                            contactStyles.formulario__input +
                            " " +
                            contactStyles.formulario__input_left
                        }
                        type="email"
                    />
                    <TextField
                        id="outlined-basic"
                        label="Asunto"
                        variant="outlined"
                        className={
                            contactStyles.formulario__input +
                            " " +
                            contactStyles.formulario__input_left
                        }
                    />
                </section>

                <section className={contactStyles.formulario__right}>
                    <textarea
                        name="Mensaje"
                        id=""
                        placeholder="Mensaje"
                        className={
                            contactStyles.formulario__input +
                            " " +
                            contactStyles.formulario__input_textarea
                        }
                    ></textarea>
                </section>
                <input
                    type="submit"
                    value="Enviar mensaje"
                    className={
                        contactStyles.formulario__input + " " + contactStyles.formulario__submit
                    }
                />
            </div>
        </form>
    );
};
