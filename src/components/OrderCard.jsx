import React from 'react'

const OrderCard = () => {
      return (
            <div className='w-full rounded-md bg-white flex flex-col drop-shadow-md mt-2'>
                  <div className='rounded-md '>
                        <div className='flex justify-between px-3 py-2 bg-orange-400 '>
                              <h1>RESTRO <span>#34</span></h1>
                              <h1>4/5/24</h1>
                        </div>
                        <div className='flex justify-between p-2 items-center'>
                              <span className='text-green-800 bg-green-200 px-1 text-sm rounded-md border-2 border-green-400'>veg pasta</span>
                              <h1 className='bg-slate-100 p-2'>$23</h1>
                        </div>
                  </div>
            </div>
      )
}

export default OrderCard