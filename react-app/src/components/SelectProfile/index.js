import { loadUserProfiles, createProfile } from '../../store/profile';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import Profile from '../profiles';
import { useHistory } from 'react-router-dom'
import { FaDivide } from 'react-icons/fa';
import './index.css'


const SelectProfile = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(state => state.session.user);
    const [profileName, setProfileName] = useState("");

    useEffect(async () => {
        await dispatch(loadUserProfiles(user.id))
    }, [])

    const handleAdd = async (e) => {
        e.preventDefault()
        const img = null
        const name = profileName
        await dispatch(createProfile(user.id, name, img))
    }

    const profiles = Object.values(useSelector(state => state.profiles))

    return (
        <div id='profiles-container'>
            <div id='profiles-content'>
                {profiles?.map(profile => (
                    <div key={profile.id}>
                        <Profile profile={profile} />
                    </div>
                ))}
            </div>
            <div id='add-profile'>
                {profiles.length > 4 ? null :
                    <form onSubmit={handleAdd}>
                        <input type='text' placeholder='Profile Name' value={profileName}
                            onChange={e => setProfileName(e.target.value)} required={true}></input>
                        <button type='submit'> Add Profile </button>
                    </form>
                }
            </div>
        </div>
    )
}

export default SelectProfile
