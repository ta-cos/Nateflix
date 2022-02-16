import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { loadUserProfiles } from '../../store/profile';


const Profile = () => {

    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);

    const loadProfiles = async () => {
        await dispatch(loadUserProfiles(user.id))
    }

    loadProfiles()


    return (
        <div>
            <h1>Who is watching?</h1>
        </div>
    )
}

export default Profile
