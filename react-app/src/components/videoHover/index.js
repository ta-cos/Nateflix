import { useEffect, useState } from 'react'
import Rating from '../Ratings';
import ListMangement from '../ListManagement';

const VideoHover = ({ video, profileId }) => {

    const [showRating, setShowRating] = useState(false);

    return (
        <div className='item'>
            <div
                key={video.id}
                onMouseEnter={() => setShowRating(true)}
                onMouseLeave={() => setShowRating(false)}
            >
                <iframe loading='lazy' width='100%' src={video.vid} frameBorder="0" allowFullScreen />
                <div style={{ opacity: showRating ? 1 : 0 }}>
                    <ListMangement video={video} profileId={profileId} />
                    <div id='rating'>
                        <Rating profileId={profileId} video={video} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoHover
