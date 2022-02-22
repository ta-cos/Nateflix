
const LOAD_PROFILES = "profiles/GET"

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

const ADD_PROFILE = "profile/CREATE"

export const add = (profiles) => {
    return {
        type: ADD_PROFILE,
        profiles
    }
}

export const createProfile = (id, name, img) => async (dispatch) => {
    const res = await fetch(`/api/profiles/${id}/create`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            id,
            name,
            img
        })
    })
    if (res.ok) {
        const createdProfile = await res.json();
        dispatch(add(createdProfile))
        return createdProfile
    }
}

const EDIT_PROFILE_NAME = "profile/PUT"

const edit = (profiles) => {
    return {
        type: EDIT_PROFILE_NAME,
        profiles
    }
}

export const editProfileName = (id, newName) => async (dispatch) => {
    const res = await fetch(`/api/profiles/${id}/edit`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            newName,
            id
        })
    })
    if (res.ok) {
        const editedProfile = await res.json();
        dispatch(edit(editedProfile))
        return editedProfile
    }
}

const DELETE_PROFILE = 'profile/DELETE'

const del = (id) => {
    return {
        type: DELETE_PROFILE,
        id
    }
}

export const delProfile = (id) => async (dispatch) => {
    const res = await fetch(`/api/profiles/${id}/delete`, {
        method: 'DELETE',
    })
    if (res.ok) {
        const deleted = await res.json()
        dispatch(del(deleted.id))
    }
}


const initialState = {};

const profileReducer = (state = initialState, action) => {
    let newState = { ...state }
    switch (action.type) {
        case LOAD_PROFILES: {
            action.profiles.forEach(profile => {
                newState[profile.id] = profile
            });
            return newState
        }
        case ADD_PROFILE:
        case EDIT_PROFILE_NAME: {
            newState[action.profiles.id] = action.profiles
            return newState
        }
        case DELETE_PROFILE: {
            delete newState[action.id];
            return newState
        }
        default:
            return state
    }
}

export default profileReducer
