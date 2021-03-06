import React, {useContext} from 'react';
import {gql, useQuery} from '@apollo/client';
import {Grid, Image, Card, Icon, Header,Button, Label, Divider, Segment,Feed, Dropdown} from 'semantic-ui-react';
import Moment from 'moment';
import {Link} from 'react-router-dom';

import {AuthContext} from '../../context/AuthContext';
import Loader from '../../util/loader';
import LikeButton from './util/likeButton';
import RemoveButton from './util/removeButton';
import CreateComment from '../../components/comments/createComments';

const IndividualPost = (props) => {

    const {user} = useContext(AuthContext);
    const postId = props.match.params.postId;
    const {loading, data} = useQuery(GETPOST, {
        variables : {
            postId
        }
    })

    const RemoveComment  = (props) => {
        console.log({props});
    }

    if (loading) return <Loader/>
    if (!data) props.history.push('/'); //If post dont exits redirect to home
    const {body, countsComments,comments, countsLikes,likes, username, createdAt, id , user:owner} = data.getPost || {};
    const {id:ProfileId, first, last, picture_url} = owner || {};
    const newComments = [...comments].reverse();
    const fullName = `${first} ${last}` || username; 
    
    const deletePostCallback = () => props.history.push('/posts');
return  (
    <Grid className="mt-20">
        {/* OWNER */}
        <Grid.Column width={4}>
            <Card>
                <Image src={picture_url} wrapped ui={false} />
                <Card.Content>
                    <Card.Header>{fullName}</Card.Header>
                    <Card.Meta>
                        <span className='date'>Posted: {Moment(createdAt).fromNow(true)}</span>
                    </Card.Meta>
                    <Divider horizontal></Divider>
                    <Card.Content>
                    {user && (ProfileId === user.profileId ) && (<RemoveButton postId={postId} fluid size="mini" callback={deletePostCallback}>Delete Post</RemoveButton>)}
                    <Button className="mt-20 primary-color" as={Link} to="/posts"  fluid size="mini" >More Posts</Button>
                    </Card.Content>
                </Card.Content>
            </Card>    
        </Grid.Column>

        {/* FEEDER */}
        <Grid.Column width={9}>
            <Card fluid>
                <Card.Content extra>
                    <Header as='h2' textAlign='center'>
                        <Header.Content>
                            <Icon name="quote left"/>
                                {body}
                            <Icon name="quote right"/>
                        </Header.Content>
                        
                    </Header>
                </Card.Content>

                <Card.Content extra textAlign="right" >
                    <LikeButton post={{id, countsLikes, likes}} userLogged={user}/>
                    <Button as={'div'} labelPosition='right'>
                        <Button color='blue' basic>
                            <Icon name='comments' />
                        </Button>
                        <Label  basic color='blue' pointing='left'>
                            {countsComments}
                        </Label>
                    </Button>
                </Card.Content>
                <Divider horizontal/>

                <Card.Content extra>
                    <CreateComment postId={id}/>
                </Card.Content>
            </Card>

            <Segment>
                {comments.length? 
                    newComments.map(comment => 
                       
                       { 
                           const {id, createdAt,body, user:userP} = comment || {};
                           const {picture_url, first, last, id:PID} = userP || {};
                           const NameDisplay = `${first} ${last}`;

                           console.log((comment));
                           return (<Feed key={id}>
                            <Feed.Event>
                            <Feed.Label image={picture_url} />    
                            <Feed.Content>
                                <Feed.Summary>{NameDisplay}</Feed.Summary>
                                <Feed.Date content={Moment(createdAt).fromNow()} />
                                <Feed>
                                    {body}
                                </Feed>
                            </Feed.Content>
                            { (PID === user.profileId ) && 
                                <Dropdown
                                    icon='bars'
                                    onChange = {(...props)=> RemoveComment(props)}
                                >
                                    <Dropdown.Menu>
                                    <Dropdown.Item>
                                        <RemoveButton postId={postId} commentId={id} placeholder={true}>  
                                        <Icon name='attention'/> Delete Post
                                        </RemoveButton>
                                    </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            }
                            </Feed.Event>
                            <Divider section />
                        </Feed>)
}
                    ) 
                    : "No comments on this post"
                }
            </Segment>
        </Grid.Column>
        <Grid.Column width={3}>
        
        </Grid.Column>
    </Grid>
    )
}


const GETPOST = gql`
    query getPost($postId:ID!) {
        getPost(postId:$postId) {
            username
            body
            id
            countsComments
            countsLikes
            comments {
                body
                createdAt
                user  {
                    id
                    first
                    last
                    picture_url
                }
                id
            }
            likes{
                username
            }
            createdAt
            user {
                id
                first
                last
                picture_url
            }
        }
    }
`;


export default IndividualPost;