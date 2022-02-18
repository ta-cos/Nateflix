import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { loadUserProfiles, delProfile } from '../../store/profile';
import { ProfileCard } from './ProfileElements';
import { FaPen } from 'react-icons/fa'
import { editProfileName } from '../../store/profile';
import { useHistory } from 'react-router-dom';


const Profile = ({ profile }) => {

    const dispatch = useDispatch();
    const history = useHistory();
    const [newProfileName, setProfileName] = useState(`${profile.name}`)
    const [showEditForm, setShowEditForm] = useState(false)

    const handleDelete = async () => {
        console.log(profile.id)
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

    return (
        <ProfileCard>
            <img src={profile.img} alt='profile image' />
            <h3>{profile.name}</h3>
            <div>
                <button onClick={(e) => setShowEditForm(!showEditForm)}><FaPen /></button>
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
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                )}
                <button onClick={handleDelete}> DELETE</button>
                <button onClick={handleSelect} value={profile.id}>Select</button>
            </div>
        </ProfileCard>
    )
}

export default Profile