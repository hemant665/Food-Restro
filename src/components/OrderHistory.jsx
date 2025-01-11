import React from 'react'
import OrderCard from './OrderCard'


const OrderHistory = () => {
      return (
            <div className='flex flex-col items-center w-full h-screen'>
                  <div className='mt-7 text-4xl font-bold p-4'>
                        <h1>Wanna Repeat Something From <span className='text-orange-400'>Previous Orders?</span></h1>
                  </div>

                  <div className='flex flex-col gap-3 h-auto w-[35%] mt-4'>
                        <div>
                              <OrderCard />
                              <OrderCard />
                        </div>
                  </div>
            </div>
      )
}

export default OrderHistory