import React, { useState, useContext} from 'react';
import { Menu , Image} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

import {AuthContext} from '../context/AuthContext';

const Menubar = () => {
    const path = window.location.pathname;
    const currentPath = path === "/"? "Home": path.substring(1);
    const [activeItem, setActiveItem] = useState(currentPath);

    const handleItemClick = (e, { name }) => setActiveItem(name);
    const {user, logOut} = useContext(AuthContext);
    
    return (
        
        <Menu pointing secondary size="massive" color="teal">
            
            {user ? (
                <>
                <Menu.Item
                 icon ={<Image  size="mini" src='/images/cv.png' wrapped ui={true} />}
                 onClick={handleItemClick}
                 as={Link}
                 to="/latest"
                />

                <Menu.Item
                 name= "Profile"
                 onClick={handleItemClick}
                 as={Link}
                 to="/dashboard"
                />

                <Menu.Item
                 name= "Templates"
                 onClick={handleItemClick}
                 as={Link}
                 to="/templates"
                />

                <Menu.Item
                 name= "Notes"
                 onClick={handleItemClick}
                 as={Link}
                 to="/posts"
                />



             
                 <Menu.Menu position='right'>
                    <Menu.Item
                    name= {user.username}
                    Active
                    onClick={handleItemClick}
                    as={Link}
                    to="/profile"
                    />
                    <Menu.Item
                        name='Logout'
                        onClick={logOut}
                        as={Link}
                        to="/"
                    />
                 </Menu.Menu>
                 </>
            ) : (
                <>
                <Menu.Item
                name='Home'
                icon ={<Image  size="mini" src='/images/cv.png' wrapped ui={true} />}
                active={activeItem === 'Home'}
                onClick={handleItemClick}
                as={Link}
                to="/posts"
                />
            
                <Menu.Menu position='right'>
                <Menu.Item
                    name='Login'
                    active={activeItem === 'Login'}
                    onClick={handleItemClick}
                    as={Link}
                    to="/login"
                />
                <Menu.Item
                    name='Register'
                    active={activeItem === 'Register'}
                    onClick={handleItemClick}
                    as={Link}
                    to="/register"
                />
                </Menu.Menu>
                </>
            )}
            
        </Menu>
    )

}

export default Menubar;