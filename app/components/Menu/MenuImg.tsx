import React , {ReactNode} from 'react'
import Section from '../templates/Section'


type MenuImgProps = { 
    children : ReactNode
}

const MenuImg: React.FC <MenuImgProps> = ({children}) => {
  return (
    <>
    <Section
    section='EXPLORE'
    header="What's New Today"
    className='exploreDiv'
    idHeader='menu-header'
    idH2='menu-h2'    />
    <section className='HotelMenuImg'>
      {children}    
      </section>
      </>
  )
}

export default MenuImg
