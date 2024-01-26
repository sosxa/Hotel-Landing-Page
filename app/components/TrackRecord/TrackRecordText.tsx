import React, { ReactNode } from 'react'

type TrackRecordProps = {
    // children: ReactNode
    desc: string,
    number: string,
    numberid?: string,
    descid?: string,
    className?: string
}

const TrackRecordText: React.FC<TrackRecordProps> = ({ number, desc, numberid, descid, className }) => {
    return (
        <div className={className}>
            <h4 id={numberid}>{number}</h4>
            <p id={descid}>{desc}</p>
        </div>
    )
}

export default TrackRecordText
