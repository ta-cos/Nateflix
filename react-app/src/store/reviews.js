
const MY_REVIEW = "review/GET/mine"

export const myReviews = (review) => {
    return {
        type: MY_REVIEW,
        review
    }
}

export const getMyReviews = (profileId) => async (dispatch) => {
    const res = await fetch(`/api/reviews/${profileId}`, {
        headers: { "Content-Type": "application/json" }
    })
    if (res.ok) {
        const review = await res.json();
        dispatch(myReviews(review))
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

export const createReview = (profile_id, video_id, rating) => async (dispatch) => {
    const res = await fetch(`/api/reviews/create`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            profile_id,
            video_id,
            rating
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
        case MY_REVIEW: {
            action.review.forEach(item => {
                newState[item.id] = item
            });
            return newState
        }
        case ADD_REVIEW:
        case EDIT_REVIEW: {
            newState[action.review.id] = action.review
            return newState
        }
        case DELETE_REVIEW: {
            delete newState[action.id];
            return newState
        }
        default:
            return state
    }
}

export default reviewReducer
