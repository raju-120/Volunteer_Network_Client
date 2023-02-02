import React from 'react';

const Home = () => {
    return (
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
    );
};

export default Home;