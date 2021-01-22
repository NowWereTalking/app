// import React, { useState, useEffect, } from 'react';
// import API from "../utils/api"
// // import { ListGroup } from "./src/Components/ListGroup/index.js";

// function User() {
//   // Setting our component's initial state
//   const [users, setUsers] = useState([])
//   const [formObject, setFormObject] = useState({})

//   // Load all logged in users and store them with setUsers
//   useEffect(() => {
//     loadUsers()
//   }, [])

// function loadUsers() {
//   API.getUsers()
//     .then(res => 
//       setUsers(res.data)
//     )
//     .catch(err => console.log(err));
// };

//     return (
//       <div className="users-container">
//         <ListGroup>
//           <ListGroup.Item>Challenger 1</ListGroup.Item>
//           <ListGroup.Item>Challenger 2</ListGroup.Item>
//           <ListGroup.Item>Challenger 3</ListGroup.Item>
//         </ListGroup>
//       </div>
//     );
  
//     }
//   export default User;