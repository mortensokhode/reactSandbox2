import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';

import ToplineSideHeading from './ToplineSideHeading';

import HeadSKaT from '../pages/HeadSKaT'
import ShowActualPage from './ShowActualPage'
import AboutUsPage from '../pages/AboutUsPage'
import ErrorPage from '../pages/ErrorPage'

function TopLine() {

    return (
        <>
            <div className='topline-sticky topline-box colorSchema'>
                <div className='topline-content-box left-side-box'>
                    <Link className='topIconLink' to="/"><ToplineSideHeading headingType="textHeading" headingSide="left"/></Link>
                </div>

                <nav className='categoriesBar'>
                    <Link className="navbarLink colorSchema" to="/"><h2>Home</h2></Link>
                    <Link className="navbarLink colorSchema" to="/electronics"><h2>Electronics</h2></Link>
                    <Link className="navbarLink colorSchema" to="/jewelery"><h2>Jewelery</h2></Link>
                    <Link className="navbarLink colorSchema" to="/mensclothes"><h2>Men's clothes</h2></Link>
                    <Link className="navbarLink colorSchema" to="/womensclothes"><h2>Women's clothes</h2></Link>
                    <Link className="navbarLink colorSchema" to="/about"><h2>About Us</h2></Link>
                </nav>

                <div className='topline-content-box right-side-box'>
                    <Link className='topIconLink' to="/"><ToplineSideHeading headingType="iconHeading" headingSide="right" /></Link>
                </div>
                
            </div>

            <div className="routesList">
                <Routes>
                    <Route exact path='/' element={<HeadSKaT />}></Route>
                    <Route path='/about' element={<AboutUsPage />}></Route>
                    <Route path='/electronics' element={<ShowActualPage productLine={"electronics"} />}></Route>
                    <Route path='/jewelery' element={<ShowActualPage productLine={"jewelery"} />}></Route>
                    <Route path='/mensclothes' element={<ShowActualPage productLine={"men's clothing"} />}></Route>
                    <Route path='/womensclothes' element={<ShowActualPage productLine={"women's clothing"} />}></Route>
                    <Route path='*' element={<ErrorPage />}></Route>
                </Routes>
            </div>


        </>
    )
}

export default TopLine