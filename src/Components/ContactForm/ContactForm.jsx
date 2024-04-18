import { Formik, Form, Field ,ErrorMessage } from "formik"
import { useId } from "react"
import * as Yup from "yup";




export default function ContactForm({onAdd}) {
    const nameId = useId();
    const telId = useId();

    const handleSubmit = (values) => {
        onAdd(values)        
    }

    const validationSchema = Yup.object().shape({
        name: Yup.string().max(50,"Too long!").required("Required"),
        number: Yup.number().required("Required"),
    });

    return <Formik
        
        initialValues={{
            name: "",
            number: "",
        }}

        onSubmit={handleSubmit}

        validationSchema={validationSchema}
    >
        
        <Form>
            <div>
                <label htmlFor={nameId}>Name</label>
                <Field name="name" id={nameId} />
                <ErrorMessage name="name" component="span" />
            </div>
            <div>
                <label htmlFor={telId}>Phone</label>
                <Field name="number" id={telId} />
                <ErrorMessage name="number" component="span"/>
            </div>

            <button type="submit">Submit</button>
        </Form>
    </Formik>
}