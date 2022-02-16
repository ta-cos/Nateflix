import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { loadUserProfiles } from '../../store/profile';
import { ProfileContainer, ProfileContent } from './ProfileElements';
const Profile = () => {

    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);

    async function getProfiles() {
        await dispatch(loadUserProfiles(user.id))
    }
    getProfiles();

    const profiles = useSelector(state => state.profile.users)
    console.log('#################')
    console.log(profiles)
    console.log('#################')



    return (
        <ProfileContainer>
            <ProfileContent>
                {profiles?.map((profile) => (
                    <h3>{profile.name}</h3>
                ))}
            </ProfileContent>
        </ProfileContainer>
    )
}

export default Profile
