import { useEffect, useState } from 'react'
import Rating from '../Ratings';

const VideoHover = ({ video }) => {

    const [showRating, setShowRating] = useState(false);

    return (
        <div className='item'>
            <div
                key={video.id}
                onMouseEnter={() => setShowRating(true)}
                onMouseLeave={() => setShowRating(false)}
            >
                <iframe width='100%' src={video.vid} frameBorder="0" allowFullScreen />
                {showRating &&
                    <div className='sub-menu'>
                        {video.title}
                        <div id='rating'>
                            <Rating video={video} />
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default VideoHover
