import React, { createContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Admin = () => {

    const { login } = createContext(AuthContext);

    const handleAdminLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
        .then( result => {
            const user = result.user;
            console.log(user)
            if(email === "admin@gmail.com" && password === "admin123")
            {
                alert("Admin login Successfully");
                
            }
            else{
                alert("You are not admin!!");
            }
        })
        .catch( err => console.error(err))
    }
    return (
        <div>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col w-3/5 lg:flex-row mt-10">
                    <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-4xl mt-2 text-center font-bold text-white">Login now as Admin</h1>
                        <form onSubmit={handleAdminLogin} className="card-body">
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
                                <label className="label">
                                    <Link to='/' href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p>Doesn't have any account? <Link className='text-xl font-semibold text-orange-500' to='/register'>SignUp</Link></p>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;