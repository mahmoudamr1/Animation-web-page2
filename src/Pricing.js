import './Pricing.css'

import React from 'react'
import Title from './Title'

const Pricing = () => {
    return (
        <>
            <div className="pricing" id="pricing">
                <div className="dots dots-up"></div>
                <div className="dots dots-down"></div>
                <Title title={ 'PRICING PLANS' } />
                <div className="container">
                    <div className="box">
                        <div className="title">Basic</div>
                        <img src="imgs/hosting-basic.png" alt="" />
                        <div className="price">
                            <span className="amount">$15</span>
                            <span className="time">Per Month</span>
                        </div>
                        <ul>
                            <li><i class="fa-solid fa-check"></i>10GB HDD Space</li>
                            <li><i class="fa-solid fa-check"></i>5 Email Addresses</li>
                            <li><i class="fa-solid fa-check"></i>2 Subdomains</li>
                            <li><i class="fa-solid fa-check"></i>4 Databases</li>
                            <li><i class="fa-solid fa-check"></i>Basic Support</li>
                        </ul>
                        <a href="#">Choose Plan</a>
                    </div>
                    <div className="box popular">
                        <div className="label">Most Popular</div>
                        <div className="title">Advanced</div>
                        <img src="imgs/hosting-advanced.png" alt="" />
                        <div className="price">
                            <span className="amount">$25</span>
                            <span className="time">Per Month</span>
                        </div>
                        <ul>
                            <li><i class="fa-solid fa-check"></i>20GB HDD Space</li>
                            <li><i class="fa-solid fa-check"></i>10 Email Addresses</li>
                            <li><i class="fa-solid fa-check"></i>5 Subdomains</li>
                            <li><i class="fa-solid fa-check"></i>8 Databases</li>
                            <li><i class="fa-solid fa-check"></i>Advanced Support</li>
                        </ul>
                        <a href="#">Choose Plan</a>
                    </div>
                    <div className="box">
                        <div className="title">Professional</div>
                        <img src="imgs/hosting-professional.png" alt="" />
                        <div className="price">
                            <span className="amount">$45</span>
                            <span className="time">Per Month</span>
                        </div>
                        <ul>
                            <li><i class="fa-solid fa-check"></i>50GB HDD Space</li>
                            <li><i class="fa-solid fa-check"></i>20 Email Addresses</li>
                            <li><i class="fa-solid fa-check"></i>10 Subdomains</li>
                            <li><i class="fa-solid fa-check"></i>20 Databases</li>
                            <li><i class="fa-solid fa-check"></i>Professional Support</li>
                        </ul>
                        <a href="#">Choose Plan</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pricing

