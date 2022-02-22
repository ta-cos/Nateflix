import { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { GiPopcorn, GiTomato, GiTrashCan } from 'react-icons/gi'
import { createReview, delReview, getMyReviews } from '../../store/reviews';
import './rating.css'


const Rating = ({ video, profileId }) => {

    const dispatch = useDispatch();
    const thisVideoId = video.id


    useEffect(async () => {
        await dispatch(getMyReviews(profileId))
    }, [])


    const handleLike = async (e) => {
        await dispatch(createReview(profileId, thisVideoId, 100))
    }

    const handleHate = async (e) => {
        await dispatch(createReview(profileId, thisVideoId, 0))
    }

    const handleDelete = async (e) => {
        console.log(thisReview.id)
        await dispatch(delReview(thisReview.id))
    }

    const reviews = Object.values(useSelector(state => state.reviews))
    const thisReview = reviews.find(review => review.video_id === video.id && profileId.profileId == review.profile_id)
    reviews.find(review => { return review.video_id === video.id })

    return (
        <div className='rating-buttons'>
            <button
                id='like-button'
                className={reviews.find(review => { return review.video_id === video.id })?.rating === 100 ? 'liked' : 'not-liked'}
                disabled={reviews.find(review => review.video_id === video.id && review.rating === 100)}
                onClick={handleLike}
                value={video.id}
            >
                <GiPopcorn />
            </button>
            <button
                className={reviews.find(review => { return review.video_id === video.id })?.rating === 0 ? 'hated' : 'not-hated'}
                disabled={reviews.find(review => review.video_id === video.id && review.rating === 0)}
                onClick={handleHate}
                value={video.id}
            >
                <GiTomato />
            </button>
            <button
                className='remove' value={reviews.find(review => { return review.video_id === video.id })?.id}
                disabled={!reviews.find(review => review.video_id === video.id)}
                onClick={handleDelete}
            >
                <GiTrashCan />
            </button>
        </div>
    )
}

export default Rating
