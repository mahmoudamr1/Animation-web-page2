import './Galeery.css'
import React from 'react'
import gallery1 from "./imgs/gallery-01.png";
import gallery2 from "./imgs/gallery-02.png";
import gallery3 from "./imgs/gallery-03.jpg";
import gallery4 from "./imgs/gallery-04.png";
import gallery5 from "./imgs/gallery-05.jpg";
import gallery6 from "./imgs/gallery-06.png";
import Title from "./Title";


const Gallery = () => {
    return (
        <>
            <div className='allagllery ' id='gallery'>
                <div className='spikes'></div>
                <Title title={ 'GALLERY' } />

                <div className='gallery container'>
                    <div className='galleryimg'>
                        <img src={ gallery1 } />
                    </div>
                    <div className='galleryimg'>
                        <img src={ gallery2 } />
                    </div>
                    <div className='galleryimg'>
                        <img src={ gallery3 } />
                    </div>
                    <div className='galleryimg'>
                        <img src={ gallery4 } />
                    </div>
                    <div className='galleryimg'>
                        <img src={ gallery5 } />
                    </div>
                    <div className='galleryimg'>
                        <img src={ gallery6 } />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Gallery
