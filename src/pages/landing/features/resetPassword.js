import React, { useState, useContext } from 'react';
import {Link, useHistory} from 'react-router-dom';
import {Form, Button, Image} from 'semantic-ui-react';
import {gql, useMutation, useLazyQuery} from '@apollo/client';
import {Paper, Typography} from '@material-ui/core';
import jwt_decode from "jwt-decode";

import {useForm} from '../../../util/hooks';
import {AuthContext} from '../../../context/AuthContext';


const Reset = (props) => {

    const {Token} = props.match.params;
    const [user, setUser] = useState(false);
    const [emailSent, setEmailSent] = useState(false);
    const history = useHistory();

    if (!!Token && !user) {
        
        try {
            //Verify is JwtToken or not
            const jwtToken = jwt_decode(Token);
            if (jwtToken) {
                if (Date.now() >= jwtToken.exp * 1000) {
                    setUser('time');
                } else {
                    setUser(jwtToken);
                }
            }
        } catch (error) {
            setUser(false);
        }
       
    }
    const [errors, setErrors] = useState({});
    const {values, handleSubmit, onChange} = useForm(sendEmail,{
        email: '',
    });


    //Send the email with the password Reset
    const [passSent, {loading}] = useLazyQuery(SEND_RESET_PASSWORD, {
        onCompleted (info) {
            setEmailSent(true);
        },
        variables : {
            usermail : values.email
        },
        onError(err) {
            setErrors(err.graphQLErrors[0].extensions.errors);
        },
    })


    //Restart this page with no paramenters 
    function restartPage () {
        history.push("/reset_password");
        setUser(false);
    }
    

    // Methods
    function sendEmail () {
        if (values.email) {
            passSent();
        }
    }



    //Reset Password 
    
    const {values:valPassword, handleSubmit:SubmitNewPassword, onChange:onChangePassword} = useForm(sendNewPassword,{});

    const containerContext = useContext(AuthContext);
    const [changePassword, {loading:loader}] = useMutation(UPDATE_PASSWORD, {
        update(proxy, {data:{updatePassword}}) {

            containerContext.logIn(updatePassword);
        },
        onError(err) {
            // setErrors(err.graphQLErrors[0].extensions.errors);
        },
        variables : {
            ...valPassword,
            email: user.email,
            username: user.username
        }
    });

    function sendNewPassword () {
        changePassword();
    }



    /// Display section

    //If the token is not valid anymore
    if (user === 'time') {
        return (
            <div className="loginForm" >
            <div className="loginTitle ">
                <Typography className="text-center p-10" variant="h4">Password Reset</Typography>
                <Typography className="text-center">Sorry this request is not valid anymore. Please, request another password reset <span onClick={restartPage} className="text-indigo-600 cursor-pointer">Here</span></Typography>
            </div>
        </div>
        )
    }

    //If the user has a token and the token can be used
    else if (user) {
        return ( 
            <div className="loginForm" >
                <div className="loginTitle ">
                    <Typography className="text-center p-10" variant="h4">Password Reset</Typography>
                    <Typography className="text-center">Reset passwor for Magic CV email <span className="text-indigo-600">{user.email}</span></Typography>
                </div>
                <Form size="mini" onSubmit={SubmitNewPassword} className = {loader? 'loading':''}> 
                    <Form.Input disabled required fluid value={user.email} name="Email" label='Email' placeholder='Email' type="email" onChange={onChangePassword} error={ errors.email ? {  content: 'Please Provide a valid password' , pointing: 'above' } :false} />
                    <Form.Input required fluid name="password" label='New Password' placeholder='New Password' type="password" onChange={onChangePassword} error={ errors.password ? {  content: 'Please Provide a valid password' , pointing: 'above' } :false} />
                    <Form.Input required fluid name="confirmPassword" label='Confirm Password' placeholder='Confirm Password' type="password" onChange={onChangePassword} error={ errors.password ? {  content: 'Please Provide a valid password' , pointing: 'above' } :false} />
                    
                    <Button type="submit" className="primary-color" fluid>
                        Reset Password
                    </Button>

                </Form>
            </div>
         );
    } 
    
    //If the user has not request a token yet
    else {
        return ( 
            <div className="loginForm" >
                <div className="loginTitle ">
                    <Typography className="text-center p-10" variant="h4">Password Reset</Typography>
                    <Typography className="text-center">Enter your <span className="text-indigo-600">Magic CV username</span>, or the <span className="text-indigo-600">email address</span> that you used to register. We'll send you an email with your username and a link to reset your password</Typography>
                </div>
                <Form size="mini" onSubmit={handleSubmit} className = {loading? 'loading':''}> 
                    
                    {emailSent ?
                    <Paper variant="elevation"  elevation={3}>
                        <div className="bg-indigo-600">
                            <Typography className="text-center p-10 text-white font-bold">Email was sent to the registered email (if, the email is registered). Please, check your Spam folder.</Typography>
                        </div>
                    </Paper>
                    :
                    <>
                    <Form.Input required fluid name="email" label='Email address or Username' placeholder='Email or Username' type="text" onChange={onChange} error={ errors.message ? {  content: 'Please Provide a valid email or Username' , pointing: 'above' } :false} />
                    <Button type="submit" className="primary-color" fluid>
                        Send
                    </Button>
                    </>
                    }
                    <Typography className="text-center">Don't have an account? <span className="text-indigo-600"><Link to={"/register"}>Sign up</Link></span></Typography>
                </Form>
            </div>
         );
    }

}


const SEND_RESET_PASSWORD = gql`
query resetpassword($usermail: String!)
    { resetpassword( usermail: $usermail) 
        {
        sent
        }
    }
`;

const UPDATE_PASSWORD = gql`
mutation updatePassword(
        $username: String!
        $email: String!
        $password: String!
        $confirmPassword: String!
    ) {updatePassword (
        updatePasswordInput:{
            username: $username,
            email: $email
            password: $password,
            confirmPassword: $confirmPassword,	
        }){
        id
        username
        email
        token
        createdAt
    }
    }
`;

export default Reset;