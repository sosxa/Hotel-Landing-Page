import React from 'react'
import Image from 'next/image'


import Section from '../templates/Section'
import RoomDiv from '../templates/RoomDiv'

import Room1 from "../../images/room-1.jpg"
import Room2 from "../../images/room-2.jpg"
import Room3 from "../../images/room-3.jpg"


const FinalRooms = () => {
    return (
        <div className='all-rooms-div'>
            <Section className='room-text-div' idHeader='room-header' idH2='room-h2' section='OUR ROOMS' header='The Most Memorable Rest Time Starts Here.'>




                <div className='room-one-div'>

                    <div className='each-room'>
                        <RoomDiv roomDescId='roomDescId' roomNameId='roomNameId' roomStartId='roomStartId' roomDesc='Bask in luxury with breathtaking ocean views from your private suite.'
                            roomName='Deluxe Ocean View'
                            roomStartPrice='Starting at ' cost='$299/night'>
                            <Image
                                alt="Image of Deluxe Ocean View Hotel Room"
                                src={Room1}
                                width={368}
                                height={245.33}
                                className='room-img'
                            />
                        </RoomDiv>
                    </div>


                    <div className='each-room'>
                        <RoomDiv roomDescId='roomDescId' roomNameId='roomNameId' roomStartId='roomStartId' roomDesc='Experience urban elegance and modern comfort in the heart of the city.'
                            roomName='Executive Cityscape Room'
                            roomStartPrice="Starting from " cost='$199/night'>
                            <Image
                                alt="Image of Deluxe Ocean View Hotel Room"
                                src={Room2}
                                width={368}
                                height={245.33}
                                className='room-img'
                            />
                        </RoomDiv>
                    </div>


                    <div className='each-room'>
                        <RoomDiv roomDescId='roomDescId' roomNameId='roomNameId' roomStartId='roomStartId' roomDesc='Spacious and inviting, perfect for creating cherished memories with loved ones.'
                            roomName='Family Garden Retreat'
                            roomStartPrice='Starting from' cost='$249/night'>
                            <Image
                                alt="Image of Deluxe Ocean View Hotel Room"
                                src={Room3}
                                width={368}
                                height={245.33}
                                className='room-img'
                            />
                        </RoomDiv>
                    </div>

                </div>








            </Section>
        </div>
    )
}

export default FinalRooms
