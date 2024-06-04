import React from 'react'

const Button = ( {styles} ) => {
  return (
    <div type='button' className={`py-4 px-6 bg-blue-gradient front-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px] cursor-pointer`}>
      Get Started
    </div>
  )
}

export default Button