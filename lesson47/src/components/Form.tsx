import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),

  email: Yup.string().email("Invalid email").required("Email is required"),

  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm your password"),
});

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function UserForm() {
  const handleSubmit = (values: typeof initialValues) => {
    console.log(values);
    alert("Form submitted successfully!");
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <Field type="text" name="name" placeholder="Name" />
        <ErrorMessage name="name" component="p" />

        <Field type="email" name="email" placeholder="Email" />
        <ErrorMessage name="email" component="p" />

        <Field type="password" name="password" placeholder="Password" />
        <ErrorMessage name="password" component="p" />

        <Field
          type="password"
          name="confirmPassword"
          placeholder="Confirm password"
        />
        <ErrorMessage name="confirmPassword" component="p" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}
