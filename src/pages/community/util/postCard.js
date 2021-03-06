import React, {useContext} from 'react';
import { Button, Card, Image, Icon, Label} from 'semantic-ui-react';
import moment from 'moment';
import {Link} from 'react-router-dom';

import {AuthContext} from '../../../context/AuthContext';
import LikeButton from './likeButton';
import RemoveButton from './removeButton';

function PostCard ({post}) {
    const {user:userLogged} = useContext(AuthContext);
    const {id,body,createdAt, username, user, countsComments,countsLikes, likes} = post || {};
    const {id:profileId, first, last, picture_url} = user || {};
    const officialName = `${first} ${last}` || username;
   
    return (
        <Card fluid style={{marginBottom: 20}}>
            <Card.Content>
                <Image
                floated='right'
                size='mini'
                src= {picture_url}
                />
                <Card.Header>{officialName}</Card.Header>
                <Card.Meta as={Link} to={`/posts/${id}`}>{moment(createdAt).fromNow(true)}</Card.Meta>
                <Card.Description>
                    {body}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <LikeButton post={{id, countsLikes, likes}} userLogged={userLogged}/>
                <Button as={Link} to ={userLogged? `/post/${id}` : '/login'} labelPosition='right'>
                    <Button color='blue' basic>
                        <Icon name='comments' />
                    </Button>
                    <Label  basic color='blue' pointing='left'>
                        {countsComments}
                    </Label>
                </Button>

                {userLogged && (profileId === userLogged.profileId ) && (<RemoveButton postId={id} icon="delete" circular floated="right" size="mini" />)}
            </Card.Content>
        </Card>
    )
}



export default PostCard;