import React from 'react'

const CartCard = ({item,increment,decrement,index}) => {
    

      return (
            <div className='flex justify-between w-full p-1 mt-2 bg-white drop-shadow-xl rounded-md'>
                  <div className='flex gap-4 p-2'>
                        <img className='h-24 w-32 object-cover rounded-md' src={item.image} alt="" />
                        <div className=' text-xl flex flex-col justify-between'>
                              <div>
                                    <h1>{item.name}</h1>
                                    <h1>${item.price}</h1>
                              </div>
                              <div className='flex gap-2 items-center bg-slate-100'>
                                    <button onClick={()=>decrement(index)} className='bg-orange-400 px-3 text-white text-2xl'> - </button>
                                    <h1 className=' px-3'>{item.quantity}</h1>
                                    <button onClick={()=>increment(index)} className='bg-orange-400 px-3 text-white text-2xl'> + </button>
                              </div>
                        </div>
                  </div>
                  <div className='flex items-center p-3'>
                        <h1 className='bg-slate-100 px-4 py-1 text-xl' >$ {item.sabtotalprice }</h1>
                  </div>
            </div>
      )
}

export default CartCard