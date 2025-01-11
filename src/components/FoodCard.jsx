import React from 'react'
import { useData } from './Datacontext'

const FoodCard = ({ name, price, image, description, addCart, addDishToCard, index, notify,filter }) =>  {

  const {cart, setCart} =  useData()

  const clickHandler = () => {
    addDishToCard(index);
    notify();
    setCart([...cart , {name,price,image,quantity : 1,sabtotalprice: price}])
  }


  return (
    <div>
      <div className='flex flex-col justify-between  border border-solid rounded bg-white drop-shadow-xl w-[22rem] h-[22rem] px-2 py-3'>
        <div className='flex flex-col gap-3'>
          <img className='h-40 object-cover rounded-md' src={`${image}`} alt="" />
          <h1 className='font-semibold text-2xl'>{name}</h1>
          <h2 className='text-xs'>{description}</h2>
        </div>

        <div className='flex justify-between items-center'>
          <h1 className='font-semibold text-lg'>${price}</h1>
          <button onClick={clickHandler} className={"bg-orange-400 text-white px-3 py-1 rounded w-32 "}>{addCart === false ? "Add To Cart" : "Added"} </button>
        </div>

      </div>
    </div>
  )
}

export default FoodCard