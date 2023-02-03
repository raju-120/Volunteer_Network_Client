import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Register = () => {

    const {createUser} = useContext(AuthContext); 

    const handleSignUP = event => {
        event.preventDefault();
        const form = event.target;
        /* const name = form.name.value; */
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(err => console.error(err));
    }
    return (
        <div>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col w-3/5 lg:flex-row mt-10">
                    <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-4xl mt-2 text-center font-bold">Register now!</h1>
                        <form onSubmit={handleSignUP} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                
                                
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">SignUp</button>
                            </div>
                            <p>Already Have an account? <Link className='text-xl font-semibold text-orange-500' to='/login'>Login</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;