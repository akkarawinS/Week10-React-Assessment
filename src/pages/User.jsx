import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const URL = 'https://67eca027aa794fb3222e43e2.mockapi.io/members';

export default function User() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const res = await fetch(URL);
            const data = await res.json();
            setData(data);
        };

        getData();
    }, []);
    return (
        <div className='text-center bg-[#e7e8e7] h-svh'>
            <h1 className='text-5xl font-bold pt-20 pb-20'>Generation Thailand <br></br>Home - User Section</h1>
            <div className='flex justify-evenly'>
                <Link className='text-center p-4 bg-white rounded-md shadow-md font-bold cursor-pointer' to='/user'>User Home Section</Link>
                <Link className='text-center p-4 bg-white rounded-md shadow-md font-bold cursor-pointer ' to='/admin'>Admin Home Section</Link>
            </div>

            {/* Table Section */}
            <div className=' flex justify-center pt-20'>
                <table className='border-2'>
                    <tr className='bg-[#e7e8e7] border-b'>
                        <th className='px-25 py-2 border-r'>Name</th>
                        <th className='px-25 py-2 border-r'>Last Name</th>
                        <th className='px-25 py-2'>Position</th>
                    </tr>
                    <tbody className='bg-white '>
                        {data.map((item) => (
                            <tr key={item.id}>
                                <td className='border-r border-b p-2.5'>{item.name}</td>
                                <td className='border-r border-b'>{item.lastname}</td>
                                <td className='border-r border-b'>{item.position}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* Table Section */}
        </div>
    )
}
