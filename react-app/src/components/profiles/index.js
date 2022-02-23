import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { delProfile } from '../../store/profile';
import { ProfileCard, ProfileButton, EditButton, DelButton, FormHolder, ProfileButtonsContainer } from './ProfileElements';
import { FaPen, FaTrash, FaCheckCircle, FaRegTimesCircle } from 'react-icons/fa'
import { editProfileName } from '../../store/profile';
import { useHistory } from 'react-router-dom';


const Profile = ({ profile, getProfileId }) => {

    const dispatch = useDispatch();
    const history = useHistory();
    const [newProfileName, setProfileName] = useState(profile.name)
    const [showEditForm, setShowEditForm] = useState(false)
    const [errors, setErrors] = useState([])

    const handleDelete = async () => {
        await dispatch(delProfile(profile.id))
    }

    const handleEdit = async (e) => {
        e.preventDefault();
        const name = newProfileName
        let newErrors = []

        if (!name) {
            newErrors.push('must have name error')
        } else if (name.includes(' ')) {
            newErrors.push('spaces are not allowed')
        } else if (name.length > 7) {
            newErrors.push('name must be less than 6 chars long')
        } else if (name.length < 2) {
            newErrors.push('name must be more than 1 chars long')
        }

        setErrors(newErrors)
        if (newErrors.length) return
        await dispatch(editProfileName(profile.id, newProfileName))
        setShowEditForm(!showEditForm)
    }

    const handleSelect = (e) => {
        getProfileId(e.target.value)
        history.push(`/browse`)
    }

    // useEffect(() => {
    //     if (!showEditForm) return;

    //     const closeMenu = () => {
    //         setShowEditForm(false);
    //     };

    //     document.addEventListener('click', closeMenu);

    //     return () => document.removeEventListener("click", closeMenu);
    // }, [showEditForm]);


    return (
        <ProfileCard>
            <ProfileButton onClick={handleSelect} value={profile.id} style={{ backgroundImage: `url(${profile.img})` }}></ProfileButton>
            {!showEditForm &&
                <>
                    <ProfileButtonsContainer>
                        <h2>{profile.name}</h2>
                        <EditButton onClick={(e) => setShowEditForm(!showEditForm)}><FaPen /></EditButton>
                        <DelButton onClick={handleDelete} value={profile.id}> <FaTrash /></DelButton>
                    </ProfileButtonsContainer>
                </>
            }
            {showEditForm && (
                <FormHolder>
                    {errors.length ? errors.map(error => (
                        <p>{error}</p>
                    )) : null}
                    <form onSubmit={handleEdit}>
                        <div>
                            <input
                                name="Profile"
                                value={newProfileName}
                                onChange={e => setProfileName(e.target.value)}
                            >
                            </input>
                            <EditButton type="submit"><FaCheckCircle /></EditButton>
                            <DelButton type='clear'><FaRegTimesCircle /></DelButton>
                        </div>
                    </form>
                </FormHolder>
            )}
        </ProfileCard >
    )
}

export default Profile
