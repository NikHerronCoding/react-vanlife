import React from 'react'

export default function Banner({link}) {
    return (
        <div className='banner'>

            <h1 className="banner-title">You got the travel plans, we got the travel vans.</h1>

            <p className="banner-text">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>

            <button className="banner-button">{link}</button>

        </div>)

}