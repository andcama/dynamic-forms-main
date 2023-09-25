import React from 'react'
import './Form.css'
import {useDispatch} from 'react-redux';
import Field from "./Field";
import updateFormData from './actions'; // Import the action
import submitPageActions from '../Submit/actions';

function Form({ formData}) {
    const dispatch = useDispatch();

    const handleInputChange = (e, fieldId) => {
        const {value} = e.target
        dispatch(updateFormData({[fieldId]: value}));
    }

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(submitPageActions.showSubmitPage());
    }

    return (<div className='dynamic-form'>
        <form onSubmit={handleSubmit}>
            <div className='form-container'>
                {formData.map((element, index) =>
                    Array.isArray(element) ? (
                        <div className='form-row' key={index}>
                            {
                                element.map((field, index) => (
                                    <div key={index} className='form-field'>
                                        <Field field={field} handleInputChange={handleInputChange}/>
                                    </div>
                                ))
                            }
                        </div>
                    ) : (
                        <div className='form-row' key={index}>
                            <div key={index} className='form-field'>
                                <Field field={element} handleInputChange={handleInputChange}/>
                            </div>
                        </div>
                    )
                )}
                <div className='form-row' >
                    <button type='submit' aria-label="Submit Form">Submit</button>
                </div>
            </div>
        </form>
    </div>)
}

export default Form
