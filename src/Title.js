import './Title.css'
import React from 'react'

const Title = ( props ) => {
    return (
        <>
            <div className='main-title'>
                <h2>{ props.title }</h2>
            </div>
        </>
    )
}

export default Title
