import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import CartCard from './CartCard'
import { useData } from './Datacontext';

const Cart = () => {

      const {cart, setCart} = useData()

      const increment = (index) => {
            const newArr = [...cart ]
            newArr[index] = {...newArr[index], quantity: newArr[index].quantity + 1}
            newArr[index] = {...newArr[index], sabtotalprice: newArr[index].sabtotalprice + newArr[index].price}
            setCart(newArr)
            console.log(newArr);

      }

      const decrement = (index) => {
            const newArr = [...cart ]
            newArr[index] = {...newArr[index], quantity: newArr[index].quantity - 1}
            newArr[index] = {...newArr[index], sabtotalprice: newArr[index].sabtotalprice - newArr[index].price}
            setCart(newArr)
            console.log(newArr);
      }

      const notify = () => {
            // toast("");
            toast(
                  `Order Placed Successfully ______________________________ We are glad that you have given us the chance to serve you. The order will be delivered hot and fresh.` 
            , {
              position: "top-center",
              autoClose: 1500,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              theme: "colored",
              });
          }

      return (
            <div className='w-full max-h-full  min-h-screen flex justify-center'>
                  <div className='w-5/6 flex flex-col mt-8 items-center '>
                        <div className='w-1/2 flex flex-col items-center p-4'>
                              <div className='text-4xl font-bold '>
                                    <h1 >Customize Your <span className='text-orange-400'>Cart</span></h1>
                              </div>
                              <div className='mt-4 flex flex-col text-center'>
                                    <p>Uh Oh !! You have no items in your cart</p>
                                    <p>Please add at least one item and come back</p>
                              </div>

                              <div className='w-full mt-7'>
                                    {cart.map((item, index) => {
                                          return <CartCard key={index} item={item} index={index} increment={increment} decrement={decrement}/>
                                    })}
                                    
                                    
                                    
                                    <div className='drop-shadow-xl'>
                                          <div className='w-full bg-white p-3 mt-2'>
                                                <div className='flex justify-between text-xl'>
                                                      <h1>Packaging Charges</h1>
                                                      <h1>$5</h1>
                                                </div>
                                                <div className='flex justify-between text-xl'>
                                                      <h1>GST</h1>
                                                      <h1>$15</h1>
                                                </div>
                                          </div>

                                          <div className='flex justify-between text-xl bg-orange-400 text-white py-2 px-3'>
                                                <h1>Total Order</h1>
                                                <h1>$20</h1>
                                          </div>

                                          <div className='bg-[#323236] mt-4 flex text-center w-full text-white text-xl'>
                                                <button onClick={()=> notify()} className='w-full p-3 hover:bg-[#28282B]'>Place Order</button>
                                          </div>
                                    </div>
                              </div>

                        </div>

                  </div>
        <ToastContainer />

            </div>
      )
}

export default Cart