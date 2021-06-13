import React, { useState, useContext } from 'react';
import {Link} from 'react-router-dom';
import {Form, Button, Image} from 'semantic-ui-react';
import {gql, useMutation} from '@apollo/client';
import Typography from '@material-ui/core/Typography';

import {useForm} from '../../../util/hooks';
import {AuthContext} from '../../../context/AuthContext';

const Login = (props) => {
    const [errors, setErrors] = useState({});
    const {values, handleSubmit, onChange} = useForm(loginUser,{
        username: '',
        password: '',
    }
    );
    const containerContext = useContext(AuthContext);
    const [userLoging, {loading}] = useMutation(LOGIN_MUTATION, {
        update(proxy, {data:{authentication}}) {
            containerContext.logIn(authentication);
        },
        onError(err) {
            setErrors(err.graphQLErrors[0].extensions.errors);
        },
        variables : values
    });

    // Methods
    function loginUser () {userLoging();}
    
    return ( 
        <div className="loginForm" >
            <div className="loginTitle">
                <Image size="small" src='/images/cv.png' wrapped ui={true} />
                <h3>Login</h3>
            </div>
            <Form size="mini" onSubmit={handleSubmit} className = {loading? 'loading':''}> 
                <Form.Input required fluid name="username" label='Username or Email' placeholder='Username' type="text" onChange={onChange}  />
                <Form.Input required fluid name="password" label='Password' placeholder='Password' type="password" onChange={onChange} error={ errors.general ? {  content: 'The user name or password is incorrect' , pointing: 'above' } :false} />
                <Button type="submit" className="primary-color" fluid>
                    Login
                </Button>
                <Typography className="text-indigo-600 text-center" ><Link to={'/reset_password'}>Forgot your username or password?</Link></Typography>
                <Typography className="text-center">Don't have an account? <span className="text-indigo-600"><Link to={"/register"}>Sign up</Link></span></Typography>
            </Form>
        </div>
     );
}

const LOGIN_MUTATION = gql`
mutation authentication(
        $username: String!
        $password: String!
    ) {authentication (
        authInput:{
            username: $username,
            password: $password,
        }){
        id
        username
        email
        token
        createdAt
    }
    }
`;

export default Login;