import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getVideos } from '../../store/videos'
import Rating from '../Ratings';
import './index.css'

const Browse = () => {

    const dispatch = useDispatch();
    const profileId = useParams();


    useEffect(async () => {
        await dispatch(getVideos())
    }, [])

    const videos = Object.values(useSelector(state => state.videos));

    return (
        <div>
            <div id='this-div'>
                <h1>Vids are below</h1>
                {videos?.map(video => (
                    <div key={video.id}>
                        <h1>{video.title}</h1>
                        <h3>{video.vid}</h3>
                        <iframe src={video.vid} frameBorder="1" allowFullScreen />
                        <div id='rating'>
                            <Rating video={video} />
                        </div>
                    </div>
                ))}
            </div>
        </div >
    )
}

export default Browse
