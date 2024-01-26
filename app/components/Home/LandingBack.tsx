import React, { ReactNode } from 'react'

type SectionProps = {
    children: ReactNode
}

const LandingBack: React.FC<SectionProps> = ({children}) => {
  return (
    <section className='LandingImg'>
        <div className='HeaderText'>
        {children}
        </div>
    </section>
  )
}

export default LandingBack
