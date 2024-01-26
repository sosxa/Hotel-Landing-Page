import React, { ReactNode } from 'react'

type SectionProps = {
    section?: string,
    header?: string,
    desc?: string
    children?: ReactNode,
    className? : string,
    idHeader? : string, 
    idDesc? : string, 
    idH2? : string, 
}

const Section: React.FC<SectionProps> = ({ className , section, header, desc, children, idHeader, idDesc, idH2 }) => {
    return (

        // <hr style={{ float: "left", width: "80%", color: "#bc1c5c;" }} /> 

        <div className={className}>
            <p id={idHeader}  style={{color : "black" }}>{section}</p>
            <h2 id={idH2} style={{color : "black"}} ><br />  {header}</h2>
            <p id={idDesc} style={{color : "black"}} ><br />{desc}</p>
            {children}
        </div>
    )
}

export default Section
