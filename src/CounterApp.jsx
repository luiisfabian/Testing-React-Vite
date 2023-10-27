
import PropTypes from 'prop-types'; // ES6


export const CounterApp = ({value}) => {
  return (
    <>
    <h1>prueba de value</h1>
    <p>{value}</p>
    </>
  )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

CounterApp.defaultProps = {
    value: "no hay numeros"
}





