
const newMessage = {
    title: "Hola",
    messagge: "CAsa"
}

export const Sumas = (a, b) => {
  return (
    <h1>{a + b}</h1>
  )
}

export const PruebaFunction = () => {
  return (
    <div>FirstApp</div>
  )
}

export const FirstApp = () => {

    return (
        <>  
        <h1> {Sumas(2, 5)}</h1>
        <h2>  {PruebaFunction()}  </h2> 
        <h1>Hola mundo { newMessage.messagge }</h1>
             {/* <code>{ JSON.stringify(newMessage)}</code> */}
            <p>Soy un subtilo</p>
        </>
    )
}
