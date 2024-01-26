import React, { ReactNode } from 'react'

type ServiceImageProps = {
    children: ReactNode
}

const ServiceImage: React.FC<ServiceImageProps> = ({ children }) => {
    return (
        <section className='service-img'>
            {children}
        </section>
    )
}

export default ServiceImage
