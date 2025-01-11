import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import FoodCard from './FoodCard'
import { useState } from 'react'
import { useData } from './Datacontext';


const raw = [
  { dishName: "Naan", price: 5, image: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Annapurna_Naan.jpg", description:"leavened Indian flatbread traditionally cooked in a tandoor, often served alongside curries and grilled meats. It's typically made with flour, yogurt, and yeast.", category:"Dinner", addCart: false },
  { dishName: "Biryani", price: 26, image: "https://upload.wikimedia.org/wikipedia/commons/5/5a/%22Hyderabadi_Dum_Biryani%22.jpg", description:"Savor our aromatic Biryani, featuring tender meat (or vegetables) and fragrant spices, perfectly paired with a side of raita.",  category:"Lunch",addCart: false },
  { dishName: "Aloo gobi", price: 15, image: "https://cinnamonsnail.com/wp-content/uploads/2024/08/Aloo-Gobi-05.jpg", description:"Enjoy our classic Aloo Gobi, a flavorful blend of spiced potatoes and cauliflower, cooked to perfection with aromatic herbs. A comforting vegetarian dish that’s both hearty and satisfying.",  category:"Dinner", addCart: false },
  { dishName: "Malabar matthi curry", price: 35, image: "https://images.unsplash.com/photo-1692106914406-093b0df73a10?q=80&w=2948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description:"Malabar Matthi Curry is a flavorful coastal dish from Kerala, featuring tender fish cooked in a rich, aromatic coconut gravy with a blend of spices, creating a perfect balance of heat and tang.",  category:"No veg", addCart: false },
  { dishName: "Samosas", price: 10, image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/12/samosa-recipe.jpg", description:"Crispy, golden Samosas filled with a savory mix of spiced potatoes, peas, and herbs. A perfect appetizer to kickstart your meal with a burst of flavor.", category:"Lunch", addCart: false },
  { dishName: "Shahi Paneer", price: 33, image: "https://flavoursofmykitchen.com/wp-content/uploads/2020/06/MG_7368-scaled.jpg", description:"Delight in our Shahi Paneer, a rich and creamy curry made with soft paneer cubes, simmered in a royal blend of aromatic spices and a luscious cashew-based gravy. A luxurious vegetarian dish fit for any feast.", category:"Dinner", addCart: false },
  { dishName: "Fish Pakora", price: 25, image: "https://images.unsplash.com/photo-1641848392626-b1c886f02e21?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDcyfHx8ZW58MHx8fHx8", description:"Fish Pakora is a crispy and savory fried snack, where tender fish pieces are coated in a spiced batter and deep-fried to golden perfection, making it a delightful appetizer or side dish.", category:"Non veg", addCart: false },
  { dishName: "Cocktail", price: 15, image: "https://images.unsplash.com/photo-1506802913710-40e2e66339c9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGp1aWNlJTIwZHJpbmt8ZW58MHx8MHx8fDA%3D", description:"A cocktail is a refreshing mix of spirits, juices, and garnishes, expertly crafted to deliver a vibrant and flavorful drinking experience.", category:"Drink", addCart: false },
  { dishName: "Paneer Tikka", price: 10, image: "https://spicecravings.com/wp-content/uploads/2020/10/Paneer-Tikka-Featured-1.jpg", description:"Savor our Paneer Tikka, succulent chunks of marinated paneer grilled to smoky perfection. Served with a side of tangy mint chutney for the ultimate appetizer experience.", category:"Dinner", addCart: false },
  { dishName: "Cup Cake", price: 5, image: "https://images.unsplash.com/photo-1690369642866-3f9143af0a89?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description:"Indulge in our soft and fluffy Cupcakes, baked to perfection and topped with creamy frosting. A sweet treat to satisfy your cravings, available in a variety of delicious flavors.", category:"Lunch", addCart: false },
  { dishName: "Prawns Masala", price: 12, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9YZHx2NdOr2NmH0qjAK2DxfO_VDM82eQRWw&s", description:"A spicy and flavorful dish made with fresh prawns, onions, tomatoes, and a blend of aromatic spices. Served with rice or naan, this dish is a seafood lover's delight." , category:"Lunch", addCart: false },
];

const FoodCards = () => {

  const notify = () => {
    toast.success(' Item Successful Added in Cart', {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  }

  const [foodCard, setfoodCard] = useState(raw)

  const addDishToCard = (index) => {
    return setfoodCard((prev) => {
      return prev.map((item, idx) => {
        if (idx === index) {
          return { ...item, addCart: !item.addCart }
        }
        return item;
      })
    })
  }


  const filterHandler = (category) => {
    console.log(foodCard);

    if(category === "All"){
      setfoodCard(raw);
      return;
    }

    const newItems = raw.filter(item => item.category === category)
    setfoodCard(newItems)
  }
  
  return (
    <div className='flex flex-col justify-center items-center '>
      <div className='mt-7 text-4xl font-bold p-4'>
        <h1>We Are Here To <span className='text-orange-500'>Serve You</span></h1>
      </div>

      <div className='flex gap-6 mt-6'>
        <button onClick={()=> filterHandler("All") } className='bg-slate-200 px-4 py-1 drop-shadow-md hover:bg-orange-500 hover:text-white rounded'>ALL</button>
        <button onClick={()=> filterHandler("Lunch") } className='bg-slate-200 px-4 py-1 drop-shadow-md hover:bg-orange-500 hover:text-white rounded'>LUNCH</button>
        <button onClick={()=> filterHandler("Dinner") } className='bg-slate-200 px-4 py-1 drop-shadow-md hover:bg-orange-500 hover:text-white rounded'>DINNER</button>
        <button onClick={()=> filterHandler("Drinks") } className='bg-slate-200 px-4 py-1 drop-shadow-md hover:bg-orange-500 hover:text-white rounded'>DRINKS</button>
        <button onClick={()=> filterHandler("Veg") } className='bg-slate-200 px-4 py-1 drop-shadow-md hover:bg-orange-500 hover:text-white rounded'>VEG</button>
        <button onClick={()=> filterHandler("Non veg") } className='bg-slate-200 px-4 py-1 drop-shadow-md hover:bg-orange-500 hover:text-white rounded'>NON-VEG</button>
      </div>

      <div className='w-5/6 grid grid-cols-3 gap-10 p-6 mt-5'>

        {foodCard.map((item, index) => (

          <FoodCard key={index} name={item.dishName} price={item.price} image={item.image} index={index} description={item.description} addCart={item.addCart} addDishToCard={addDishToCard} notify={notify} filter={item.category}/>
        ))}
        <ToastContainer />
      </div>
    </div>
  )
}


export default FoodCards