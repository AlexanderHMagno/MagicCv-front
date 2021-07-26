import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useQuery } from '@apollo/client';
import {Grid} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import Loader from '../../util/loader';
import PostCard from './util/postCard';
import PostForm from './util/postForm';

import {GET_POSTS} from '../../graphql/queries';



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      margin: theme.spacing(2)
    },
  }));



const HOME = () => {
    const classes = useStyles();
    const {loading, data } = useQuery(GET_POSTS);

    if (loading) return <Loader/>;
    const Posts = data.getPosts;

    return ( 

            <Grid container spacing={3}>
                <Grid item xs={12} >
                    <Typography color="primary" variant="h4" align="center" className={classes.title}>Community</Typography>
                </Grid>

                <Grid item xs={12} sm={8}>
                    <Paper className={classes.paper}>
                        <PostForm/>
                    </Paper>
                    
    
                    {Posts && Posts.map( post => 
                    
                    {
                        return (
                            <Paper key={post.id}>
                                <PostCard post={post}/>
                            </Paper>
                        )
                    }
                       
                    )
                    }     
                </Grid>

                <Grid item xs={12} sm={4}>
                    <Paper className={classes.paper}>Publicity</Paper>
                </Grid>
            
    

            </Grid>
     );
}

export default HOME;