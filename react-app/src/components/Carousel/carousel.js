import { useEffect, useState } from 'react'
import VideoHover from '../videoHover';

const Carousel = ({ props }) => {

    const [active, setActive] = useState(0);

    const handleActive = (newActive) => {
        if (newActive < 0) {
            newActive = props.length / 4 - 1
        } else if (newActive > props.length / 4 - 1) {
            newActive = 0;
        }
        console.log(newActive)
        setActive(newActive)
    }

    return (
        <div id='vids-container'>

            <div id='vids'>
                <button onClick={() => handleActive(active - 1)}>Left</button>
                <div id='inner' style={{ transform: `translateX(-${active * 100}%)` }}>
                    {props?.map(video => (
                        <VideoHover video={video} />
                    ))}
                </div>
                <button onClick={() => handleActive(active + 1)}>Right</button>
            </div>
        </div>
    )
}

export default Carousel
