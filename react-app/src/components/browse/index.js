import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getVideos } from '../../store/videos'
import VideoHover from '../videoHover';
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

    console.log(videos)
    console.log(dramaVids)

    return (
        <div>
            <div id='vids-container'>
                <h2>Comedy</h2>
                <div id='vids-comedy'>
                    {comedyVids?.map(video => (
                        <div key={video.name} >
                            <VideoHover video={video} />
                        </div>
                    ))}
                </div>

                <h2>Drama</h2>
                <div id='vids-comedy'>
                    {dramaVids?.map(video => (
                        <div key={video.name} >
                            <VideoHover video={video} />
                        </div>
                    ))}
                </div>

                <h2>Romance</h2>
                <div id='vids-comedy'>
                    {romanceVids?.map(video => (
                        <div key={video.name} >
                            <VideoHover video={video} />
                        </div>
                    ))}
                </div>

                <h2>Action</h2>
                <div id='vids-comedy'>
                    {actionVids?.map(video => (
                        <div key={video.name} >
                            <VideoHover video={video} />
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Browse
