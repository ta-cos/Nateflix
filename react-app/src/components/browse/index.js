import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getVideos } from '../../store/videos'
import Carousel from '../Carousel/carousel';
import './index.css'

const Browse = () => {

    const dispatch = useDispatch();
    const profileId = useParams();


    useEffect(async () => {
        await dispatch(getVideos())
    }, [])

    const videos = Object.values(useSelector(state => state.videos));
    const catagories = ['Comedy', 'Action', 'Drama', 'Romance']

    const comedyVids = videos?.filter(vid => vid.category === 'Comedy')
    const dramaVids = videos?.filter(vid => vid.category === 'Drama')
    const romanceVids = videos?.filter(vid => vid.category === 'Romance')
    const actionVids = videos?.filter(vid => vid.category === 'Action')

    console.log(comedyVids)

    return (
        <div className='browse-container'>
            
            <h2>Comedy</h2>
            <Carousel props={comedyVids} />
            <h2>Drama</h2>
            <Carousel props={dramaVids} />
            <h2>Romance</h2>
            <Carousel props={romanceVids} />
            <h2>Action</h2>
            <Carousel props={actionVids} />
        </div>

    )
}

export default Browse
