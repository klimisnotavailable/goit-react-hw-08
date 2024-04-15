import { Formik, Form, Field } from "formik"
import { useId, useState } from "react"


export default function ContactForm() {
    return <Formik
    onSubmit={(values)=>{console.log(values)}}>
        <Form>
            <Field type="text" name="name"/>
            <Field type="text" name="tel"/>
            <button type="submit">Add</button>
        </Form>
    </Formik>
}