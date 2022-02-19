// frontend/src/components/Navigation/ProfileButton.js
import React, { useState, useEffect } from "react";
import { FaSmile } from "react-icons/fa";
import { NavLink, useHistory, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from '../../store/session';
import { ProfileMenuBtn, ProfileDropdown } from "./ProfileButtonStyle";
import { FaSmileWink } from "react-icons/fa";



function ProfileButton() {
    const user = useSelector(state => state.session.user)
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);
    const history = useHistory();

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

    const handleLogout = async () => {
        await dispatch(sessionActions.logout());
        history.push('/');
    };

    return (
        <>
            {!user ? null : <ProfileMenuBtn onClick={openMenu}>
                <FaSmileWink />
            </ProfileMenuBtn>}
            {showMenu && (
                <ProfileDropdown>
                    {user ? <button className="logout-btn" onClick={handleLogout}>Logout</button> : null}
                </ProfileDropdown>
            )}
        </>
    );
}

export default ProfileButton;
