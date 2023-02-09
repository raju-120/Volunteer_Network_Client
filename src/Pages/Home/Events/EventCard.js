import React from 'react';
import { Link } from 'react-router-dom';

const EventCard = ({event}) => {
    const {_id, img,event_title} = event;
    return (
        <div>
            <div className="card card-compact w-84 shadow-md shadow-white bg-base-100">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    
                    <div className="card-actions justify-center">
                        <Link to={`/checkout/${_id}`}>
                             <button className="btn btn-primary text-center">{event_title}</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventCard;

