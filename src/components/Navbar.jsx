import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useData } from './Datacontext';

export const Navbar = ({data}) => {

      const {cart} = useData()

      const navigate = useNavigate();

      const GoBackHandler = () => {
              navigate("/cart");
      }

      return (
            <div className='w-full h-auto p-7 flex justify-between items-center  text-white bg-[#28282B]'>
                  <div className='font-bold text-3xl text-orange-500'>Restro</div>
                  <div >
                        <nav className='flex gap-10 font-semibold text-xl '>
                              <NavLink style={(event) => {
                              return {
                                    color: event.isActive ? "Orange" :"" ,
                                    fontWeight: event.isActive ? "bold" :""
                              }}} to="/home" className={"hover:text-orange-400"}>Home</NavLink>
                              <NavLink style={(event) => {
                              return {
                                    color: event.isActive ? "Orange" :"" ,
                                    fontWeight: event.isActive ? "bold" :""
                              }}} to="/about" className={"hover:text-orange-400"}>About</NavLink>
                              <NavLink style={(event) => {
                              return {
                                    color: event.isActive ? "Orange" :"" ,
                                    fontWeight: event.isActive ? "bold" :""
                              }}} to="/Order-History" className={"hover:text-orange-400"}>Order History </NavLink>
                              <NavLink style={(event) => {
                              return {
                                    color: event.isActive ? "Orange" :"" ,
                                    fontWeight: event.isActive ? "bold" :""
                              }}} to="/menu" className={"hover:text-orange-400"}>Menu</NavLink>
                        </nav>
                  </div>
                  
                  <div className='flex items-center gap-5'>
                        <button onClick={ GoBackHandler} className='flex text-orange-500 text-2xl'> 
                              <AiOutlineShoppingCart className='relative' /> 
                              <span className=' text-xs bg-orange-400 text-white px-1 rounded-full'>{cart.length} </span>
                        </button>
                        <button className='px-3 py-1 bg-orange-400 rounded text-white'>Admin</button>
                  </div>
            </div>
      )
}

// {data.filter(item => item.addSong).length}