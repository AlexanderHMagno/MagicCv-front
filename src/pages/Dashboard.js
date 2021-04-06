import React, {useContext} from 'react';
import Moment from 'moment';
import { Grid, Card, Icon, Image, Button } from 'semantic-ui-react';
import {useQuery} from '@apollo/client';


import ProfileTemplate from './profile/util/ProfileTemplate';
import ChangePicture from './profile/modal/Picture';
import MasterModal from './profile/modal/MasterModal';
import {AuthContext} from '../context/AuthContext';
import {GET_PROFILE} from '../graphql/queries';
import Loader from '../util/loader';


const DASHBOARD = () => {
    const {user:{username, id, email,createdAt}} = useContext(AuthContext);
    const {loading, data} = useQuery(GET_PROFILE, {
        variables : {
            userId:id
        }
    })
    
    if (loading) return <Loader/>;
    const {address, bio, location,number,picture_url,experience,education,volunteer,skills} = data.getProfile || {};


    return ( 

        <Grid stackable>
            {/* Profile image */}
            <Grid.Column width={4}  >    
                <Card>
                    <ChangePicture trigger={<Image className="cursor-pointer" src={picture_url || 'https://react.semantic-ui.com/images/avatar/large/matthew.png'} wrapped ui={false} />}/>
                    
                    <Card.Content>
                    <Card.Header>{username}</Card.Header>
                    <Card.Meta>Joined in {Moment(createdAt).year()}</Card.Meta>
                    <Card.Meta>{location}</Card.Meta>
                    <Card.Description>
                        {bio}
                    </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                    <MasterModal code="Bio">
                        <Button className="primary-color" fluid>
                            Edit Bio
                        </Button>
                    </MasterModal>
                    </Card.Content>
                </Card>

                <Card>
                    <Card.Content>
                        <Card.Header>Contact Information</Card.Header>
                    </Card.Content>
                    <Card.Content>
                        <p> <Icon className="primary-font" name='phone' />{number || "Add a number"}</p>
                        <p> <Icon className="primary-font" name='location arrow' />{address || "Add Address"}</p>
                        <p> <Icon className="primary-font email" name='mail' />{email || "Add email"}</p>
                    </Card.Content>
                </Card>
            </Grid.Column>
            {/* Profile Add ons */}
            <Grid.Column width={9}>
                <ProfileTemplate code="Experience" information={experience}/>
                <ProfileTemplate code="Education" information={education}/>
                <ProfileTemplate code="Volunteer" information={volunteer}/>
                <ProfileTemplate code="Skills" information={skills}/>
            </Grid.Column>

            {/* Profile Publicity */}
            <Grid.Column width={3}>
                Publicity
            </Grid.Column>   
             
        </Grid>
     );
}

export default DASHBOARD;