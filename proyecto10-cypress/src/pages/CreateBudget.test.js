import {render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CreateBudget from './CreateBudget';

describe('Formulario crear cliente', () => { // Describe la suite de test

  test('Valida el campo CIF', async () => { // Describe el case test
    render(<CreateBudget/>); // Si recibiera props, se las pasaríamos de datos mock
    //const component = render(<CreateBudget/>); // Para ver como se renderiza
    //component.debug()

    let validationMessage ;
    let input ;

    await screen.findByTestId('cif-msg').then(a => validationMessage=a);
    await screen.findByTestId('cif-input').then(a => input = a);
    userEvent.type(input, 'z');
    expect(validationMessage).toHaveTextContent('El cif debe comenzar por letra válida y tener 9 caracteres');

  })

})
