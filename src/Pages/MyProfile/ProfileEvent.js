import React from 'react';

const ProfileEvent = ({registeredList}) => {

    
    const {title,eventDate} = registeredList;
    

   

    return (
        <div>
            <div className="card card-side bg-white shadow-xl ">
                <figure><img src="/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie"/></figure>
                <div className="card-body">
                    <h2 className="card-title text-black">{title}</h2>
                    <p className='text-black'>Date: <small>{eventDate}</small></p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileEvent;