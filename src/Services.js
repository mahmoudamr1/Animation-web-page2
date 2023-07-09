import './Services.css'

import React from 'react'
import Title from './Title'

const Services = () => {
    return (
        <>
            <div className="services" id="services">
                <Title title={ 'SERVICES' } />
                <div className="container">
                    <div className="box">
                        <i className="fas fa-user-shield fa-4x"></i>
                        <h3>Security</h3>
                        <div className="info">
                            <a href="#">Details</a>
                        </div>
                    </div>
                    <div className="box">
                        <i className="fas fa-tools fa-4x"></i>
                        <h3>Fixing Issues</h3>
                        <div className="info">
                            <a href="#">Details</a>
                        </div>
                    </div>
                    <div className="box">
                        <i className="fas fa-map-marked-alt fa-4x"></i>
                        <h3>Location</h3>
                        <div className="info">
                            <a href="#">Details</a>
                        </div>
                    </div>
                    <div className="box">
                        <i className="fas fa-laptop-code fa-4x"></i>
                        <h3>Coding</h3>
                        <div className="info">
                            <a href="#">Details</a>
                        </div>
                    </div>
                    <div className="box">
                        <i className="fas fa-palette fa-4x"></i>
                        <h3>Security</h3>
                        <div className="info">
                            <a href="#">Design</a>
                        </div>
                    </div>
                    <div className="box">
                        <i className="fas fa-bullhorn fa-4x"></i>
                        <h3>Marketing</h3>
                        <div className="info">
                            <a href="#">Details</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services
