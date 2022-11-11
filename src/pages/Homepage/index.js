import './style.css'
import React, { useState } from 'react'
import img1 from '../../assets/imgs/img1.webp'
import { Link } from 'react-router-dom'

export const HomePage = () => {
    const [index, setIndex] = useState(0)

    const [shake, setShake] = useState(false);
    
    const animate = () => {
        
        // Button begins to shake
        setShake(true);
        
        // Buttons stops to shake after 2 seconds
        setTimeout(() => setShake(false), 2000);
        
    }

    const handleClick = () => {
        if (index === 0) {
            setIndex(1)
        }
        else setIndex(0)
    }


    return (
        <div className='home-wrapper'>
            <div className="home-header">
                <div className="home-header-carousel container">
                    {
                        index === 0 ? 
                        <div className="home-banner">
                            <div className='home-banner__content'>
                                <h1>Tea Holic</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                                </p>
                                <Link to={"/shop"}>
                                    <button className='home-banner__btn' onClick={handleClick}>
                                        Khám phá ngay
                                    </button>
                                </Link>
                            </div>
                            <div className='home-banner__img' >
                                <img src={img1}/>
                            </div>
                        </div> : 
                        <div className="home-banner-1">
                            <div className='home-banner__content'>
                                <h1>Coffe Holic</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                                </p>
                                <button className='home-banner__btn' onClick={handleClick}>
                                    Khám phá ngay
                                </button>
                            </div>
                            <div className='home-banner__img' >
                                <img src={img1}/>
                            </div>
                        </div>
                    }


                </div>

            </div>
                    <button onClick = {animate} className = {shake ? `shake` : null}>Click me</button>

            <button onClick={handleClick}>pre</button>
            <button onClick={handleClick}>next</button>
        </div>
    )
}