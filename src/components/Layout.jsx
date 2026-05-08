import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <div>
            <div className='bg-[#e7e8e7] h-20 border-b-2 flex justify-end items-center'>
                    <Link className='font-bold p-20' to='/'>Home</Link>
                    <Link className='font-bold mr-20' to='owner'>Owner</Link>
            </div>
            <div >
                <Outlet />
            </div>
        </div>
    )
}
