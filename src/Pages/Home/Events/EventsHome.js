import React, { useEffect, useState } from 'react';
import EventCard from './EventCard';

const EventsHome = () => {

    const [events, setEvents] = useState([]);
    useEffect( () =>{
        fetch('http://localhost:5000/events')
        .then(res => res.json())
        .then(data => setEvents(data))
    } ,[])

    return (
        <div>
            <div className='mt-5 mb-5 text-center'>
                <div>
                    <h3 className='text-4xl text-yellow-100'>I GROW BY HELPING PEOPLE IN NEED</h3>
                </div>
                <div className="form-control mt-4" style={{marginLeft: "38%"}}>
                    <div className="input-group ">
                        <input type="text" placeholder="Search…" className="input input-bordered text-center file-input-error w-full max-w-xs" />
                        <button className="btn btn-outline btn-warning w-20">
                            <h2 className=''>Search</h2>
                        </button>
                    </div>
                </div>
            </div>
            <div className='mb-5 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4' style={{marginLeft: '10px', marginRight: '10px'}}>
                {
                    events.map(event => <EventCard
                    key={event._id}
                    event={event}>

                    </EventCard>)
                }
            </div>
        </div>
    );
};

export default EventsHome;