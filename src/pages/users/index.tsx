import { useState, useEffect } from "react";
import axios from "axios";
import IUser from "../../interfaces/user.interfaces";
import Navbar from "../../components/navbar";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Footer from "../../components/footer";


const Users = () => {    

    const [users, setUsers] = useState<IUser[]> ([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    
    const getUsers = async () => {
        setLoading(true); // load, menunggu fect data selesai
        try {
            const { data } = await axios.get(
                "https://66fd3bcec3a184a84d19917c.mockapi.io/api/v1/users"
            );
            const registeredUsers = data.filter ((user:IUser) =>user.isRegistered);

            setUsers(registeredUsers);
            toast.success('Load Data Berhasil')
        } catch (err) {
            console.error(err);
            setError("Mohon maaf, gagal memanggil data. Coba lagi");
            toast.error('Gagal, Maaf terdapat kendala.')
        } finally {
            setLoading(false); // hasil balik sukses atau gagal
        }
    };

        useEffect(() =>  {
            getUsers();
        }, []);

        if (loading) {
            return (
                <div className="flex justify-center items-center h-screen bg-orange-100">
                    <div className="spinner"></div> {/* Custom Spinner */}
                    <p className="ml-2">Loading...</p> {/* Optional loading text */}
                </div>
            )
        }

        if (error) {
            return <div>{error}</div>
        }

    return (
        <>
            <ToastContainer 
                position="top-right" 
                autoClose={3000} 
                hideProgressBar={false} 
                closeOnClick 
                pauseOnHover 
                draggable/>

            <div className="min-h-screen flex mx-auto items-center justify-center bg-orange-100">
                <div>
                    <div className="bg-green-200 rounded-lg shadow-lg max-w-lg w-full mb-2">
                        <div className="grid grid-cols-1">
                            <Navbar/>
                        </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-lg max-w-lg w-full">
                        <div className="grid grid-cols-1">
                            <h1 className="text-2xl font-semibold  text-gray-800 mb-6">Kermit Member List</h1>
                            <div>
                                <table className="min-w-full border-collapse border border-gray-300">
                                    <thead>
                                        <tr>
                                            <th className="border border-gray-300 p-2">First Name</th>
                                            <th className="border border-gray-300 p-2">Last Name</th>
                                            <th className="border border-gray-300 p-2">Email</th>
                                            <th className="border border-gray-300 p-2">Password</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users?.map((item) => (
                                            <tr key={item.id} className="hover:bg-gray-100" >
                                                <td className="border border-gray-300">{item.firstName}</td>
                                                <td className="border border-gray-300">{item.lastName}</td>
                                                <td className="border border-gray-300">{item.email}</td>
                                                <td className="border border-gray-300">{item.password}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>

                            </div>
                        </div>

                         {/* footer */}
                        <div className="grid grid-cols-1">
                            <Footer/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Users;