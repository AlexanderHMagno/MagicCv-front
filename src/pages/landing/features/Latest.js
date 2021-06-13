import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Carousel } from 'react-responsive-carousel';

import Card from '../../../util/Card';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 'auto'
  },
  paper: {
    boxShadow: "none",
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginBottom : 10,
  },
  body : {
    margin : "auto"
  }

}));

const comingSoon= [
    {current : true ,title: "Share your Ideas", image: "/presentation/community.png" , url: "/ideas", body : "It will give the ability to users to share their templates. Share and find more templates for your CV"  },
    {title:"Options",image:"/presentation/menuoptions.png",url:"/templates",body: "Improve the options settins on templates, to allow the user to make more changes"},
    {title:"Security",image:"/presentation/security.png",url:"/",body: "Add additional security to password generation. Password has at least some special characteres, and add a captcha"},
    {title:"Avatar",image:"/presentation/avatars.png",url:"/profile",body: "Update Profile avatars, give the user the power to select random ideas"},
    {title:"Community",image:"/presentation/newPaper.jpg",url:"/posts",body: "Ask question or help other users to solve doubts regarding their resumes"},
]


const LATEST = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
            
            <Typography variant="h5" className="text-indigo-500 font-bold text-center p-10 text-4xl">
                Latest News
            </Typography>
            <Grid className={classes.body} item xs={8}>
              <Typography variant="body1"  component="p" className="sm:text-lg md:text-xl ">
                  We want to be total transaparent with you. We are in process of creating and updating our Application. You will see some errors on the screen, but we are working as fast as we can to solve them!! 
                  Thanks for your comprehension! 
              </Typography>
              
              <Typography variant="body1" component="p" className="pt-5 sm:text-lg md:text-xl " >
                  Meanwhile, we will keep you in the loop on what we are with working, and what will be added to the application in the coming months.
              </Typography>
            </Grid>
        
        </Grid>
        <Grid className={classes.subtitle} item xs={12} sm={6}>
          <Paper  className={classes.paper}>
                <Typography variant="subtitle1" className="font-extrabold text-center p-5">
                    Working On
                </Typography>

                {comingSoon.filter(element => element.current).map((element,index) => {
                  
                    return (
                        <Card 
                        key={element.image}
                          image={element.image} 
                          title={element.title}
                          url={element.url}
                          body={element.body}/>
                    )
                  })
                }
          </Paper>
            
            
            
        </Grid>
        <Grid className={classes.subtitle} item xs={12} sm={6}>
            <Paper className={classes.paper}> 
                <Typography variant="subtitle1" className="font-extrabold text-center p-5">
                    Coming soon
                </Typography>
                <Carousel autoPlay showThumbs={false} infiniteLoop={true}>
                  
                
                     {comingSoon.filter(element => !element.current).map((element,index) => {
                        return <Card 
                            key={element.image}
                            pending= {true}
                            image={element.image} 
                            title={element.title}
                            url={element.url}
                            body={element.body}
                    />
                    })}
                </Carousel>   
            </Paper>

     
            
        </Grid>

       
      </Grid>
    </div>
  );
}

export default LATEST;