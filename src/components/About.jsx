import React from 'react'


export default function About({link}) {
    return (
        <div className="about">
            <img className="about-image" src="/photos/camper.png" alt="camper-photo" />
            <h1 className="about-head">
                Don’t squeeze in a sedan when you could relax in a van.
            </h1>

            <p className="about-text">
                        Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                (Hitch costs extra 😉)
            </p>
            <p className="about-text">
                Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
            </p>

            <div className="van-link">

                <h1 className="van-link-text">
                    Your destination is waiting. 
                </h1>

                <h1 className="van-link-text">
                     Your van is ready.
                </h1>

                <button className="about-button">
                    {link}    
                </button>
    
            </div>
        
        </div>
    )
}