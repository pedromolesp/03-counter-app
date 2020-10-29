import React from "react";
import PropTypes from "prop-types";

//Funcional Component FC
const PrimeraApp = ({ saludo, subtitulo }) => {


    return (
        <>
            <h1>{saludo}</h1>
            {/* <pre> {JSON.stringify(persona, null, 3)} </pre> */}
            <p>{subtitulo}</p>

        </>
    );
}
PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}
PrimeraApp.defaultProps = {
    subtitulo: "Soy un subtitulo"
}

export default PrimeraApp;