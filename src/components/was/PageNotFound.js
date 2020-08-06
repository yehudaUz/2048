import React from 'react';
import Header from './Header'
const Video = () => {
    const path = "https://thumbs.gfycat.com/WateryAdorableCrow-mobile.mp4"
    return (
        <video className='video-tag-404' autoPlay loop muted>
            <source src={path} type='video/mp4' />
        </video>
    )
}

const PageNotFound = () => {
    return (
        <>
            <Header />
            <Video />
        </>
    )
}

export default PageNotFound;
