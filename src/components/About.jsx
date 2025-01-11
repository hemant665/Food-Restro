import React from 'react'
import Footer from './Footer'
import About1image from '../images/About1.jpg'
import About2image from '../images/About2.jpg'
import About3image from '../images/About3.jpg'
import About4image from '../images/About4.jpg'

const About = () => {
      return (
            <div>
                  <div className='w-full flex items-center justify-center '>
                        <div className='h-[35rem] w-[80rem] flex gap-6 items-center mt-9'>
                              <div className='grid grid-cols-2 gap-5 w-2/6'>
                                    <img className='h-64 w-64 object-cover' src={About1image} alt=""></img>
                                    <img className='h-64 w-64 object-cover' src={About2image} alt=""></img>
                                    <img className='h-64 w-64 object-cover' src={About3image} alt=""></img>
                                    <img className='h-64 w-64 object-cover' src={About4image} alt=""></img>
                              </div>

                              <div className='w-4/6 flex flex-col items-center justify-center gap-4 px-9'>
                                    <h1 className='text-4xl font-bold'>Welcome to <span className='text-orange-500'>Restro</span></h1>
                                    <h2 className='mt-6' >Welcome to our restaurant, where every dish is a masterpiece and every experience is a delight. Our team of talented chefs and dedicated staff work tirelessly to bring you the best of our cuisine, prepared to perfection with only the freshest and highest-quality ingredients.</h2>

                                    <h2>At our restaurant, we believe that dining is not just about eating, but about experiencing. That's why we've created a welcoming ambiance that reflects our passion for great food and impeccable service. Whether you're looking for a romantic dinner, a family gathering, or a business lunch, we have the perfect setting for you. Our menu is a celebration of global flavors, with dishes that range from traditional favorites to innovative creations. And with our commitment to using sustainable and locally sourced ingredients, you can enjoy your meal with a clear conscience. So why wait? Come and discover the magic of our restaurant today!</h2>

                                    <div className='flex  justify-between items-center w-full mt-9'>
                                          <div className='flex w-1/5 gap-3'>
                                                <h1 className='text-orange-400 text-6xl font-bold'>10</h1>
                                                <h1 className='flex text-2xl items-center leading-6 font-light'>YEAR OF EXPERIENCE</h1>
                                          </div>
                                          <div className='flex items-center gap-3 w-1/4'>
                                                <h1 className='text-orange-400 text-6xl font-bold'>30</h1>
                                                <h1 className='text-2xl leading-6 font-light'>SKILLED CHEFS</h1>
                                          </div>

                                    </div>
                              </div>
                        </div>
                  </div>



                  <div>
                        <Footer />

                  </div>
            </div>

      )
}

export default About

