import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { delProfile } from '../../store/profile';
import { ProfileCard, ProfileButtonsContainer, ProfileButton, EditButton, DelButton } from './ProfileElements';
import { FaPen, FaTrash } from 'react-icons/fa'
import { editProfileName } from '../../store/profile';
import { useHistory } from 'react-router-dom';


const Profile = ({ profile }) => {

    const dispatch = useDispatch();
    const history = useHistory();
    const [newProfileName, setProfileName] = useState(`${profile.name}`)
    const [showEditForm, setShowEditForm] = useState(false)

    const handleDelete = async () => {
        await dispatch(delProfile(profile.id))
    }

    const handleEdit = async (e) => {
        e.preventDefault();
        await dispatch(editProfileName(profile.id, newProfileName))
        setShowEditForm(!showEditForm)
    }

    const handleSelect = (e) => {
        history.push(`/browse/${e.target.value}`)
    }

    // <img src={profile.img} alt='profile image' data-profile-id />

    return (
        <ProfileCard>
            <ProfileButton onClick={handleSelect} value={profile.id} style={{ backgroundImage: `url(${profile.img})` }}></ProfileButton>
            <div style={{ display: 'flex' }}>
                <h2>{profile.name}</h2>
                <EditButton onClick={(e) => setShowEditForm(!showEditForm)}><FaPen /></EditButton>
                <DelButton onClick={handleDelete} value={profile.id}> <FaTrash /></DelButton>
            </div>
            <ProfileButtonsContainer>
                {showEditForm && (
                    <form onSubmit={handleEdit}>
                        <div>
                            <input
                                name="Profile"
                                placeholder='New Name'
                                value={newProfileName}
                                onChange={e => setProfileName(e.target.value)}
                            >
                            </input>
                            <ProfileButton type="submit">Submit</ProfileButton>
                        </div>
                    </form>
                )}
            </ProfileButtonsContainer>
        </ProfileCard>
    )
}

export default Profile
