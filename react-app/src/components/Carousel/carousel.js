import { useEffect, useState } from 'react'
import VideoHover from '../videoHover';

const Carousel = ({ props, profileId }) => {

    const [active, setActive] = useState(0);

    const handleActive = (newActive) => {
        console.log((props.length - 1) / 4)

        if (newActive < 0) {
            newActive = (props.length - 1) / 4
        } else if (newActive > (props.length - 1) / 4) {
            newActive = 0;
        }
        setActive(newActive)
        console.log(active)
    }

    return (
        <div className='vids-container'>
            <div className='for-buttons'>
                <button id='left-arrow' onClick={() => handleActive(active - 1)}><img src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/000000/external-left-arrow-arrows-dreamstale-lineal-dreamstale-12.png" /></button>
                <div className='vids'>
                    <div className='inner' style={{ transform: `translateX(-${active * 100}%)` }}>
                        {props?.map(video => (
                            <VideoHover video={video} profileId={profileId} />
                        ))}
                    </div>
                </div>
                <button id='right-arrow' onClick={() => handleActive(active + 1)}><img src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/000000/external-right-arrow-arrows-dreamstale-lineal-dreamstale-13.png" /></button>
            </div>
        </div>
    )
}

export default Carousel
