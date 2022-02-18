
const LOAD_VIDEOS = "videos/GET"

export const loadVideos = videos => {
    return {
        type: LOAD_VIDEOS,
        videos
    }
}

export const getVideos = () => async (dispatch) => {
    const res = await fetch(`/api/videos/`, {
        headers: { "Content-Type": "application/json" }
    })
    if (res.ok) {
        const videos = await res.json();
        dispatch(loadVideos(videos))
        return videos
    }
}

const initialState = {};

const videoReducer = (state = initialState, action) => {
    let newState = { ...state }
    switch (action.type) {
        case LOAD_VIDEOS: {
            action.videos.forEach(video => {
                newState[video.id] = video
            });
            return newState
        }
        default:
            return state
    }
}

export default videoReducer
