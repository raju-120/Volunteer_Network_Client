import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const CheckOut = () => {
    const {_id,event_title,date,description} = useLoaderData();
    const {user} = useContext(AuthContext);

    const handleRegister = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.fullName.value;
        const email = user?.email || 'unregister';
        const phone = form.phoneNumber.value;
        const eventDate =form.date.value;
        const details = form.details.value;
        const title = form.title.value; 
        

        const volunteer = {
            volunteers: _id,
            name, 
            email,
            phone,
            eventDate ,
            details,
            title
        }

        /* if(phone.length > 10){
            alert('Phone number should be 11 character')
        }
        else{

        } */

        fetch('http://localhost:5000/registeredLists', {
            method: 'POST',
            headers:{
                'content-type' : 'application/json',
            },
            body: JSON.stringify(volunteer)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged === true){
                form.reset();
                window.alert('Registered as Volunteer Successfully');
            }
        })
        .catch(err => console.error(err));

        
    }

    return (
        <div>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col w-full lg:flex-row mt-5">
                    <div className="card  w-full max-w-lg shadow-2xl bg-base-100">
                    <h1 className="text-3xl mt-2 text-center font-bold" style={{color: 'yellow'}}>Register as a Volunteer</h1>
                        <form onSubmit={handleRegister} className="card-body">
                            <div>
                                <label className="label">
                                    <span className="label-text">User Full Name</span>
                                </label>
                                <input type="text"           name='fullName'                   placeholder="Full Name" className="input input-bordered w-full text-white" required/>
                            </div>

                            <div>
                                <label className="label">
                                    <span className="label-text">Phone Number</span>
                                </label>
                                <input type="text" name='phoneNumber'  placeholder="Phone" className="input input-bordered w-full text-white"  required/>
                            </div>

                            <div>
                                <label className="label">
                                    <span className="label-text">User Email</span>
                                </label>
                                <input type="text" name='email' defaultValue={user?.email}    placeholder="User Email" className="input input-bordered w-full text-white" readOnly/>
                            </div>


                            <div>
                                <label className="label">
                                    <span className="label-text">Event Date</span>
                                </label>
                                <input type="text" name='date' defaultValue={date}          placeholder="Date" className="input input-bordered w-full text-white" readOnly/>
                            </div>

                            <div>
                                <label className="label">
                                    <span className="label-text">Event Details</span>
                                </label>
                                <input type="text" name='details' defaultValue={description}   placeholder="Description" className="input input-bordered w-full text-white" readOnly/>
                            </div>

                            <div>
                                <label className="label">
                                    <span className="label-text">Event Title</span>
                                </label>
                                <input type="text" name='title' defaultValue={event_title}   placeholder="Event Name" className="input input-bordered w-full text-white" readOnly/>
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                           
                        </form>
                    </div>
                </div>
            </div>
            
        </div>
        
    );
};

export default CheckOut;