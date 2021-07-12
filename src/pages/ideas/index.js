import React, {useContext,useState} from 'react';
import { useQuery } from '@apollo/client';
import Loader from '../../util/loader';
import {AuthContext} from '../../context/AuthContext';
import {GET_TEMPLATES, GET_TEMPLATE, GET_PROFILE} from '../../graphql/queries';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ToggleTemplate from './util/toggleTemplate';




const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      cursor: 'pointer'
    },
    image: {
        width: 128,
        height: 128,
      },
    image2: {
        width: 500,
    },
    buttons: {
        marginTop: 10,
        display: 'flex',
        justifyContent: 'space-around'
    }
  }));


const Ideas = (props) => {

    
    const {templateId} = props.match.params || {};
    
    
    const classes = useStyles();
    const GETTEMPLATEQUERY = templateId? GET_TEMPLATE : GET_TEMPLATES;
    const {loading, data } = useQuery(GETTEMPLATEQUERY, {
        variables: {
            templateId
        }
    });
    const {user} = useContext(AuthContext);
    const {data: dataProfile} = useQuery(GET_PROFILE, {
        variables : {
            userId:user.id
        }
    })


    // We need to filter ideas per tag
    // We need to allow likes and dislikes



    if (loading) return <Loader/>;
    const Templates = templateId ? [data.getTemplate] : data.getTemplates;
    const {getProfile} = dataProfile || {};


    return (
        <div className={classes.root}>
          <Grid container spacing={3}>

            {Templates &&
            
                templateId ? 
                Templates.map((element, index) => {
                return (
                    // <Grid item xs={6} sm={4} md={3} key={index}>
                        <Paper className={classes.paper}>
                            <img 
                                className={classes.image2} 
                                alt={`Template ${element.title}`} 
                                src={element.image} />
                            <Link to={`/ideas`}>
                                <Button variant="contained" color="primary">
                                    Go Back
                                </Button>
                            </Link>
                        </Paper>
                    // </Grid>
                )}) :
             Templates.map((element, index) => {
                return (
                    <Grid item xs={6} sm={4} md={3} key={index}>
                        <Paper className={classes.paper}>
                            <img 
                                className={classes.img} 
                                alt={`Template ${element.title}`} 
                                src={element.image} />
                        
                            <Grid className={classes.buttons}>
                                <Link to={`ideas/${element.id}`}>
                                    <Button variant="contained" color="primary">
                                        View
                                    </Button>
                                </Link>        

                                <ToggleTemplate templateId={element.id} userLiked={(getProfile && getProfile.templates.includes(element.id))}/>
                                    
                            </Grid>
                           
                        </Paper>

                    </Grid>
                )
                })
            
            }

            
          </Grid>
        </div>
      );
}



export default Ideas;


