
const LOAD_PROFILES = "profiles/LOAD_WATCHLISTS"

export const loadProfiles = (profiles) => {
    return {
        type: LOAD_PROFILES,
        profiles
    }
}

export const loadUserProfiles = (userId) => async (dispatch) => {
    const res = await fetch(`/api/profiles/${userId}`, {
        headers: { "Content-Type": "application/json" }
    })
    if (res.ok) {
        const profiles = await res.json();
        dispatch(loadProfiles(profiles))
        return profiles
    }
}

const initialState = {};

const profileReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_PROFILES: {
            newState = {}
            newState = action.profiles
            return { ...newState, ...state }
        }
        default:
            return state
    }
}

export default profileReducer
