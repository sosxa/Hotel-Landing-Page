import React from 'react'
import NavBar from './NavBar'
import Logo from "./Logo"
import Button from '../templates/Button'

const Header = () => {
  return (
    <div className='header'>
      <Logo />
      <NavBar />
      <Button id='header-btn' text='Book Now' />
    </div>
  )
}

export default Header
