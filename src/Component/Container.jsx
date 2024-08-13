import React from 'react'
import pic1 from "../Pictures/pic1.png"
import pic2 from "../Pictures/pic2.png"
import pic3 from "../Pictures/pic3.png"
import { List } from './List'
function Container() {
  return (
    <>
        <div className='w-[100%] h-[100vh] flex justify-center items-center '>
            <div className='w-[100%] h-[100%] px-[5%] py-[10%] '>
                <h2 className='text-[1.5rem] font-bold my-[20px]'>Digital solutions for recreational fishing.</h2>
                <p className='wrap text-[.9rem] text-[gray] my-[10px]'>Angling iQ offers digital solutions for fishermen and businesses. Our goal is to be able to satisfy the demands of all fisheries with exceptional software and service.</p>
                <div className='mt-[5%] mb-[10%]'>
                {/* <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Download App</button>
                <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Digital Logbooks</button> */}
                </div>
                <p className='wrap text-[.9rem] my-[10px]'>Trusted by</p>
                <div className='flex justify-start items-center gap-5'>
                    <img src={pic1} alt="" className='w-[90px] h-[50px]' />
                    <img src={pic2} alt="" className='w-[90px] h-[50px]' />
                    <img src={pic3} alt=""className='w-[90px] h-[50px]'  />
                </div>
            </div>
            <div className=' w-[100%] h-[100%] px-[5%] py-[10%] '>
            <List />
            </div>
        </div>
    </>
  )
}

export {Container}