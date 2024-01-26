import React from 'react'
import TrackRecordText from './TrackRecordText'


const TrackRecordFinal = () => {
  return (
    <section className='TrackRecordSection'>
        <div className='TrackRecordDiv'>
            <TrackRecordText 
            number="30+"
            desc="Properties Available"
            descid="descriptionRecordId"
            numberid="numberRecordId"
            className='singleTrackRecord'
            />
            <TrackRecordText 
            number="400+"
            desc="Bookings Completed"
            descid="descriptionRecordId"
            numberid="numberRecordId"
            className='singleTrackRecord'
            />
            <TrackRecordText 
            number="600+"
            desc="Happy Customers"
            descid="descriptionRecordId"
            numberid="numberRecordId"
            className='singleTrackRecord'
            />
        </div>
    </section>
  )
}

export default TrackRecordFinal
