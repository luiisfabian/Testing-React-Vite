import { render } from "@testing-library/react";
import { HelloWordApp } from "../src/HelloWord";

describe('pruebas en HelloWord.jsx', () => {
   //  test('debe de hacer match con el snapchot', () => {
        
   //      const title = "Hola soy Fabian"
   //      const { container } = render(< HelloWordApp title={title}/> )


   //      expect(container).toMatchSnapshot();
   //   });

     test('debe mostrar el titulo en un H1', () => {
        
        const title = "Hola soy Fabian"
        const { container, getByText, getByTestId } = render(< HelloWordApp title={title}/> )
        expect(getByText(title)).toBeTruthy()

      //   const h1= container.querySelector('h1')

      //   expect(h1.innerHTML).toBe(title)

      // expect(getByTestId('test-title')).toBeTruthy();
      // toContain sirve para queno imorta lo que tenga debe contener el subtitulo
      expect(getByTestId('test-title').innerHTML).toContain(title);


     })

     test('debe mostrar el subtitulo enviado por props', () => {
        
      const title = "Hola soy Fabian"
      const subTitle = "Hola soy subtitulo"
      const { getAllByText } = render(< HelloWordApp title={title}  subTitle={subTitle}/> )

      // valido que el subtitulo exista
      // expect(getByText(subTitle)).toBeTruthy()
      expect(getAllByText(subTitle).length).toBe(2);



   })

     
});