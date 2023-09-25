import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../store'; // Import your Redux store
import SubmitPage from './SubmitPage';

test('renders thank you message and submitted data', () => {
  // Simulate a submitted form with data in the Redux store
  const submittedData = {
    'firstName': 'John',
    'lastName': 'Doe',
  };

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

  store.dispatch({type: "UPDATE_FORM_DATA", payload: submittedData});

  render(
    <Provider store={store}>
      <SubmitPage formData={jsonFileStub}/>
    </Provider>
  );

  const thankYouMessage = screen.getByText('Thank You for Submitting the Form!');
  expect(thankYouMessage).toBeInTheDocument();
  expect(screen.getByText('John')).toBeInTheDocument();
  expect(screen.getByText('Doe')).toBeInTheDocument();
});
