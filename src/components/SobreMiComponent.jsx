import sobreMiStyles from "../assets/css/sobreMi.module.css";

export const SobreMiComponent = () => {
    return (
        <>
            <section className={sobreMiStyles.page__sobre_mi}>
                <h2 className={sobreMiStyles.sobre_mi__titulo}>
                    Sobre <span className={sobreMiStyles.sobre_mi__resaltar}>Mi</span>
                </h2>
                <article className={sobreMiStyles.sobre_mi__description}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum aut veniam,
                    voluptatibus cum repellendus commodi ullam in, ad quas dolorum a cumque. Amet
                    nemo corrupti, aperiam natus recusandae eveniet iusto quisquam consequuntur
                    consequatur fugit voluptatibus ducimus dolorem facilis doloribus? Expedita.
                </article>
                <article className={sobreMiStyles.sobre_mi__infoPersonal}>
                    <ul className={sobreMiStyles.infoPersonal__infoList}>
                        <li>
                            <span className={sobreMiStyles.infoPersonal__resaltar}>Edad</span> 25
                        </li>
                        <li>
                            <span className={sobreMiStyles.infoPersonal__resaltar}>País</span>{" "}
                            Ecuador
                        </li>
                        <li>
                            <span className={sobreMiStyles.infoPersonal__resaltar}>Dirección</span>{" "}
                            Lorem ipsum dolor sit amet.
                        </li>
                        <li>
                            <span className={sobreMiStyles.infoPersonal__resaltar}>Correo</span>{" "}
                            moises@gmail.com
                        </li>
                        <li>
                            <span className={sobreMiStyles.infoPersonal__resaltar}>Telefono</span>{" "}
                            0968478460
                        </li>
                    </ul>
                </article>
            </section>

            <section className="page__mas">
                <h2>
                    Lo que <span>hago</span>
                </h2>
                <article className="mas__actividades">
                    <i className={`${sobreMiStyles.actividades__icon_code} fa fa-code`}></i>
                    <h3>Programación</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. A voluptatum,
                        neque, aliquid dolorum ab quaerat cum totam illo aspernatur dicta qui animi
                        dolorem debitis nesciunt fuga consequatur iste voluptas et culpa nam.
                        Ratione ex voluptates laboriosam quae natus fuga quidem. Lorem ipsum dolor
                        sit amet consectetur adipisicing elit. Ad inventore vel harum vitae animi
                        excepturi quas reprehenderit nulla repudiandae unde, veniam labore optio
                        adipisci voluptatibus. Commodi rem sed voluptate. Veniam, accusantium
                        maiores? Exercitationem nisi fugiat non quisquam sit illum reiciendis hic
                        laboriosam distinctio saepe, tenetur molestiae totam amet mollitia qui.
                    </p>
                </article>
                <article className="mas__actividades">
                    <i
                        className={`${sobreMiStyles.actividades__icon_student} fa fa-chalkboard-teacher`}
                    ></i>
                    <h3>Estudiar</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur
                        blanditiis doloribus commodi consequuntur voluptatem reprehenderit sapiente
                        accusantium eos nihil rem ratione vero cum magnam, est enim et. Delectus
                        assumenda optio voluptates molestias, sapiente sed laboriosam nihil! Ex
                        quaerat et officia?
                    </p>
                </article>
            </section>
        </>
    );
};

export default SobreMiComponent;
