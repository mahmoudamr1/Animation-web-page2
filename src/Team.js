import './Team.css'
import Title from "./Title";
import React from 'react'
import TeamImg1 from "./imgs/team-01.jpg";
import TeamImg2 from "./imgs/team-02.jpg";
import TeamImg3 from "./imgs/team-03.jpg";
import TeamImg4 from "./imgs/team-04.jpg";
import TeamImg5 from "./imgs/team-05.png";
import TeamImg6 from "./imgs/team-06.png";
import TeamImg7 from "./imgs/team-07.jpg";
import TeamImg8 from "./imgs/team-08.jpg";


const Team = () => {
    return (
        <>
            <div className="team" id="team">
                <Title title={ "Team Members" } />
                <div className="container">
                    <div className="box">
                        <div className="data">
                            <img src={ TeamImg1 } alt="" />
                            <div className="social">
                                <a href="#">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="#">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                                <a href="#">
                                    <i className="fab fa-youtube"></i>
                                </a>
                            </div>
                        </div>
                        <div className="info">
                            <h3>Name</h3>
                            <p>Simple Short Description</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="data">
                            <img src={ TeamImg2 } alt="" />
                            <div className="social">
                                <a href="#">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="#">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                                <a href="#">
                                    <i className="fab fa-youtube"></i>
                                </a>
                            </div>
                        </div>
                        <div className="info">
                            <h3>Name</h3>
                            <p>Simple Short Description</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="data">
                            <img src={ TeamImg3 } alt="" />
                            <div className="social">
                                <a href="#">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="#">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                                <a href="#">
                                    <i className="fab fa-youtube"></i>
                                </a>
                            </div>
                        </div>
                        <div className="info">
                            <h3>Name</h3>
                            <p>Simple Short Description</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="data">
                            <img src={ TeamImg4 } alt="" />
                            <div className="social">
                                <a href="#">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="#">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                                <a href="#">
                                    <i className="fab fa-youtube"></i>
                                </a>
                            </div>
                        </div>
                        <div className="info">
                            <h3>Name</h3>
                            <p>Simple Short Description</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="data">
                            <img src={ TeamImg5 } alt="" />
                            <div className="social">
                                <a href="#">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="#">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                                <a href="#">
                                    <i className="fab fa-youtube"></i>
                                </a>
                            </div>
                        </div>
                        <div className="info">
                            <h3>Name</h3>
                            <p>Simple Short Description</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="data">
                            <img src={ TeamImg6 } alt="" />
                            <div className="social">
                                <a href="#">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="#">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                                <a href="#">
                                    <i className="fab fa-youtube"></i>
                                </a>
                            </div>
                        </div>
                        <div className="info">
                            <h3>Name</h3>
                            <p>Simple Short Description</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="data">
                            <img src={ TeamImg7 } alt="" />
                            <div className="social">
                                <a href="#">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="#">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                                <a href="#">
                                    <i className="fab fa-youtube"></i>
                                </a>
                            </div>
                        </div>
                        <div className="info">
                            <h3>Name</h3>
                            <p>Simple Short Description</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="data">
                            <img src={ TeamImg8 } alt="" />
                            <div className="social">
                                <a href="#">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="#">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                                <a href="#">
                                    <i className="fab fa-youtube"></i>
                                </a>
                            </div>
                        </div>
                        <div className="info">
                            <h3>Name</h3>
                            <p>Simple Short Description</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="spikes"></div>
        </>
    )
}

export default Team
