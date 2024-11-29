import React, {useState, useEffect} from "react";
import axios from "axios";


const UserList =() =>{
    const [listOfUser, setListOfUser] = useState([]);
    const [loading, setLoading] = useState(true);

useEffect (() => {
    axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        setListOfUser(response.data);
        setLoading(false);
    })
    .catch(error => console.error(error));
}, []);
if (loading) return <p>loading...</p>;
 return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center p-5">
      <h1 className="text-4xl font-bold text-purple-600 mb-5">Liste des Utilisateurs</h1>
      <ul className="w-full max-w-4xl space-y-4">
        {listOfUser.map((user) => (
          <li
            key={user.id}
            className="bg-white shadow-md rounded-lg p-3 hover:bg-purple-50 transition"
          >
            <h2 className="text-xl font-semibold text-center text-black-800">{user.name}</h2>
            <p className="text-gray-600">Email : {user.email}</p>
            <p className="text-gray-600">
              Adresse : {user.address.city}, {user.address.street}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
 
 export default UserList;