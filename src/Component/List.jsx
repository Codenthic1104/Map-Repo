import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
function List() {
  return (
    <>
        

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="p-[20px]">
                    Locations
                </th>
            </tr>
        </thead>
        <tbody>

            <tr class="bg-white border-b cursor-pointer dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <div className='flex justify-between items-center'>
                    <div>
                        <th scope="row" class="px-6 flex justify-center items-center py-4 cursor-pointer font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <FaLocationDot className='mx-[2px] text-red-600' />
                            Munki efri
                        </th>
                    </div>

                    <NavLink to={`/map/Munki efri/32.77/05.47`} >
                        <div>
                            <button type="button" class="text-white w-[50px] h-[20px] bg-green-400 border-[1.5px] border-green-600 hover:bg-green-300 duration-75 focus:outline-none focus:ring-4  font-medium rounded-[5px] text-[.5rem]  text-center me-2 mb-2 focus:ring-white dark:bg-white dark:hover:bg-white dark:focus:ring-white">Open</button>
                        </div>
                    </NavLink>

                </div>
            </tr>
            <tr class="bg-white border-b cursor-pointer dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <div className='flex justify-between items-center'>
                    <div>
                        <th scope="row" class="px-6 flex justify-center items-center py-4 cursor-pointer font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <FaLocationDot className='mx-[2px] text-red-600' />
                            Finnast.á neðri
                        </th>
                    </div>

                    <NavLink to={"/map/Finnast.á neðri/30.54/09.35"} >
                        <div>
                            <button type="button" class="text-white w-[50px] h-[20px] bg-green-400 border-[1.5px] border-green-600 hover:bg-green-300 duration-75 focus:outline-none focus:ring-4  font-medium rounded-[5px] text-[.5rem]  text-center me-2 mb-2 focus:ring-white dark:bg-white dark:hover:bg-white dark:focus:ring-white">Open</button>
                        </div>
                    </NavLink>

                </div>
            </tr><tr class="bg-white border-b cursor-pointer dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <div className='flex justify-between items-center'>
                    <div>
                        <th scope="row" class="px-6 flex justify-center items-center py-4 cursor-pointer font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <FaLocationDot className='mx-[2px] text-red-600' />
                            Skjóldalsá (árm)
                        </th>
                    </div>

                    <NavLink to={"/map/Skjóldalsá (árm)/30.49/08.97"} >
                        <div>
                            <button type="button" class="text-white w-[50px] h-[20px] bg-green-400 border-[1.5px] border-green-600 hover:bg-green-300 duration-75 focus:outline-none focus:ring-4  font-medium rounded-[5px] text-[.5rem]  text-center me-2 mb-2 focus:ring-white dark:bg-white dark:hover:bg-white dark:focus:ring-white">Open</button>
                        </div>
                    </NavLink>

                </div>
            </tr><tr class="bg-white border-b cursor-pointer dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <div className='flex justify-between items-center'>
                    <div>
                        <th scope="row" class="px-6 flex justify-center items-center py-4 cursor-pointer font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <FaLocationDot className='mx-[2px] text-red-600' />
                            Stöð 1 - Gil 
                        </th>
                    </div>

                    <NavLink to={"/map/Stöð 1 - Gil /15.53/14.27"} >
                        <div>
                            <button type="button" class="text-white w-[50px] h-[20px] bg-green-400 border-[1.5px] border-green-600 hover:bg-green-300 duration-75 focus:outline-none focus:ring-4  font-medium rounded-[5px] text-[.5rem]  text-center me-2 mb-2 focus:ring-white dark:bg-white dark:hover:bg-white dark:focus:ring-white">Open</button>
                        </div>
                    </NavLink>

                </div>
            </tr>
            <tr class="bg-white border-b cursor-pointer dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <div className='flex justify-between items-center'>
                    <div>
                        <th scope="row" class="px-6 flex justify-center items-center py-4 cursor-pointer font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <FaLocationDot className='mx-[2px] text-red-600' />
                            Nes 
                        </th>
                    </div>

                    <NavLink to={"/map/Nes/24.59/15"} >
                        <div>
                            <button type="button" class="text-white w-[50px] h-[20px] bg-green-400 border-[1.5px] border-green-600 hover:bg-green-300 duration-75 focus:outline-none focus:ring-4  font-medium rounded-[5px] text-[.5rem]  text-center me-2 mb-2 focus:ring-white dark:bg-white dark:hover:bg-white dark:focus:ring-white">Open</button>
                        </div>
                    </NavLink>

                </div>
            </tr>
            
           
        </tbody>
    </table>
</div>

    </>
  )
}

export {List}