import { Formik, Form, Field, FormikProps } from "formik";
import IUser from "../../interfaces/user.interfaces";
import Schema from "./schema";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "../../components/navbar";
import Footer from "../../components/footer"

const Register = () => {

    const notify = () => toast("Now you're Kermit!");

    const postUser = async (params: IUser) => {
        try {
            await axios.post(
                "https://66fd3bcec3a184a84d19917c.mockapi.io/api/v1/users",
                {
                    firstName: params.firstName,
                    lastName: params.lastName,
                    email: params.email,
                    password: params.password,
                    isRegistered: true,
                }
            );
            notify();
        } catch (err) {
            console.log(err);
            toast.error("Yah, Registrasi Gagal nih. Coba lagi.");
        }
    };

    return (
        <div className="min-h-screen flex mx-auto items-center justify-center bg-orange-100">
            <div>
                {/* navbar */}
                <div className="bg-green-200 rounded-lg shadow-lg max-w-lg w-full mb-2">
                    <div className="grid grid-cols-1">
                        <Navbar />
                    </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-lg max-w-lg w-full mb-3 pb-3">
                    {/* form registration  */}
                    <div className="grid grid-cols-2 gap-1">
                        <div className="m-auto ">
                            <div className="text-center mb-2">
                                <h2 className="text-2xl font-semibold text-gray-800">Registration</h2>
                                <p className="text-sm">Welcome to Kermit Club, please enjoy your time.</p>
                            </div>
                        </div>

                        <div className="">
                            {/* Registration Form */}
                            <Formik
                                initialValues={{
                                    id: 0,
                                    firstName: "",
                                    lastName: "",
                                    email: "",
                                    password: "",
                                    isRegistered: false,
                                }}
                                validationSchema={Schema}
                                onSubmit={async (values, { setSubmitting, resetForm }) => {
                                    await postUser(values);
                                    resetForm();
                                    setSubmitting(false);
                                }}
                            >
                                {(props: FormikProps<IUser>) => {
                                    const { values, errors, touched, handleChange, isSubmitting } = props;

                                    return (
                                        <Form>
                                            <div>
                                                <div className="flex items-center justify-between">
                                                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                                                        First Name
                                                    </label>
                                                    {touched.firstName && errors.firstName ? (
                                                        <div className="text-red-500 text-xs font-medium ml-2">{errors.firstName}</div>
                                                    ) : null}
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
                                                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                                                        Last Name
                                                    </label>
                                                    {touched.lastName && errors.lastName ? (
                                                        <div className="text-red-500 text-xs font-medium ml-2">{errors.lastName}</div>
                                                    ) : null}
                                                </div>

                                                <Field
                                                    type="text"
                                                    name="lastName"
                                                    onChange={handleChange}
                                                    value={values.lastName}
                                                    className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                                                />
                                            </div>

                                            <div>
                                                <div className="flex items-center justify-between">
                                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                                        Email
                                                    </label>
                                                    {touched.email && errors.email ? (
                                                        <div className="text-red-500 text-xs font-medium ml-2">{errors.email}</div>
                                                    ) : null}
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
                                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                                        Password
                                                    </label>
                                                    {touched.password && errors.password ? (
                                                        <div className="text-red-500 text-xs font-medium ml-2">{errors.password}</div>
                                                    ) : null}
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
                                                type="submit"
                                                disabled={isSubmitting}
                                                className={`w-full py-2 px-4 text-white font-semibold rounded-md bg-green-600 hover:bg-green-900 transition-colors duration-300 ${
                                                    isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                                                }`}
                                            >
                                                {isSubmitting ? "Saving..." : "Save"}
                                            </button>
                                        </Form>
                                    );
                                }}
                            </Formik>
                        </div>
                    </div>

                    {/* footer */}
                    <div className="grid grid-cols-1">
                        <Footer/>
                    </div>
                </div>

            </div>
            <ToastContainer />
        </div>
    );
}

export default Register;
