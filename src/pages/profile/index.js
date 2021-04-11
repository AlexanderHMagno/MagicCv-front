import React, {useContext} from 'react';
import Moment from 'moment';
import { Grid, Card, Icon, Image, Button } from 'semantic-ui-react';
import {useQuery} from '@apollo/client';


import ProfileTemplate from './util/ProfileTemplate';
import ChangePicture from './modal/Picture';
import MasterModal from './modal/MasterModal';
import {AuthContext} from '../../context/AuthContext';
import {GET_PROFILE} from '../../graphql/queries';
import Loader from '../../util/loader';
import Gravatar from 'react-gravatar';


const PROFILE = () => {
    const {user:{username, id, email,createdAt}} = useContext(AuthContext);
    const {loading, data} = useQuery(GET_PROFILE, {
        variables : {
            userId:id
        }
    })
    
    if (loading) return <Loader/>;
    const {address, first, last, bio, city, country,phone,picture_url,experience,education,volunteer,skills} = data.getProfile || {};

    const CardName = (!first && !last) ? username : `${first} ${last}`;

    return ( 

        <Grid stackable>
            {/* Profile image */}
            <Grid.Column width={4}  >    
                <Card className="">
                    <ChangePicture email={email} picture_url={picture_url} >
                        {picture_url ? 
                            <Image as="button" src={picture_url} wrapped ui={false}/>
                        :
                            <Image as="button"  size='medium'wrapped>
                                <Gravatar email={email} size={500} rating="pg" default="identicon" className="CustomAvatar-image"/>
                            </Image> 
                        }
                    </ChangePicture>
                    
                    <Card.Content>
                    <Card.Header>{CardName}</Card.Header>
                    <Card.Meta>Joined in {Moment(createdAt).year()}</Card.Meta>
                    <Card.Meta>{`${city||"City"}, ${country||"Country"}`}</Card.Meta>
                    <Card.Description className="whitespace-pre-wrap">
                        <p className="italic text-gray-500">{bio || 'About'}</p>
                    </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                    <MasterModal code="Bio" info={{address, bio, first, last, city, country ,phone,picture_url}}>
                        <Button className="primary-color" fluid>
                            Edit Profile
                        </Button>
                    </MasterModal>
                    </Card.Content>
                </Card>

                <Card>
                    <Card.Content>
                        <Card.Header>Contact Information</Card.Header>
                    </Card.Content>
                    <Card.Content>
                        <p> <Icon className="primary-font" name='phone' />{phone || "Add a number"}</p>
                        <p> <Icon className="primary-font" name='location arrow' />{address || "Add Address"}</p>
                        <p> <Icon className="primary-font email break-words" name='mail' />{email || "Add email"}</p>
                    </Card.Content>
                </Card>
                
            </Grid.Column>
            {/* Profile Add ons */}
            <Grid.Column width={9}>
                <ProfileTemplate code="Experience" information={experience}/>
                <ProfileTemplate code="Education" information={education}/>
                <ProfileTemplate code="Skills" information={skills}/>
                <ProfileTemplate code="Volunteer" information={volunteer}/>
            </Grid.Column>

            {/* Profile Publicity */}
            <Grid.Column width={3}>
                Publicity
            </Grid.Column>   
             
        </Grid>
     );
}

export default PROFILE;