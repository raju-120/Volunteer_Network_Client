import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../Asstes/logos/Group 1329.png";
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';


const Header = () => {

    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () =>{
        logOut()
        .then()
        .catch();
    }

    const menuItems = <>
        <li className='text-white' style={{marginRight:"10px"}}><Link to="/">Home</Link></li>
        <li className='text-white' style={{marginRight:"10px"}}><Link to="/">Donation</Link></li>
        <li className='text-white' style={{marginRight:"10px"}}><Link to="/">Events</Link></li>
        <li className='text-white' style={{marginRight:"10px"}}><Link to="/">Blog</Link></li>
    </> 
    return (
        <div>
            <div className="navbar bg-base-100 mt-5 mb-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost normal-case text-xl">
                        <img src={logo} style={{height: "55px"}} alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user?.email ?
                        <>
                            <Link to="/profile" className="btn mx-5 text-white">Profile</Link>
                        </>
                        :
                        <Link to="/register" className="btn mx-5 text-white">Registration</Link>
                    }
                    {
                        user?.email ?
                        <>
                            <Link to="/" className="mx-5 text-white">
                                <button onClick={handleLogOut} className='btn btn-outline btn-info'>LogOut</button>
                            </Link>
                        </>
                        :
                        <Link to="/admin" className="btn mx-5 text-white">Admin</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;