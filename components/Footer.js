import React from 'react'

const Footer = () => {
  const currYear=new Date().getFullYear()
  return (
    <footer className='bg-gray-900 text-white flex items-center justify-center h-14 px-2 text-center'>
      <p>CopyRight &copy; {currYear} Get me a chai - All rights reserved</p>
    </footer>
  )
}

export default Footer