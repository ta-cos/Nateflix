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
                <button id='left-arrow' onClick={() => handleActive(active - 1)}><img src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/000000/external-left-arrow-arrows-dreamstale-lineal-dreamstale-12.png" /></button>
                <div id='inner' style={{ transform: `translateX(-${active * 100}%)` }}>
                    {props?.map(video => (
                        <VideoHover video={video} />
                    ))}
                </div>
                <button id='right-arrow' onClick={() => handleActive(active + 1)}><img src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/000000/external-right-arrow-arrows-dreamstale-lineal-dreamstale-13.png" /></button>
            </div>
        </div>
    )
}

export default Carousel
