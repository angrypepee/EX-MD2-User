import { object, string } from "yup";

const Schema = object ({
    firstName: string()
        .min(3,"First Name must be 3 characters" )
        .max(20, "First name cannot be more than 10 Characters")
        .required(),
    lastName: string()
        .min(3,"First Name must be 3 characters" )
        .max(20, "First name cannot be more than 10 Characters")
        .required(),
    email: string().email("Invalid format").required("Required"),
    password: string()
        .min (3, "Password must be 3 character")
        .matches(
            /^(?=.*[\d])(?=.*[!@#$%^&*])[\w!@#$%^&*]{6,16}$/,
            "Password need to have 1 number and special character ")
        .required("Required"),
});

export default Schema;