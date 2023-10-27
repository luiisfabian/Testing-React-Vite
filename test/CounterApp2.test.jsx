import { fireEvent, render, screen } from "@testing-library/react";
import { CounterAppDos } from "../src/CounterApp2";


describe('CounterApp', () => {
  const initialValue = 10;

  // test('match con el snapcshot', () => { 

  //   const { container } = render(<CounterAppDos value={initialValue} />)

  //   expect( container ).toMatchSnapshot();
  // })

  test('deme mandar el valor inicial de 100', () => { 

    render(  <CounterAppDos value={100}/>)
    expect(screen.getByText(100)).toBeTruthy()
    // expect(screen.getByText('heading', {level: 2}).innerHTML).toContain('100');
   })

   test('debe de incremetnar con el boton +1', () => { 
    render(  <CounterAppDos value={initialValue}/>)
    fireEvent.click(screen.getByText('+1'));
    expect(screen.getByText('11')).toBeTruthy();

    })

    
   test('debe de decrementar con el boton -1', () => { 
    render(  <CounterAppDos value={ initialValue }/>)
    fireEvent.click(screen.getByText('-1'));
    expect(screen.getByText('9')).toBeTruthy();

    })

    test('usar el boton reset', () => { 
      render(  <CounterAppDos value={ 355 }/>)
      fireEvent.click(screen.getByText('+1'));
      fireEvent.click(screen.getByText('+1'));
      fireEvent.click(screen.getByText('+1'));
      // fireEvent.click(screen.getByText('reset'));

      fireEvent.click(screen.getByRole('button', {name: 'btn-reset'}))
      
        expect(screen.getByText(355)).toBeTruthy();


     })
});
