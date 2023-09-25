import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../store'; // Import your Redux store
import App from '../App/App';

test('renders App component with form initially', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  // Check if the form is initially displayed
  const formHeader = screen.getByText('Dynamic Forms');
  expect(formHeader).toBeInTheDocument();

  // Ensure that the submit button is present
  const submitButton = screen.getByText('Submit');
  expect(submitButton).toBeInTheDocument();
});

test('displays Submit Page component after form submission', () => {
  // Simulate a submitted form with data in the Redux store
  store.dispatch({ type: 'SHOW_SUBMIT_PAGE' });

  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  // Check if the ThankYou message is displayed
  const thankYouMessage = screen.getByText('Thank You for Submitting the Form!');
  expect(thankYouMessage).toBeInTheDocument();

  // Make sure the submit button is not present
  const submitButton = screen.queryByText('Submit');
  expect(submitButton).toBeNull();
});

