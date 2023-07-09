import './HowWork.css'

import React from 'react'
import Title from './Title'

const HowWork = () => {
    return (
        <>
            <div className="work-steps" id="work-steps">
                <Title title={ 'HOW IT WORKS ?' } />
                <div className="container">
                    <img src="imgs/work-steps.png" alt="" className="image" />
                    <div className="info">
                        <div className="box">
                            <img src="imgs/work-steps-1.png" alt="" />
                            <div className="text">
                                <h3>Business Analysis</h3>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim nesciunt obcaecati quisquam quis laborum
                                    recusandae debitis vel
                                </p>
                            </div>
                        </div>
                        <div className="box">
                            <img src="imgs/work-steps-2.png" alt="" />
                            <div className="text">
                                <h3>Architecture</h3>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim nesciunt obcaecati quisquam quis laborum
                                    recusandae debitis vel
                                </p>
                            </div>
                        </div>
                        <div className="box">
                            <img src="imgs/work-steps-3.png" alt="" />
                            <div className="text">
                                <h3>Developement</h3>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim nesciunt obcaecati quisquam quis laborum
                                    recusandae debitis vel
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HowWork
