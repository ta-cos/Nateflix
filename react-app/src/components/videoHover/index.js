import { useEffect, useState } from 'react'
import Rating from '../Ratings';
import ListMangement from '../ListManagement';

const VideoHover = ({ video }) => {

    const [showRating, setShowRating] = useState(false);

    useEffect(() => {
        console.log(showRating)
    }, [showRating])

    return (
        <div className='item'>
            <div
                key={video.id}
                onMouseEnter={() => setShowRating(true)}
                onMouseLeave={() => setShowRating(false)}
            >
                <iframe loading='lazy' width='100%' src={video.vid} frameBorder="0" allowFullScreen />
                <div style={{ opacity: showRating ? 1 : 0 }}>
                    <ListMangement video={video} />
                    <div id='rating'>
                        <Rating video={video} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoHover
