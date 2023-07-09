import './Testimonials.css'
import React from 'react'
import Title from './Title'
import TestimonialsImg1 from './imgs/avatar-01.png'
import TestimonialsImg2 from './imgs/avatar-02.png'
import TestimonialsImg3 from './imgs/avatar-03.png'
import TestimonialsImg4 from './imgs/avatar-04.png'
import TestimonialsImg5 from './imgs/avatar-05.png'
import TestimonialsImg6 from './imgs/avatar-06.png'


const Testimonials = () => {
    return (
        <>
            <div class="testimonials" id="testimonials">
                <Title title={ 'TESTIMONIALS ' } />
                <div class="container">
                    <div class="box">
                        <img src={ TestimonialsImg1 } alt="" />
                        <h3>Mohamed Farag</h3>
                        <span class="title">Full Stack Developer</span>
                        <div class="rate">
                            <i class="filled fas fa-star"></i>
                            <i class="filled fas fa-star"></i>
                            <i class="filled fas fa-star"></i>
                            <i class="filled fas fa-star"></i>
                            <i class="far fa-star"></i>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus
                            quaerat ducimus
                        </p>
                    </div>
                    <div class="box">
                        <img src={ TestimonialsImg2 } alt="" />
                        <h3>Mohamed Ibrahim</h3>
                        <span class="title">Full Stack Developer</span>
                        <div class="rate">
                            <i class="filled fas fa-star"></i>
                            <i class="filled fas fa-star"></i>
                            <i class="filled fas fa-star"></i>
                            <i class="filled fas fa-star"></i>
                            <i class="far fa-star"></i>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus
                            quaerat ducimus
                        </p>
                    </div>
                    <div class="box">
                        <img src={ TestimonialsImg3 } alt="" />
                        <h3>Shady Nabil</h3>
                        <span class="title">Full Stack Developer</span>
                        <div class="rate">
                            <i class="filled fas fa-star"></i>
                            <i class="filled fas fa-star"></i>
                            <i class="filled fas fa-star"></i>
                            <i class="filled fas fa-star"></i>
                            <i class="far fa-star"></i>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus
                            quaerat ducimus
                        </p>
                    </div>
                    <div class="box">
                        <img src={ TestimonialsImg4 } alt="" />
                        <h3>Amr Hendawy</h3>
                        <span class="title">Full Stack Developer</span>
                        <div class="rate">
                            <i class="filled fas fa-star"></i>
                            <i class="filled fas fa-star"></i>
                            <i class="filled fas fa-star"></i>
                            <i class="filled fas fa-star"></i>
                            <i class="filled fas fa-star"></i>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus
                            quaerat ducimus
                        </p>
                    </div>
                    <div class="box">
                        <img src={ TestimonialsImg5 } alt="" />
                        <h3>Sherief Ashraf</h3>
                        <span class="title">Full Stack Developer</span>
                        <div class="rate">
                            <i class="filled fas fa-star"></i>
                            <i class="filled fas fa-star"></i>
                            <i class="filled fas fa-star"></i>
                            <i class="far fa-star"></i>
                            <i class="far fa-star"></i>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus
                            quaerat ducimus
                        </p>
                    </div>
                    <div class="box">
                        <img src={ TestimonialsImg6 } alt="" />
                        <h3>Osama Mohamed</h3>
                        <span class="title">Full Stack Developer</span>
                        <div class="rate">
                            <i class="filled fas fa-star"></i>
                            <i class="filled fas fa-star"></i>
                            <i class="filled fas fa-star"></i>
                            <i class="far fa-star"></i>
                            <i class="far fa-star"></i>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus
                            quaerat ducimus
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonials
