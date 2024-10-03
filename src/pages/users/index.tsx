import { useState, useEffect } from "react";
import axios from "axios";
import IUser from "../../interfaces/user.interfaces";
const Users = () => {    
    const [users, setUsers] = useState<IUser[]> ([]);

    const getUsers = async () => {
        try{
            const{data} = await axios.get(
                "https://66fd3bcec3a184a84d19917c.mockapi.io/api/v1/users"
            );

            setUsers(data);
        } catch(err){
                console.log(err)
            }
        };

        useEffect(() =>  {
            getUsers();
        }, []);

    return (
        <div>
            <h1>User List</h1>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Password</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users?.map((item) => (
                            <tr key={item.id}>
                                <td>{item.firstName}</td>
                                <td>{item.lastName}</td>
                                <td>{item.email}</td>
                                <td>{item.password}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default Users;