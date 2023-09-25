import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import actions from './actions';
import './SumitPage.css';

function SubmitPage({formData}) {

    const dispatch = useDispatch();

    const formState = useSelector((state) => state.form);

    const handleSubmitPageClose = () => {
        dispatch(actions.hideSubmitPage()); // Hide the ThankYou page
    };

    return (
        <div>
            <h2>Thank You for Submitting the Form!</h2>
            <div className='form-submit-data'>
                <h3>Here is the data you provided:</h3>
                <ul>
                    {formData.map( (field, index) =>
                        Array.isArray(field) ? (
                            <li key={index}>
                                {field.map( elem => (
                                    <span>{formState[elem.id]} </span>
                                ))}
                            </li>
                        ) : (
                            <li key={index}>
                                <span>{formState[field.id]} </span>
                            </li>
                        ))}
                </ul>
            </div>
            <button onClick={handleSubmitPageClose}>Close</button>
        </div>
    );
}

export default SubmitPage;
