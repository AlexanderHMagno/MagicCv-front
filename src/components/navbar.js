import React, { useState, useContext} from 'react';
import { Menu , Image} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';
import SettingsSharpIcon from '@material-ui/icons/SettingsSharp';
import PowerSettingsNewSharpIcon from '@material-ui/icons/PowerSettingsNewSharp';
import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import StorefrontIcon from '@material-ui/icons/Storefront';
import BrushIcon from '@material-ui/icons/Brush';

import AnnouncementIcon from '@material-ui/icons/Announcement';
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
        {text:'What\'s new', path: "/latest", icon:AnnouncementIcon, front:false, badge :'New'},
        {text:'Profile', path: "/profile", icon:AccountCircleSharpIcon, front:true},
        {text:'My Templates', path: "/ideas", icon: DashboardIcon, front:true},
        {text:'Community', path: "/posts",icon: SupervisedUserCircleIcon ,front:true},
        {text:'MarketPlace', path: "/ideas",icon: StorefrontIcon ,front:true},
        {text:'Editor', path: "/templates", icon: BrushIcon, front:true},
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