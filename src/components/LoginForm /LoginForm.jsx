import { nanoid } from "@reduxjs/toolkit";
import { Form,Formik,Field } from "formik";
import { login } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";

export default function LoginForm() {
    const idForEmail = nanoid();
    const idForPassword = nanoid();
    const dispatch = useDispatch();

    const initialValues = {
        email: '',
        password: '',
    };

    const handleSubmit = (values,actions) =>{
        dispatch(login(values));
        actions.resetForm();
    }

    return <>
        <div>
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
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