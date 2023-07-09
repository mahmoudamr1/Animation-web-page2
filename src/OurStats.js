import './Ourstats.css'

import React from 'react'
import Title from './Title'

const OurStats = () => {
    return (
        <>
            <div className="stats" id="stats">
                <Title title={ 'Our Awesome Stats' } />
                <div className="container">
                    <div className="box">
                        <i className="far fa-user fa-2x fa-fw"></i>
                        <span className="number" data-goal="150">150</span>
                        <span className="text">Clients</span>
                    </div>
                    <div className="box">
                        <i className="fas fa-code fa-2x fa-fw"></i>
                        <span className="number" data-goal="135">135</span>
                        <span className="text">Projects</span>
                    </div>
                    <div className="box">
                        <i className="fas fa-globe-asia fa-2x fa-fw"></i>
                        <span className="number" data-goal="50">50</span>
                        <span className="text">Countries</span>
                    </div>
                    <div className="box">
                        <i className="far fa-money-bill-alt fa-2x fa-fw"></i>
                        <span className="number" data-goal="500">500</span>
                        <span className="text">Money</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurStats
