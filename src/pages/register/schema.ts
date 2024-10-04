
import * as Yup from "yup";

const Schema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Please provide your Last Name"),
    email: Yup.string().email("Please enter a valid email address").required("Email is required"),
    password: Yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
});


export default Schema;