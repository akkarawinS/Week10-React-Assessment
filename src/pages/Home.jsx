import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
export default function Home() {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/owner');
    };


    return (
        <div className='text-center bg-[#e7e8e7] h-svh'>
            <h1 className='text-5xl font-bold pt-20 pb-20'>Generation Thailand <br></br>React - Assessment</h1>

            <div className='flex justify-evenly'>
                <Link className='text-center p-4 bg-white rounded-md shadow-md font-bold cursor-pointer' to='/user'>User Home Section</Link>
                <Link className='text-center p-4 bg-white rounded-md shadow-md font-bold cursor-pointer' to='/admin'>Admin Home Section</Link>
            </div>


        </div>
    );
}
