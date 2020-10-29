import React, { useState } from "react";
import PropTypes from "prop-types";

//Funcional Component FC
const CounterApp = ({ value }) => {
    const [counter, setCounter] = useState(value);
    // console.log(counter, setNombre);
    const handleAdd = () => {
        setCounter((c) => c + 1);
    };
    const handleReset = () => {
        setCounter((c) => c = value);
    };
    const handleSubstract = () => {
        setCounter((c) => c - 1);
    };
    return (
        <>
            <h1>CounterApp</h1>
            {/* <pre> {JSON.stringify(persona, null, 3)} </pre> */}
            <p>{counter}</p>
            <button onClick={handleAdd}>+1</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleSubstract}>-1</button>


        </>
    );
}
CounterApp.propTypes = {
    value: PropTypes.number
}


export default CounterApp;