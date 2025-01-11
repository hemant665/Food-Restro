import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
      return (
            <div className='w-full flex flex-col mt-7'>
                  <div className='w-full flex flex-col items-center justify-center p-8 bg-[#28282B] font-semibold'>
                        <div className='w-5/6 flex justify-between '>
                              <div className=''>
                                    <h1 className='text-orange-400 text-2xl font-semibold'>Contact</h1>
                                    <div className='text-white'>
                                          <h1 className='mt-3'>+91 1234567890</h1>
                                          <h1>123 Street, Noida, India</h1>
                                          <h1>restro@host.com</h1>
                                    </div>
                              </div>
                              <div>
                                    <h1 className='text-orange-400 text-2xl font-semibold'>Timings</h1>
                                    <div className='text-white'>
                                          <h1 className='mt-3'>Monday - Saturday</h1>
                                          <h1>09:00 AM - 09:00 PM</h1>
                                          <h1>Sunday</h1>
                                          <h1>11:00 AM - 08:00 PM</h1>
                                    </div>
                              </div>
                              <div>
                                    <h1 className='text-orange-400 text-2xl font-semibold'>Company</h1>
                                    <div className='text-white'>
                                          <h1 className='mt-3'>About us</h1>
                                          <h1>Contact us</h1>
                                          <h1>reservation policy</h1>
                                    </div>
                              </div>
                        </div>

                        <div className='flex justify-center mt-9'>
                              <h1 className='text-[12px] text-white'>Developed with ❤️ by <span className='text-orange-400'><NavLink to='developer-Profile'>Hemant Kumar</NavLink></span></h1>
                        </div>
                  </div>
            </div>
      )
}

export default Footer