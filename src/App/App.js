import React from 'react';
import Form from '../Form/Form';
import SubmitPage from '../Submit/SubmitPage';
import defaultFormData from '../resources/field-set-js.json';
import {useSelector} from 'react-redux';
import './App.css';

// Import yargs to parse command-line arguments
const yargs = require('yargs');
const argv = yargs.argv;

// Define a default JSON file path or use the one provided as an argument
const jsonFilePath = argv?.json;

// Load the JSON data from the file
const formData = jsonFilePath ? require(`${jsonFilePath}`) : defaultFormData;


function App() {
    const submitted = useSelector(state => state.submitPage);

    return (
        <div className="App">
            <h1>Dynamic Forms</h1>
            {submitted ? (
                <SubmitPage formData={formData}/>
            ) : (
                <Form formData={formData}/>
            )}
        </div>
    );
}

export default App;
