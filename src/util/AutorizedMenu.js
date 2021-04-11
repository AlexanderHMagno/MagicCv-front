import React, {useContext} from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AuthRouter from '../security/AuthRouter';
import {AuthContext} from '../context/AuthContext';
import MenuNav from '../components/navbar';
import MenuNavOut from '../components/navbarOut';
import { Container } from 'semantic-ui-react';

//pages 
import Posts from '../pages/Home';
import Settings from '../pages/Settings';
import Profile from '../pages/profile';
import Templates from '../pages/templates';
import Latest from '../pages/Latest';

import Login from '../pages/Login';
import Register from '../pages/Register';
import IndividualPost from '../pages/IndividualPost';
import Presentation from '../pages/Presentation';

const AuthorizedMenu = () => {

    const {user} = useContext(AuthContext);

    return (
    <>      
        {user &&
            <Container >
                <MenuNav/> 
                <Switch>
                    <AuthRouter exact path="/login" component={Login}/>
                    <AuthRouter exact path="/register" component={Register}/>
                    <Route exact path="/post/:postId" component={IndividualPost}/>
                    <Route exact path="/posts" component={Posts}/>
                    <Route exact path="/templates" component={Templates}/>
                    <Route exact path="/settings" component={Settings}/>
                    <Route exact path="/profile" component={Profile}/>
                    <Route path="/latest" component={Latest}/>
                </Switch>
            </Container>
        }

        {!user && 
            <Container >
                <MenuNavOut/>   
                <Switch>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/register" component={Register}/>
                    <Route path="/" component={Presentation}/>
                </Switch>
            </Container >
        }
    </>
    )
}




export default AuthorizedMenu;