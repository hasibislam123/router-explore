import React from 'react';

const SignIn = () => {
    return (
        <div className='grid  justify-center items-center mx-auto mt-15'>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 ">
                <legend className="fieldset-legend text-3xl   font-bold ">SignIn</legend>

                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" />

                <label className="label">Password</label>
                <input type="password" className="input" placeholder="Password" />

                <button className="btn btn-neutral mt-4 ">Login</button>
            </fieldset>
        </div>
    );
};

export default SignIn;