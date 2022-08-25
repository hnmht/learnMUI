import React from "react";
import {Formik,Field,Form} from "formik";

const FormBasic = () => (
    <div>
        <h1>Sign up</h1>
        <Formik
            initialValues={{
                firstName:"",
                lastName:"",
                email:"",
            }}
            onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r,500));
                alert(JSON.stringify(values,null,2));
            }}
        >
            <Form>
                <label htmlFor="firstName">FirstName</label>
                <Field id="firstName" name="firstName" placeholder="Haitao" />

                <label htmlFor="lastName">LastName</label>
                <Field id="lastName" name="lastName" placeholder="Meng"/>

                <label htmlFor="email">Email</label>
                <Field
                    id="email"
                    name="email"
                    placeholder="hnmht@aliyun.com"
                    type="email"
                />

                <button type="submit">提交</button>
            </Form>
        </Formik>
    </div>
);

export default FormBasic;