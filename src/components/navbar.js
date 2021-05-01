import React, { useState, useContext} from 'react';
import { Menu , Image} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';
import MenuBookSharpIcon from '@material-ui/icons/MenuBookSharp';
import SettingsSharpIcon from '@material-ui/icons/SettingsSharp';
import PowerSettingsNewSharpIcon from '@material-ui/icons/PowerSettingsNewSharp';
import DashboardIcon from '@material-ui/icons/Dashboard';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';

import LateralMenu from './lateralNav'

import {AuthContext} from '../context/AuthContext';

const Menubar = () => {
    const path = window.location.pathname;
    const currentPath = path === "/"? "Home": path.substring(1);
    const [activeItem, setActiveItem] = useState(currentPath);

    const handleItemClick = (e, { name }) => setActiveItem(name);
    const {user, logOut} = useContext(AuthContext);

    const options = [
        {text:'Profile', path: "/profile", icon:AccountCircleSharpIcon, front:true},
        {text:'Templates', path: "/templates", icon: DashboardIcon, front:true},
        {text:'Notes', path: "/posts",icon:  MenuBookSharpIcon,front:true},
        {text:user.username, path: "/settings", icon: SettingsSharpIcon, front:false},
        {text:'Logout', path: "/", action: logOut, icon : PowerSettingsNewSharpIcon, front:false},
    ];

    
    return (
        
        <Menu  secondary size="small" >
           
            {user ? (
                <>
                    <Menu.Item
                        icon ={<Image  size="tiny" src='/images/cv.png' wrapped ui={true} />}
                        onClick={handleItemClick}
                        as={Link}
                        to="/latest"
                    />
                    
                    <Menu.Menu style={{margin:"auto"}}>
                        {options.map((item, index) => (
                        
                        item.front && <Link to={item.path}  key={item.text} onClick={()=> item.action? item.action() : ""}>
                            <Menu.Item
                                icon ={<Tooltip TransitionComponent={Zoom} arrow title={item.text}>{<item.icon color="primary"/>}</Tooltip>}
                            />
                        </Link>
                        ))}
               
                    </Menu.Menu>

                    {/* SubMenu */}
                    
                    <Menu.Item
                        icon ={<LateralMenu options={options}/>}
                    />
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