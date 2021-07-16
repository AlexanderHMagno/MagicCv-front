import React, {useContext, useState} from 'react';
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
    const [cachePic, setCachePic] = useState(1);
    const {loading, data} = useQuery(GET_PROFILE, {
        variables : {
            userId:id
        }
    })
    
    if (loading) return <Loader/>;
    const {address, first, last, bio, role, city, country,phone,picture_url,experience,education,volunteer,skills} = data.getProfile || {};

    const CardName = (!first && !last) ? username : `${first} ${last}`;

    return ( 

        <Grid stackable>
            {/* Profile image */}
            <Grid.Column width={4} >  
                <div className="flex flex-row w-11/12 md:flex-col mx-auto">

                    <ChangePicture  email={email} picture_url={picture_url}  setCachePic={setCachePic}>
                            {picture_url ?
                                <Image className="mx-auto rounded shadow-2xl" as="button" src={`${picture_url}?${cachePic}`}/>
                                :    
                                <Gravatar email={email} size={250} rating="pg" default="identicon" className="CustomAvatar-image rounded shadow-2xl"/>
                            }
                    </ChangePicture>
                   

                    <Card style={{width:'100%'}}>
                        <Card.Content>
                        <Card.Header>{CardName}</Card.Header>
                        <Card.Meta>Joined in {Moment(createdAt).year()}</Card.Meta>
                        <Card.Meta>{`${city||"City"}, ${country||"Country"}`}</Card.Meta>
                        <Card.Meta>{role}</Card.Meta>
                        <Card.Description className="whitespace-pre-wrap">
                            <p className="italic text-gray-500">{bio || 'About'}</p>
                        </Card.Description>
                        </Card.Content>

                    </Card>
                </div> 
                <Card style={{width:'90%', margin:'auto', marginTop:10}}>
                    <Card.Content>
                        <Card.Header>Contact Information</Card.Header>
                    </Card.Content>
                    <Card.Content>
                        <p> <Icon className="primary-font" name='phone' />{phone || "Add a number"}</p>
                        <p> <Icon className="primary-font" name='location arrow' />{address || "Add Address"}</p>
                        <p> <Icon className="primary-font email break-words" name='mail' />{email || "Add email"}</p>
                    </Card.Content>
                    <Card.Content extra>
                    <MasterModal code="Bio" info={{address, bio, first, last, city, country ,phone,picture_url}}>
                        <Button className="primary-color" fluid>
                            Edit Profile
                        </Button>
                    </MasterModal>
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