import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';

const useStyles =  makeStyles({
  root: {
    maxWidth: 345,
    backgroundColor:"#21D4FD",
    backgroundImage: "linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)",
    margin: "auto",
  },
  rootOptional: {
    maxWidth: 345,
    backgroundColor: "#FFE53B",
    backgroundImage: "linear-gradient(147deg, #FFE53B 0%, #FF2525 74%)",
    
    margin: "auto",
  },
  media: {
    height: 140,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();
  
  return (
    <Card className={props.pending ? classes.rootOptional : classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={"/images" + props.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className="text-white">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.body}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {props.url && <Button size="small" >
            <Link to={props.url}>
                Learn More
            </Link>
        </Button>
        }
      </CardActions>
    </Card>
  );
}