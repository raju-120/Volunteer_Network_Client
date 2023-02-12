import React, { useEffect, useState } from 'react';

const ProfileEvent = ({registeredList}) => {
    
    const {_id,title,eventDate, volunteers} = registeredList;
    const [registeredLists, setRegisteredLists] = useState({});

    useEffect( () =>{
        fetch(`http://localhost:5000/events/${volunteers}`)
        .then(res => res.json())
        .then( data => setRegisteredLists(data))
    }, [volunteers])
    
    const handleCancel = id =>{
        console.log(id);
        const proceed = window.confirm('Are you sure want to cancel as a volunteer in this event?');
        if(proceed){
            fetch(`http://localhost:5000/registeredLists/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
        }
    }
   

    return (
        <div style={{width: '40em'}}>
            <div className="card card-side bg-white shadow-xl ">
                <figure>
                    {
                        registeredLists?.img && 
                        <img style={{width: '15em'}} src={registeredLists?.img} alt="Movie"/>
                    }
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-black">{title}</h2>
                    <p className='text-black'>Date: <small>{eventDate}</small></p>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleCancel(_id)} className="btn btn-primary">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileEvent;