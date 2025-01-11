import React, { useState } from 'react'

const CustomerCard = ({name,image,description}) => {

      return (
            <div className='flex'>
                  <div className='flex flex-col bg-orange-400 w-[17rem] h-[12rem] gap-2 p-4 rounded-md'>
                        <div>
                              <img className='h-12 w-12 object-cover bg-white' src={image} alt="" />
                              <h1 className='font-semibold text-2xl mt-5'>{name}</h1>
                              <p className='text-sm mt-1'> {description} </p>
                        </div>
                  </div>
            </div>
      )
}

export default CustomerCard