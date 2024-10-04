import { Formik, Form, Field, FormikProps } from "formik";
import IUser from "../../interfaces/user.interfaces";
import Schema from "./schema";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Register= () => {

    const postUser = async (params: IUser) =>{
        try{
            await axios.post(
                "https://66fd3bcec3a184a84d19917c.mockapi.io/api/v1/users",
                {
                    firstName: params.firstName,
                    lastName: params.lastName,
                    email: params.email,
                    password: params.password,
                }
            );
        } catch(err) {
            console.log(err);
        }
    };

    const notify = () => toast("Your Ragistration on list!");
    

    return (
        <div className="min-h-screen flex items-center justify-center bg-orange-100">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Register</h2>
                <Formik
                    initialValues = {{
                        id: 0,
                        firstName: "",
                        lastName: "",
                        email: "",
                        password: "",
                    }}
                    validationSchema={Schema}
                    onSubmit={(values, {setSubmitting}) => {
                        postUser(values);
                        console.log(values);
                        setSubmitting(false);
                    }}
                    >
                        {(props: FormikProps<IUser>) => {
                            const {values,  errors, touched, handleChange, isSubmitting} = props;

                            return (
                                <Form >
                                    
                                    <div>
                                        <div className="flex items-center justify-between">
                                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700"> First Name</label>
                                            {touched.firstName && errors.firstName?(
                                                <div className="text-red-500 text-xs font-medium ml-2">{errors.firstName}</div>
                                            ):null}
                                        </div>

                                        <Field 
                                            type="text" 
                                            name="firstName" 
                                            onChange={handleChange} 
                                            value={values.firstName} 
                                            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                                            />
                                           

                                    </div>

                                    <div>
                                        <div className="flex items-center justify-between">
                                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700"> Last Name</label>
                                            {touched.lastName && errors.lastName?(
                                                <div className="text-red-500 text-xs font-medium ml-2">{errors.lastName}</div>
                                            ):null}
                                        </div>
                                        
                                        <Field 
                                            type="text" 
                                            name="lastName" 
                                            onChange={handleChange} 
                                            value={values.lastName} 
                                            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"                                            />
                                            
                                    </div>

                                    <div>
                                        <div className="flex items-center justify-between">
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700"> Email</label>
                                            {touched.email && errors.email?(
                                                <div className="text-red-500 text-xs font-medium ml-2">{errors.email}</div>
                                            ):null}
                                        </div>
                                        <Field 
                                            type="text" 
                                            name="email" 
                                            onChange={handleChange} 
                                            value={values.email} 
                                            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                                            />
                                    </div>
                                    <div>
                                        <div className="flex items-center justify-between">
                                            <label htmlFor="password" className="block text-sm font-medium text-gray-700"> Password</label>
                                            {touched.password && errors.password?(
                                                <div className="text-red-500 text-xs font-medium ml-2">{errors.password}</div>
                                            ):null}
                                        </div>
                                        <Field 
                                            type="password" 
                                            name="password" 
                                            onChange={handleChange} 
                                            value={values.password} 
                                            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                                            />
                                    </div>
                                    <div className="mt-2 mb-2"> 
                                        <hr />
                                    </div>  
                                    <button
                                        onClick={notify}
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`w-full py-2 px-4 text-white font-semibold rounded-md bg-orange-500 hover:bg-orange-600 transition-colors duration-300 ${
                                            isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                                        }`}
                                    >
                                        {isSubmitting ? "Saving..." : "Save"} 
                                        <ToastContainer stacked />

                                    </button>
                                </Form>
                            )
                        }}
                </Formik>
            </div>
        </div>
    );

}

export default Register;