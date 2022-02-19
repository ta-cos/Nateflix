import { useEffect, useState } from 'react'
import Rating from '../Ratings';

const VideoHover = ({ video }) => {

    const [showRating, setShowRating] = useState(false);

    return (
        <div>
            <div
                key={video.id}
                onMouseEnter={() => setShowRating(true)}
                onMouseLeave={() => setShowRating(false)}
            >
                <h2>{video.title}</h2>
                <iframe src={video.vid} frameBorder="1" allowFullScreen />
                {showRating &&
                    <div id='rating'>
                        <Rating video={video} />
                    </div>
                }
            </div>
        </div>
    )
}

export default VideoHover
