import React, {useContext} from 'react';
import { useQuery } from '@apollo/client';
import { Grid, Transition } from 'semantic-ui-react';
import Loader from '../../util/loader';

import PostCard from './util/postCard';
import PostForm from './util/postForm';
import {AuthContext} from '../../context/AuthContext';
import {GET_POSTS, GET_PROFILE} from '../../graphql/queries';

const HOME = () => {
    const {loading, data } = useQuery(GET_POSTS);
    const {user} = useContext(AuthContext);
    const profile = useQuery(GET_PROFILE, {
        variables : {
            userId:user.id
        }
    })

    if (loading) return <Loader/>;
    const Posts = data.getPosts;

    return ( 
     
            <Grid columns={3}>
                <Grid.Row className="PostGroupTitle">
                    <h1 >Community</h1>
                    
                </Grid.Row>
                <Grid.Row>
                    {/* Add Post */}
                    
                        <Grid.Column>
                            In Construction
                        </Grid.Column>
                        <Grid.Column >
                            <PostForm/>
                        </Grid.Column>
                    
                </Grid.Row>
                <Grid.Row>
                    <Transition.Group>
                    {Posts && Posts.map( post => 
                        <Grid.Column key={post.id}>
                            <PostCard post={post}/>
                        </Grid.Column>
                    )
                    }                 
                    </Transition.Group> 
                </Grid.Row>

            </Grid>
     );
}

export default HOME;