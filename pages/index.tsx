import { collection, getDocs } from "firebase/firestore";
import {db} from '../config/firebase'



import React, { useEffect, useState } from 'react'

function Index() {
  
  const [user, setUser] = useState([]);
  const userCollectionRef = collection(db, 'users');

  useEffect(()=> {
     const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
     };

     getUsers();
    
  }, []);
  

  return (
    <div>
      {user.map((user) => {
        return (
          <div key={user.id}>
            <h1> Usuarios</h1>
            <h1>
              name: {user.name}
            </h1>
            <h2>
              name: {user.email}
            </h2>
            </div>
        )
      })}

    </div>
  )
}

export default Index