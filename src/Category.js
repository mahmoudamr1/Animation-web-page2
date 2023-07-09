import { Container } from 'react-bootstrap'
import './Category.css'
import img1 from './imgs/landing-image.png'
import React from 'react'


const Category = () => {
    return (
        <>


            <div className='landing '>
                <div className='container'>
                    <div className='firsttitle '>
                        <h1>Welcome, To My World</h1>
                        <p >  Here Iam gonna share everything about my life. Books Iam reading, Games Iam Playing, Stories and Events</p>
                    </div>
                    <div className='firstimage'>
                        <img src={ img1 } />
                    </div>
                </div >
            </div>

            <a href="#articles" className="go-down">
                <i class="fas fa-angle-double-down fa-2x"></i>
            </a>

        </>
    )
}

export default Category
