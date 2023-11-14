import inicioStyles from "../assets/css/inicio.module.css";

const HomePageComponent = () => {
    return (
        <>
            <h1 className={inicioStyles.page__name}>MOISES ORTIZ</h1>
            <p className={inicioStyles.page__job}>Desarrolador Web </p>
        </>
    );
};

export default HomePageComponent;
