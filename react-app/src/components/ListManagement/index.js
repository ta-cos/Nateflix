import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { delListItem, addtoList } from '../../store/myList';

const ListMaangement = ({ video, profileId }) => {

    const dispatch = useDispatch();
    const thisVideoId = video.id
    const thisVideoTitle = video.title

    const handleAdd = async (e) => {
        await dispatch(addtoList(thisVideoTitle, profileId, thisVideoId))
    }

    const handleDel = async (e) => {
        const id = myList.find(item => item.video_id === thisVideoId).id
        await dispatch(delListItem(id))
    }

    const myList = Object.values(useSelector(state => state.listReducer))
    const myVids = myList?.map(item => (item.video_id))

    return (
        <div className='list-management'>
            {myVids.includes(thisVideoId)
                ? <button value={thisVideoId} onClick={handleDel}>Remove Form List</button>
                : <button value={thisVideoId} onClick={handleAdd}>Add To List</button>}
        </div>
    )
}

export default ListMaangement
