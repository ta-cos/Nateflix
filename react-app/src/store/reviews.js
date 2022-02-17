
const LOAD_REVIEW = "review/GET"

export const loadReviews = (review) => {
    return {
        type: LOAD_REVIEW,
        review
    }
}

export const loadUserReview = (userId) => async (dispatch) => {
    const res = await fetch(`/api/reviews/${videoId}`, {
        headers: { "Content-Type": "application/json" }
    })
    if (res.ok) {
        const review = await res.json();
        dispatch(loadReviews(review))
        return review
    }
}

const ADD_REVIEW = "review/CREATE"

export const add = (review) => {
    return {
        type: ADD_REVIEW,
        review
    }
}

export const createReview = (id, name, img) => async (dispatch) => {
    const res = await fetch(`/api/reviews/${id}/create`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            id,
            name,
            img
        })
    })
    if (res.ok) {
        const createdReview = await res.json();
        dispatch(add(createdReview))
        return createdReview
    }
}

const EDIT_REVIEW = "review/PUT"

const edit = (review) => {
    return {
        type: EDIT_REVIEW,
        review
    }
}

export const editReview = (id, newName) => async (dispatch) => {
    const res = await fetch(`/api/reviews/${id}/edit`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            newName,
            id
        })
    })
    if (res.ok) {
        const editedReview = await res.json();
        dispatch(edit(editedReview))
        return editedReview
    }
}

const DELETE_REVIEW = 'review/DELETE'

const del = (id) => {
    return {
        type: DELETE_REVIEW,
        id: id
    }
}

export const delReview = (id) => async (dispatch) => {
    console.log('THUNK', id)
    const res = await fetch(`/api/reviews/${id}/delete`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    })
    if (res.ok) {
        dispatch(del(id))
    }
}


const initialState = {};

const reviewReducer = (state = initialState, action) => {
    let newState = { ...state }
    switch (action.type) {
        case LOAD_REVIEW: {
            action.review.forEach(item => {
                newState[item.id] = item
            });
            console.log(newState)
            return newState
        }
        case ADD_REVIEW:
        case EDIT_REVIEW: {
            newState[action.review.id] = action.review
            return newState
        }
        case DELETE_REVIEW: {
            console.log('REDUCER', action.id)
            delete newState[action.id];
            return newState
        }
        default:
            return state
    }
}

export default reviewReducer
