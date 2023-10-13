import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import React from "react";
import { deleteUserAction } from "../Config/action";

function UserList() {

    const users = useSelector((data) => data.users);
    
    const dispatch = useDispatch();

    const hadleDelete = (id) => {
        
        dispatch(deleteUserAction(id));
        
    }
    return (
        <div>
            <p>
                <Link to="/add-user">
                <button > Add user </button>
                </Link>
            </p>
            <table>
                <thead>
                    <tr>

                        <th>ID </th>

                        <th>Name </th>

                        <th>Email </th>

                        <th>Action</th>


                    </tr>
                </thead>

                <tbody>

                    {
                        users.map((user , index) => {
                            
                            return (
                                <tr key={index}>
                                    
                                    <td>{user.id} </td>
                                    <td>{user.nom} </td>
                                    <td>{user.email} </td>

                                    <td>
                                        
                                        <Link to={`/update-user/${user.id}`}>

                                            <button>Edit</button>
                                            
                                        </Link>

                                        
                                            
                                            <button onClick={() => hadleDelete(user.id)}>Delete</button>

                                        
                                        
                                    </td>
                                </tr>
                            );

                        })

                    }
                   
                     
                </tbody>
                
            </table>

    </div>
)

}

export default UserList;