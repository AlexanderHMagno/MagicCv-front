import React, {useContext} from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AuthRouter from '../security/AuthRouter';
import {AuthContext} from '../context/AuthContext';
import MenuNav from '../components/navbar';
import MenuNavOut from '../components/navbarOut';
import { Container } from 'semantic-ui-react';

//pages 
import Posts from '../pages/community/Home';
import Settings from '../pages/Settings';
import Profile from '../pages/profile';
import Templates from '../pages/templates';
import Latest from '../pages/landing/features/Latest';

import Login from '../pages/landing/features/Login';
import Register from '../pages/landing/features/Register';
import Reset from '../pages/landing/features/resetPassword';
import IndividualPost from '../pages/community/IndividualPost';
import Presentation from '../pages/landing';

const AuthorizedMenu = () => {

    const {user} = useContext(AuthContext);

    if (user) {
        return (
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
        )
    } else {
        return (
            <Container fluid>
                <MenuNavOut/>   
                <Switch>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/register" component={Register}/>
                    <Route exact path={["/reset_password/:Token", "/reset_password"]} component={Reset}/>
                    <Route path="/" component={Presentation}/>
                </Switch>
            </Container >
        )
    }
}




export default AuthorizedMenu;