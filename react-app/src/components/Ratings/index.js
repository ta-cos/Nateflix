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
        <>
            <button className={reviews.find(review => { return review.video_id === video.id })?.rating === 100 ? 'liked' : 'not-liked'} onClick={handleLike} value={video.id}>Like</button>
            <button className={reviews.find(review => { return review.video_id === video.id })?.rating === 0 ? 'hated' : 'not-hated'} onClick={handleHate} value={video.id}>Hate</button>
            <button className='remove' value={reviews.find(review => { return review.video_id === video.id })?.id} onClick={handleDelete}>Remove</button>
        </>
    )
}

export default Rating
