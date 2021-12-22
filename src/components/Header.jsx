import React from 'react'
import Typed from 'react-typed'
import sekil from '../wall-and-laptop-background.jpg'

const Header = () => {
    return (
        <div className='header-wrapper'>
            <div className="main-info">
                <h1>Web development and website services</h1>
                <Typed 
                className='typed-text'
                strings={[
                    'Komputer üzrə biliklərinizi bizimlə təkmilləşdirin'
                    ]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop >
                </Typed>
                <a href ={sekil} className='downloadcv'>Download CV</a>
            </div>
            
        </div>
    )
}

export default Header
