// export function App() {

//     return (<h1>  HolaMundo   </h1>)
// }


// export default App;

import PropTypes from 'prop-types'; // ES6

export const HelloWordApp = ({title, subTitle, name}) => {
    
  return (
    <>
    <h1 data-testid="test-title">{title}</h1>
    <p>{subTitle}</p>
    <p>{subTitle}</p>
    <p>{name}</p>
    </>
  )
}

HelloWordApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
}

HelloWordApp.defaultProps = {
  // title: "no hay titulo",
  subTitle: "no hay subtitulo",
  name: "Fabian Muñoz"
  }


// export const HelloWordApp = () => <h1>Arrow Function</h1>