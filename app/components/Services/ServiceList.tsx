import React from 'react'
import Section from '../templates/Section'

import ShieldStarFillIcon from 'remixicon-react/ShieldStarFillIcon';
import Map2FillIcon from 'remixicon-react/Map2FillIcon';
import CustomerServiceLineIcon from 'remixicon-react/CustomerServiceLineIcon';
import Timer2FillIcon from 'remixicon-react/Timer2FillIcon';

const ServiceList = () => {
  return (
    <div className='service-text-div'>
      <Section
        section='SERVICES'
        header='Strive Only For The Best.'
        idH2='service-h2'
        idHeader='service-header'
        className='services-text'
      />

      <ul className='services-benefits-ul'>
        <li id='service-text'>
          <span><ShieldStarFillIcon  color='skyblue' className='mr-3 bg-blue-400 rounded-lg size-12' /></span>
        High Class Security
        </li>
        <li id='service-text'>
        <span><Timer2FillIcon color='pink' className='mr-3 bg-pink-400 rounded-lg size-12' /></span>
          24 Hours Room Service</li>
        <li id='service-text'>
        <span><CustomerServiceLineIcon  color='purple' className='mr-3 bg-purple-400 rounded-lg size-12' /></span>
          Conference Room</li>
        <li id='service-text'>
        <span><Map2FillIcon color='yellow' className='mr-3 bg-orange-400 rounded-lg size-12' /></span>
          Tourist Guide Support</li>
      </ul>
    </div>
  )
}

export default ServiceList
