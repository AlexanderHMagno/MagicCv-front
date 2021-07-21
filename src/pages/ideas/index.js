import React, {useContext,useState} from 'react';
import { useQuery } from '@apollo/client';
import Loader from '../../util/loader';
import {AuthContext} from '../../context/AuthContext';
import {GET_TEMPLATES, GET_TEMPLATE, GET_PROFILE} from '../../graphql/queries';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Grow from '@material-ui/core/Grow';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import BeenhereIcon from '@material-ui/icons/Beenhere';
import ToggleTemplate from './util/toggleTemplate';
import Factory from '../templates/factory';




const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    principalCard: {
      position: "relative",
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      marginBottom : 10
    },
    ownership : {
        position: "absolute",
        top : 10,
        right : 10,
        color: 'green'
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
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
      },
  }));


const Ideas = (props) => {

    const price = "4.99";
    const {templateId} = props.match.params || {};
    const [showEditor, setShowEditor] = useState(true);
    
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
                    <Grid item xs={12} sm={8} md={12} key={index}>
                        <Grid container>
                            <Grid item xs={12} sm={8} lg={6}>
                                    <Paper className={classes.paper}>
                                    <Button component={Link}  to={`/ideas`} variant="contained" color="primary">
                                        Go Back
                                    </Button>
                                        <img  
                                            alt={`Template ${element.title}`} 
                                            src={element.image} />
                                    </Paper>
                            </Grid>
                            <Grid item xs={12} sm={4} lg={6}>
                                <div className="p-20">
                                    <ButtonGroup size="large" color="primary" aria-label="large outlined primary button group">
                                        <ToggleTemplate templateId={element.id} userLiked={(getProfile && getProfile.templates.includes(element.id))}/>
                                        <Button component={Link}  to={`/templates`} variant="contained" color="primary">
                                            Preview Template
                                        </Button>
                                    </ButtonGroup>
                                </div>
                               
                            </Grid>
                            
                        </Grid>
         
                    </Grid>
                )}) :
             Templates.map((element, index) => {

                const isOwned = (getProfile && getProfile.templates.includes(element.id));

                return (
                    <Grid item xs={6} sm={4} md={3} key={index}>
                        <Grow timeout={1000} in={true}>
                            <Paper className={classes.principalCard}>
                                {isOwned &&
                                    <BeenhereIcon 
                                    fontSize="large"
                                    className={classes.ownership} 
                                    />
                                }  
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
    
                                </Grid>
                            
                            </Paper>
                        </Grow >
                    </Grid>
                )
                })
            
            }

            
          </Grid>
        </div>
      );
}



export default Ideas;


