import React from 'react'
import Image from 'next/image'


import Section from '../templates/Section'
import Button from '../templates/Button'

import AboutImg from "../../images/about.jpg"

const FinalAbout = () => {
  return (
    <div className='about-div'>
    <Image 
    src={AboutImg}
    alt='Image of hotel host greeting a customer'
    height={450}
    width={450}
    />


      <Section idDesc='about-desc' idH2='about-h2' idHeader='about-header' className='About-text-div' section='About Us' header='The Best Holidays Start Here!' desc='With a focus on quality accommodations, personalized experiences, and seamless booking, our platform is dedicated to ensuring that every traveler embarks on their dream holiday with confidence and excitement.'>
        <Button text='Read More' />
      </Section>
    </div>
  )
}

export default FinalAbout
