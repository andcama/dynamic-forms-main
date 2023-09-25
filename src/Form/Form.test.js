import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from '../store' // Import your Redux store
import Form from './Form'

const jsonFileStub = [
    {
        id: 'firstName',
        placeholder: 'First Name',
        required: true,
        type: 'text'
    },
    {
        id: 'lastName',
        placeholder: 'Last Name',
        required: true,
        type: 'text'
    }
];


test('renders form with submit button', () => {
    render(
        <Provider store={store}>
            <Form formData={jsonFileStub} />
        </Provider>
    );

    const submitButton = screen.getByText('Submit');
    expect(submitButton).toBeInTheDocument();
});

test('displays thank you message after submission', () => {
    render(
        <Provider store={store}>
            <Form formData={jsonFileStub} />
        </Provider>
    );

    const firstNameInput = screen.getByPlaceholderText('First Name');
    const lastNameInput = screen.getByPlaceholderText('Last Name');
    const submitButton = screen.getByText('Submit');

    fireEvent.change(firstNameInput, { target: { value: 'John' } });
    fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
    fireEvent.click(submitButton);

    const state = store.getState();
    const expectedFormState = { 'firstName': 'John', 'lastName': 'Doe' };
    const expectedSubmitState = true;

    expect(expectedFormState).toEqual(state.form);
    expect(expectedSubmitState).toEqual(state.submitPage);

});
