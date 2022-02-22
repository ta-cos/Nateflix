import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadMyList } from '../../store/myList';
import { getVideos } from '../../store/videos'
import Carousel from '../Carousel/carousel';
import './index.css'

const Browse = () => {

    const dispatch = useDispatch();
    const profileId = useParams();

    useEffect(async () => {
        await dispatch(loadMyList(profileId.profileId))
    }, [])

    useEffect(async () => {
        await dispatch(getVideos())
    }, [])

    const myList = Object.values(useSelector(state => state?.listReducer))


    const videos = Object.values(useSelector(state => state.videos));
    const comedyVids = videos?.filter(vid => vid.category === 'Comedy')
    const dramaVids = videos?.filter(vid => vid.category === 'Drama')
    const romanceVids = videos?.filter(vid => vid.category === 'Romance')
    const actionVids = videos?.filter(vid => vid.category === 'Action')
    const myVids = myList?.map(item => (item.video_id))
    const listVids = videos?.filter(vid => myVids.includes(vid.id))

    console.log(listVids)


    return (
        <div className='browse-container'>
            {myList.length > 0 &&
                <>
                    <h2>My List</h2>
                    <Carousel props={listVids} />
                </>
            }
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
