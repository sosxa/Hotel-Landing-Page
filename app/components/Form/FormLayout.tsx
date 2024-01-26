import React, { ReactNode } from 'react'

type FormLayoutProps = {
    children: ReactNode
}

const FormLayout: React.FC<FormLayoutProps> = ({ children }) => {
    return (
        <div className='form-div'>
        <form action={"/"} className='BookingForm'>
            {children}
        </form>
        </div>
    ) 
}

export default FormLayout
