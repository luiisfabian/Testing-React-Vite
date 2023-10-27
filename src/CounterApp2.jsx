
import PropTypes from 'prop-types'; // ES6
// import './styles.css'
import { useState } from 'react';



export const CounterAppDos = ({ value }) => {
    // setCounter cambiamos el valor el que se resive es el que abajo se pone como funcion
    const [counter, setCounter] = useState(value);


    const handredAdd = (event) => {
        // setCounter(counter + 1)
        setCounter((c) => c + 1)
    }

    const handleSubtract = (event) => {
        setCounter(counter - 1);
    }
     
    const handleReset = (event) => {

        setCounter(value);
    }


    return (
        <>
            <h2>CounterApp2</h2>
            <h1>{counter}</h1>

                {/* <h1>{value}</h1> */}
            <button onClick={(event) => handredAdd(event)}>
                +1
            </button>
            <button onClick={(event) => handleSubtract(event)}>
                -1
            </button>
            <button aria-label="btn-reset" onClick={(event) => handleReset(event)}>
                reset
            </button>
        </>
    )
}

CounterAppDos.propTypes = {

    value: PropTypes.number.isRequired
}

CounterAppDos.defaultProps = {
    value: 10,
}
