import React from 'react'
import Image from 'next/image'

import CompanyLogo from "../../images/logo.png"

const Logo = () => {
  return (
    <div>
      <a href='#home'><Image
      id='company-logo'
      src={CompanyLogo} 
      alt='Company Logo'
      /></a>
    </div>
  )
}

export default Logo
