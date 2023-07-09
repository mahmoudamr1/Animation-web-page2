import './OurSkills.css'

import React from 'react'
import Title from './Title'
import ProgressBar from 'react-bootstrap/ProgressBar';
import ourSkillimg from './imgs/skills.png'

const Ourskills = () => {
    return (
        <>
            <div className="our-skills" id="our-skills">
                <Title title={ 'OUR SKILLS' } />
                <div className="container">
                    <img src={ ourSkillimg } alt="" />
                    <div className="skills">
                        <div className="skill">
                            <h3>HTML <span>80%</span></h3>
                            <div className="the-progress">
                                <ProgressBar animated now={ 80 } />
                                {/* <span style={ { width: '80%' } } data-width="80%"></span> */ }
                            </div>
                        </div>
                        <div className="skill">
                            <h3>CSS <span>85%</span></h3>
                            <div className="the-progress">
                                <ProgressBar animated now={ 85 } />
                                {/* <span style={ { width: '85%' } } data-width="85%"></span> */ }
                            </div>
                        </div>
                        <div className="skill">
                            <h3>JavaScript <span>70%</span></h3>
                            <div className="the-progress">
                                <ProgressBar animated now={ 70 } />
                            </div>
                        </div>
                        <div className="skill">
                            <h3>Python <span>80%</span></h3>
                            <div className="the-progress">
                                <ProgressBar animated now={ 80 } />
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Ourskills
