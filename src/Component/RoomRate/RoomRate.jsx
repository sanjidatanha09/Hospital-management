import React from 'react';
import picture from '../../assets/All-img/banner.jpg'

const RoomRate = () => {
    return (
        <div className='border pb-16 pt-10'>
            <div className='text-center'>
                <p className=''>Our Commitment Is To Provide Comprehensive Quality Care</p>
                <h1 className='text-black font-bold text-5xl'>Room Rate</h1>

            </div>
            
            <div className='flex justify-between items-center pt-10'>
                <div className='text-black text-xl pl-24 '>
                
                    <table >
                        <th>
                            <td>Room Rate</td>
                            <td>In Hospital</td>
                        </th>
                        <tr>
                            <td>Room Type </td>
                            <td>Charge</td>
                        </tr>
                        <tr>
                            <td>Ward </td>
                            <td>4,500</td>
                        </tr>
                        <tr>
                            <td>Single Deluxe </td>
                            <td>12,500</td>
                        </tr>
                        <tr>
                            <td>Single Standard </td>
                            <td>10,000</td>
                        </tr>
                        <tr>
                            <td>Twin Bed  </td>
                            <td>6,500</td>
                        </tr>
                    </table>

                </div>
                <div className='grid grid-cols-2 pr-10 gap-5'>
                    <img className='w-[250px] ' src={picture} alt="" />
                    <img className='w-[250px]' src={picture} alt="" />
                    <img className='w-[250px]' src={picture} alt="" />
                    <img className='w-[250px]' src={picture} alt="" />

                </div>
            </div>
        </div>
    );
};

export default RoomRate;