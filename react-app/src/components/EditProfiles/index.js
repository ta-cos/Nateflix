import { useSelector } from 'react'
import { ProfileContainer, ProfileContent, ProfileCard } from '../profiles/ProfileElements'
const EditProfiles = () => {

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

export default EditProfiles
