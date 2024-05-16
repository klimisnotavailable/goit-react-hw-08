import { nanoid } from "@reduxjs/toolkit"
import { Form,Formik,Field } from "formik"

export default function LoginForm() {
    const idForEmail = nanoid();
    const idForPassword = nanoid();

    const initialValues = {
        login: '',
        email: '',
        password: '',
    };

    return <>
        <div>
        <Formik
            initialValues={initialValues}
        >
            <Form>
                <label htmlFor={idForEmail}>
                    <p>Email</p>
                    <Field as="input" name="email" id={idForEmail } />
                 </label>

                <label htmlFor={idForPassword}>
                    <p>Password</p>
                    <Field as="input" name="password" id={idForPassword } />
                </label>

                <button type="submit">Register</button>
            </Form>
        </Formik>
        </div>
        </>
}