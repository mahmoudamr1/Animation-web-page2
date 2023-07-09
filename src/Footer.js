import './Footer.css'

import React from 'react'

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="box">
                        <h3>MAHMOUD</h3>
                        <ul className="social">
                            <li>
                                <a href="#" className="facebook">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="twitter">
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="youtube">
                                    <i className="fab fa-youtube"></i>
                                </a>
                            </li>
                        </ul>
                        <p className="text">
                            Lorem ipsum, dolor sit amet <br /> consectetur adipisicing elit. <br /> Temporibus nulla rem, dignissimos  <br />iste aspernatur
                        </p>
                    </div>
                    <div className="box">
                        <ul className="links">
                            <li><a href="#"><i class="fa-regular fa-angles-right"></i>Important Link 1</a></li>
                            <li><a href="#"><i class="fa-regular fa-angles-right"></i>Important Link 2</a></li>
                            <li><a href="#"><i class="fa-regular fa-angles-right"></i>Important Link 3</a></li>
                            <li><a href="#"><i class="fa-regular fa-angles-right"></i>Important Link 4</a></li>
                            <li><a href="#"><i class="fa-regular fa-angles-right"></i>Important Link 5</a></li>
                        </ul>
                    </div>
                    <div className="box">
                        <div className="line">
                            <i className="fas fa-map-marker-alt fa-fw"></i>
                            <div className="info">Egypt, Cairo, Benha </div>
                        </div>
                        <div className="line">
                            <i className="far fa-clock fa-fw"></i>
                            <div className="info">Business Hours: From 10:00 To 18:00</div>
                        </div>
                        <div className="line">
                            <i className="fas fa-phone-volume fa-fw"></i>
                            <div className="info">
                                <span>+201125402033</span>
                                <span></span>
                            </div>
                        </div>
                    </div>

                </div>
                <p className="copyright">Made By MAHMOUD</p>
            </div>

        </>
    )
}

export default Footer
