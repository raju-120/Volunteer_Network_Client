import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import ProfileEvent from './ProfileEvent';

const MyProfile = () => {

    const {user} = useContext(AuthContext);
    const [registeredLists, setRegistered] = useState([]);

    useEffect( () =>{
        fetch(`http://localhost:5000/registeredLists?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setRegistered(data))
    }, [user?.email])
    return (
        <div>
            <h2 className='text-3xl text-red-600 mx-5 mt-14 mb-5'>You Have {registeredLists.length} Data</h2>
            
            <div  className='grid gap-4 mb-5 px-5 grid-cols-1 lg:grid-cols-2' >
                {registeredLists.map(registeredList =><ProfileEvent
                key={registeredList._id}
                registeredList={registeredList}>

                </ProfileEvent>)}
            </div>
        </div>
    );
};

export default MyProfile;