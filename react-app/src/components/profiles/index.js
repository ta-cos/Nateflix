import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { loadUserProfiles } from '../../store/profile';
import { ProfileContainer, ProfileContent, ProfileCard } from './ProfileElements';
const Profile = () => {

    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);

    async function getProfiles() {
        await dispatch(loadUserProfiles(user.id))
    }
    getProfiles();

    const profiles = useSelector(state => state.profile.users)




    return (
        <ProfileContainer>
            <ProfileContent>
                {profiles?.map((profile) => (
                    <ProfileCard>
                        <img src={profile.img} alt='profile image' />
                        <h3>{profile.name}</h3>
                    </ProfileCard>

                ))}
            </ProfileContent>
        </ProfileContainer>
    )
}

export default Profile
