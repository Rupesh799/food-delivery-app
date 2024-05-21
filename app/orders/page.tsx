import React from 'react'

const page = () => {
  return (
    <div className='p-4 lg:px-20 xl:px-40'>
        <table className='w-full border border-separate border-spacing-2 '>
          <thead className=''>
            <tr className='text-center border p-4'>
              <th className=' py-4 hidden md:block'>Order Id</th>
              <th>Products</th>
              <th className='hidden md:block'>Price</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody >
            <tr className='text-center bg-red-400'>
              <td className='py-3 hidden md:block'>123232311</td>
              <td >Product 1</td>
              <td className='hidden md:block'>Rs.3000</td>
              <td>2024-08-21</td>
              <td>Pending</td>

            </tr>
            <tr className='text-center odd:bg-primary-primary2'>
              <td className='py-3 hidden md:block'>123232311</td>
              <td >Product 1</td>
              <td className='hidden md:block'>Rs.3000</td>
              <td>2024-08-21</td>
              <td>Delivered</td>

            </tr>
            <tr className='text-center odd:bg-primary-primary2'>
              <td className='py-3 hidden md:block'>123232311</td>
              <td >Product 1</td>
              <td className='hidden md:block'>Rs.3000</td>
              <td>2024-08-21</td>
              <td>Delivered</td>

            </tr>
          </tbody>
        </table>
    </div>
  )
}

export default page