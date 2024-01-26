import React, {ReactNode} from 'react'

import Button from './Button'

type RoomProps = {
    children: ReactNode,
    roomName: string, 
    roomDesc : string, 
    roomStartPrice : string,
    roomNameId? : string , 
    roomDescId? : string, 
    roomStartId? : string
    cost?: string
}

const RoomDiv: React.FC<RoomProps> = ({children, cost, roomStartId, roomDescId,roomNameId, roomDesc, roomName, roomStartPrice}) => {
  return (
    <>
     {children}
     <h4 id={roomNameId}>{roomName}</h4>
     <p id={roomDescId}>{roomDesc}</p>
     <h5 id={roomStartId}>{roomStartPrice} <span style={{fontWeight: "bold", color: "black"}}>{cost}</span></h5>
     <Button text={"Book Now"}/>
     </>
  )
}

export default RoomDiv
