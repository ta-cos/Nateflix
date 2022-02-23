import { loadUserProfiles, createProfile } from '../../store/profile';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import Profile from '../profiles';
import { useHistory } from 'react-router-dom'
import { FaDivide } from 'react-icons/fa';
import './index.css'


const SelectProfile = ({ getProfileId }) => {

    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(state => state.session.user);
    const [profileName, setProfileName] = useState("");
    const [errors, setErrors] = useState([])

    useEffect(async () => {
        await dispatch(loadUserProfiles(user.id))
    }, [])

    const handleAdd = async (e) => {
        e.preventDefault()
        const img = null
        const name = profileName
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
        await dispatch(createProfile(user.id, name, img))
    }

    const profiles = Object.values(useSelector(state => state.profiles))


    return (
        <div id='profiles-container'>
            <div id='profiles-content'>
                {profiles?.map(profile => (
                    <div key={profile.id}>
                        <Profile profile={profile} getProfileId={getProfileId} />
                    </div>
                ))}
            </div>
            <div id='add-profile'>
                {errors.length > 0 ? errors.map(error => (
                    <h2 className='error'> {error}</h2>
                )) : null}
                {profiles.length > 4 ? null :
                    <form onSubmit={handleAdd}>
                        <input type='text' placeholder='Profile Name' value={profileName}
                            onChange={e => setProfileName(e.target.value)} required={true}></input>
                        <button type='submit' className='form-submit'> Add Profile </button>
                    </form>
                }
            </div>
        </div>
    )
}

export default SelectProfile
