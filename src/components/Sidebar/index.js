import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { useHistory } from 'react-router-dom';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements';
const Sidebar = ({ isOpen, toggle }) => {
    const { currentUser, logout } = useAuth();
    const history = useHistory();
    async function handleLogout() {
        // setError('');
        try {
            await logout();
            history.pushState('/signin');
        } catch {
            // setError('Failed to logout');
        }
    }
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                {currentUser ? <span style={{ color: '#fff', marginRight: '5px' }}>{currentUser.email}</span> : ''}
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to="discover" onClick={toggle}>
                        Discover
                    </SidebarLink>
                    <SidebarLink to="services" onClick={toggle}>
                        Services
                    </SidebarLink>
                    {currentUser ? <SidebarLink to="update-profile" onClick={toggle}>
                        Update Profile
                    </SidebarLink> : <SidebarLink to="signup" onClick={toggle}>
                            Signup
                    </SidebarLink>}
                </SidebarMenu>
                <SideBtnWrap>
                    {currentUser ? <SidebarRoute onClick={handleLogout}>
                        Sign Out
                </SidebarRoute> : <SidebarRoute to='/signin'>
                            Sign In
                </SidebarRoute>}
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
