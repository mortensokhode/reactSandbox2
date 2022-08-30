import React from 'react';
import ToplineSideHeading from './ToplineSideHeading';

import { Link } from 'react-router-dom'

function TopLine() {
    return (
        <>
            <div className='topline-sticky topline-box'>
                <div className='topline-content-box left-side-box'>
                    <Link className='topIconLink' to="/"><ToplineSideHeading headingType="textHeading" headingSide="left"/></Link>
                </div>

{/* I en annen sammenheng ville jeg ha definert navbar'en som en dynamisk bygget komponent med data fra APIet. 
    Dette for å forhindre problemene som et datadrevet system vil møte når man overstyrer denne dynamikken med statisk styringsinformasjon som nedenfor.
    Her blir det i denne omgang likevel noen snarveier som går på bekostning av faktisk brukskvalitet.
*/}

                <nav className='categoriesBar'>
                    <Link className="navbarLink" to="/#"><h2>Home</h2></Link>
                    <Link className="navbarLink" to="/electronics"><h2>Electronics</h2></Link>
                    <Link className="navbarLink" to="/jewelery"><h2>Jewelery</h2></Link>
                    <Link className="navbarLink" to="/mensclothes"><h2>Men's clothes</h2></Link>
                    <Link className="navbarLink" to="/womensclothes"><h2>Women's clothes</h2></Link>
                    <Link className="navbarLink" to="/about"><h2>About Us</h2></Link>
                </nav>

                <div className='topline-content-box right-side-box'>
                    <Link className='topIconLink' to="/"><ToplineSideHeading headingType="iconHeading" headingSide="right" /></Link>
                </div>
            </div>
        </>
    )
}

export default TopLine