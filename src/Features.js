import './Featurse.css'
import Title from './Title'
import featureCardImage1 from './imgs/features-01.jpg'
import featureCardImage2 from './imgs/features-02.jpg'
import featureCardImage3 from './imgs/features-03.jpg'

import React from 'react'

const Features = () => {
    return (
        <>
            <div className='features mt-10'>
                <Title title={ 'FEATURES' } />
                <div class="container">
                    <div class="box quality">
                        <div class="img-holder"><img src={ featureCardImage1 } alt="" /></div>
                        <h2>Quality</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima</p>
                        <a href="#">More</a>
                    </div>
                    <div class="box time">
                        <div class="img-holder"><img src={ featureCardImage2 } alt="" /></div>
                        <h2>Time</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima</p>
                        <a href="#">More</a>
                    </div>
                    <div class="box passion">
                        <div class="img-holder"><img src={ featureCardImage3 } alt="" /></div>
                        <h2>Passion</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima</p>
                        <a href="#">More</a>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Features
