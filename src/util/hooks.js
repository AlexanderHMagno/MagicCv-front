import React, { useState } from 'react';


export const useForm = (callback, initialState={}) => {
    const [values, setValues] = useState(initialState);
    const onChange = event => setValues({...values,[event.target.name]: event.target.value});
    const pushChange = (event, value) => setValues({...values,[event]:value});
    const handleSubmit = event => {
        event.preventDefault();
        callback();
    };
    return {
        onChange,
        handleSubmit,
        pushChange,
        values
    }
}