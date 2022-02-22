const LOAD_LIST = "mylist/GET"

export const loadList = (list) => {
    return {
        type: LOAD_LIST,
        list
    }
}

export const loadMyList = (profileId) => async (dispatch) => {
    const res = await fetch(`/api/mylist/${profileId}`, {
        headers: { "Content-Type": "application/json" }
    })
    if (res.ok) {
        const myList = await res.json();
        dispatch(loadList(myList))
        return myList
    }
}

const ADD_TO_LIST = "mylist/ADD"

const add = (list) => {
    return {
        type: ADD_TO_LIST,
        list
    }
}

export const addtoList = (title, profileId, videoId) => async (dispatch) => {
    const res = await fetch(`/api/mylist/${profileId}/create`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            title,
            profileId,
            videoId
        })
    })
    if (res.ok) {
        const createdList = await res.json();
        dispatch(add(createdList))
        return createdList
    }
}

const DELETE_LIST = "mylist/DELETE"

const del = (id) => {
    return {
        type: DELETE_LIST,
        id
    }
}

export const delListItem = (id) => async (dispatch) => {
    const res = await fetch(`/api/mylist/${id}/delete`, {
        method: 'DELETE',
    })
    if (res.ok) {
        const deleted = await res.json()
        dispatch(del(deleted.id))
    }
}

const initialState = {};

const listReducer = (state = initialState, action) => {
    let newState = { ...state }
    switch (action.type) {
        case LOAD_LIST: {
            action.list.forEach(item => {
                newState[item.id] = item
            });
            return newState
        }
        case ADD_TO_LIST: {
            newState[action.list.id] = action.list
            return newState
        }
        case DELETE_LIST: {
            delete newState[action.id];
            return newState
        }
        default:
            return state
    }
}

export default listReducer
