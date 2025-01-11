import React from 'react'
import About from './About'
import spoon from '../images/spone.png'
import chef from '../images/chef.png'
import CustomerService from '../images/headphone.png'
import CartService from '../images/cartservice.png'


const Home = () => {

      // const data = [
      //       {img:'https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D'},
      //       {img:'https://images.unsplash.com/photo-1651978595428-b79169f223a5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHwwfDB8fHww'}
      // ]

      // const [image, setImage] = useState(data)

      return (
            <div>

                  <div className="flex flex-col items-center h-[35rem] rounded-md">
                        <div className='flex flex-col justify-center items-center w-5/6 mt-4 h-[33rem] rounded-md relative overflow-hidden p-4'>

                              {/* <img src="https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D" className='w-full h-auto object-cover' alt="" /> */}
                              
                              <img src="https://images.unsplash.com/photo-1460306855393-0410f61241c7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZvb2R8ZW58MHwwfDB8fHww" className='w-full h-auto object-cover rounded-md' alt="" />

                              {/* <img src="https://images.unsplash.com/photo-1651978595428-b79169f223a5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHwwfDB8fHww" className='h-fit w-full bg-slate-500 object-cover' alt="" /> */}
                        </div>
                  </div>

                  <div className='flex w-full justify-center h-64 mt-9' >
                        <div className='w-[80rem] flex justify-center gap-7 p-3 '>
                                    <div className='flex flex-col bg-orange-400 w-[18rem] h-[14rem] gap-2 p-4 rounded-md hover:scale-110 duration-75'>
                                          <img className='h-12 w-12 object-cover bg-white' src={spoon} alt="" />
                                          <h1 className='font-semibold text-2xl mt-5'>Quality Food</h1>
                                          <p className='text-sm mt-1'> Relish expertly crafted dishes made with the freshest ingredients for an unforgettable dining experience. </p>
                                    </div>
                                    <div className='flex flex-col bg-orange-400 w-[18rem] h-[14rem] gap-2 p-4 rounded-md hover:scale-110 duration-75'>
                                          <img className='h-12 w-12 object-cover bg-white' src={chef} alt="" />
                                          <h1 className='font-semibold text-2xl mt-5'>Master Chefs</h1>
                                          <p className='text-sm mt-1'> Our culinary maestros create gastronomic wonders that will leave you craving for more. </p>
                                    </div>
                                    <div className='flex flex-col bg-orange-400 w-[18rem] h-[14rem] gap-2 p-4 rounded-md hover:scale-110 duration-75'>
                                          <img className='h-12 w-12 object-cover bg-white' src={CustomerService} alt="" />
                                          <h1 className='font-semibold text-2xl mt-5'>24/7 Service</h1>
                                          <p className='text-sm mt-1'>Enjoy our impeccable service and delectable dishes anytime, day or night, for a truly satisfying experience.</p>
                                    </div>
                                    <div className='flex flex-col bg-orange-400 w-[18rem] h-[14rem] gap-2 p-4 rounded-md hover:scale-110 duration-75'>
                                          <img className='h-12 w-12 object-cover bg-white' src={CartService} alt="" />
                                          <h1 className='font-semibold text-2xl mt-5'>Quality Food</h1>
                                          <p className='text-sm mt-1'>From the comfort of your own home, indulge in our delicious offerings with our hassle-free online ordering system.</p>
                                    </div>

                              </div>
                  </div>


                  <div className='mt-10'>
                        <About />
                  </div>

            </div>
      )
}

export default Home