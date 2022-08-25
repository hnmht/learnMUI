import React from 'react';
import { Formik, Field, Form } from 'formik';

import {
    Typography,
    Paper,
} from "@mui/material";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const FormSubmission = () => (
    <Paper variant='div'>
        <Typography variant='h1'>SignUp</Typography>

        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
            }}
            onSubmit={async (values) => {
                await sleep(2000);
                alert(JSON.stringify(values, null, 2));
            }}
        >
            {({ isSubmitting }) => (
                <Form>
                    <label htmlFor="firstName">First Name</label>
                    <Field name="firstName" placeholder="Jane" />

                    <label htmlFor="lastName">Last Name</label>
                    <Field name="lastName" placeholder="Doe" />

                    <label htmlFor="email">Email</label>
                    <Field name="email" placeholder="jane@acme.com" type="email" />

                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    </Paper>
);

export default FormSubmission;