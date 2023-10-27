import { render, screen } from "@testing-library/react";
import { HelloWordApp } from "../src/HelloWord";

describe('pruebas en HelloWord2.jsx', () => {

   const title = "Hola soy Goku"
   const subTitle = "soy un Subtitilo";
   // test('debe hacer match con el snapshot', () => { 
   //    const { container } = render( <HelloWordApp  title= {title} />)
   //    expect(container).toMatchSnapshot();
   //  })


   test('debe mostrar el mensajae "hola soy Goku', () => {


      // screen.debug();
      render(<HelloWordApp title={title} />)

      expect(screen.getByText(title)).toBeTruthy();
   })

   test('debe mostrar el titulo en un h1', () => {

      render(<HelloWordApp title={title} />)
      expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(title);
   })

   test('debe mostrar el subtitulo enviado por props', () => { 
      render(<HelloWordApp title={title} subTitle={subTitle} />)
      expect(screen.getAllByText(subTitle).length).toBe(2)

    })


});