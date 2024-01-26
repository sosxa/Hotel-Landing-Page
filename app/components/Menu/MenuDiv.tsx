import React from 'react'
import Button from '../templates/Button'


const MenuDiv = () => {
  return (
    <div className='menuInfoDiv'>
        <div className="menu-text">
        <p className='menu-p'>6th June 2024</p>
        <h4 className='menu-h4'>A New Menu Is Available In Our Hotel.</h4>
        <Button
        text='Continue'
        id='menu-btn'
        />
        </div>
    </div>
  )
}

export default MenuDiv
