import { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { createReview, delReview, getMyReviews } from '../../store/reviews';
import './rating.css'


const Rating = ({ video }) => {

    const dispatch = useDispatch();
    const profileId = useParams();


    useEffect(async () => {
        await dispatch(getMyReviews(profileId.profileId))
    }, [])


    const handleLike = async (e) => {
        await dispatch(createReview(profileId.profileId, e.target.value, 100))
    }

    const handleHate = async (e) => {
        await dispatch(createReview(profileId.profileId, e.target.value, 0))
    }

    const handleDelete = async (e) => {
        await dispatch(delReview(e.target.value))
    }

    const reviews = Object.values(useSelector(state => state.reviews))

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
                Like
            </button>
            <button
                className={reviews.find(review => { return review.video_id === video.id })?.rating === 0 ? 'hated' : 'not-hated'}
                disabled={reviews.find(review => review.video_id === video.id && review.rating === 0)}
                onClick={handleHate}
                value={video.id}
            >
                Hate
            </button>
            <button
                className='remove' value={reviews.find(review => { return review.video_id === video.id })?.id}
                disabled={!reviews.find(review => review.video_id === video.id)}
                onClick={handleDelete}
            >
                Remove
            </button>
        </div>
    )
}

export default Rating
