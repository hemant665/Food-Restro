import React, { useState } from 'react'
import spoon from '../images/spone.png'
import chef from '../images/chef.png'
import CustomerService from '../images/headphone.png'
import CartService from '../images/cartservice.png'
import CustomerCard from './CustomerCard'
const CustomerCards = () => {

      const data = [
            {image:{spoon} , name:"Quality Food", description:'Relish expertly crafted dishes made with the freshest ingredients for an unforgettable dining experience.'},
            {image:{chef} , name:"Master Chefs", description:'Our culinary maestros create gastronomic wonders that will leave you craving for more.'},
            {image:{CustomerService} , name:"24/7 Service", description:'Enjoy our impeccable service and delectable dishes anytime, day or night, for a truly satisfying experience.'},
            {image:{CartService} , name:"Order Online", description:'From the comfort of your own home, indulge in our delicious offerings with our hassle-free online ordering system.'},
      ]

      const [service, setService] = useState(data)
      
  return (
     

    <div>
      {service.map((item,index) => (
                 <div className='flex w-full justify-center items-center bg-slate-600' >
                       <CustomerCard key={index} name={item.name} image={item.image} description=
                       {item.description}/>
                 </div>   
            ))}
    </div>
  )
}

export default CustomerCards