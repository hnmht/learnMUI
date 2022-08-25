import { object } from "prop-types";
import React, { useState } from "react";

const INITIAL_STATE = {
    email: "",
    password: "",
};

const VALIDATION = {
    email:[
        {
            isValid:(value) => !!value,
            message:'Is required.',
        },
        {
            isValid: (value) => /\S+@\S+\.\S+/.test(value),
            message: 'Needs to be an email.',
        },
    ],
    password:[
        {
            isValid:(value) => !!value,
            message:"Is required",
        },
    ],
};

const getErrorFields = (form) => 

    Object.keys(form).reduce((acc,key) => {
        if (!VALIDATION[key]) return acc;
        const errorsPerField = VALIDATION[key].map((validation)=>({
            isValid:validation.isValid(form[key]),
            message:validation.message,
        }))
        .filter((errorsPerField) => !errorsPerField.isValid);
        
        return{...acc,[key]:errorsPerField};
    },{});

const getDirtyFields = (form) =>
    Object.keys(form).reduce((acc, key) => {
        // check all form fields that have changed
        const isDirty = form[key] !== INITIAL_STATE[key];

        return { ...acc, [key]: isDirty };
    }, {});

const LoginForm = ({onLogin}) => {

    const [form, setForm] = useState(INITIAL_STATE);

    const dirtyFields = getDirtyFields(form);
    console.log("dirtyFields:", dirtyFields);

    const hasChanges = Object.values(dirtyFields).every(
        (isDirty) => !isDirty
    );

    

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.id]: event.target.value,
        });
    };



    const handleSubmit = (event) => {
        event.preventDefault();
        const errorFields = getErrorFields(form);
        console.log(errorFields);
        // alert(form.email + " " + form.password);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" value={form.email} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" value={form.password} onChange={handleChange} />
            </div>
            <button type="submit" disabled={hasChanges}>Submit</button>
        </form>
    );
}

export default LoginForm;