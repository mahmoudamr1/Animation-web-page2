import React from 'react'
import './AllCards.css'
import Cards from './Cards'
import Title from './Title'
import imglink1 from "./imgs/cat-01.jpg";
import imglink2 from "./imgs/cat-02.jpg";
import imglink3 from "./imgs/cat-03.jpg";
import imglink4 from "./imgs/cat-04.jpg";
import imglink5 from "./imgs/cat-05.jpg";
import imglink6 from "./imgs/cat-06.jpg";
import imglink7 from "./imgs/cat-07.jpg";
import imglink8 from "./imgs/cat-08.jpg";


const AllCards = () => {
    return (
        <>
            <div className='pt-10 container' id='articles'>
                <Title title={ "Articles" } />
                <div className='allcards1'>
                    <Cards imglink={ imglink1 } />

                    <Cards imglink={ imglink2 } />

                    <Cards imglink={ imglink3 } />

                    <Cards imglink={ imglink4 } />

                    <Cards imglink={ imglink5 } />

                    <Cards imglink={ imglink6 } />

                    <Cards imglink={ imglink7 } />

                    <Cards imglink={ imglink8 } />
                </div>
            </div>
        </>
    )
}

export default AllCards
