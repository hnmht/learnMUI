import React from "react";
import { FormContainer,TextFieldElement } from "react-hook-form-mui";

export default function FormHooks() {
    return (
        <FormContainer
            defaultValues={{ name: 'Jack',password:'' }}
            onSuccess={(data) => { console.log(data) }}
        >
            <TextFieldElement name="name" label="Name" required />
            <TextFieldElement name="password" label="password" type={"password"} required />
        </FormContainer>
    );
}