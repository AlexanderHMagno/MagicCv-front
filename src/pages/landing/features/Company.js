import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '../../../util/Card';


const useStyles = makeStyles((theme) => ({
    root: {
        
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      marginTop: 20,
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 500,
      height: 450,
    },
  }));

const Company = () => {
    const classes = useStyles();
    const History = [
        {title: "Magic Cv was born", image: "/background.jpg" , body : "Magicv Cv was created on May 2021 by Alexander Hortua"  },
        {title: "We Launch our Website", image: "/background.jpg" , body : "Drinking a lot of coffee, and late nigths we launched our website on June 2021"  },
        {title: "Our first user", image: "/presentation/working.png" , body : "Yeah, Our first customer created the first Resume using our application"  },
        {title: "Share System", image: "/presentation/process.png" , body : "We launch our system to share templates, with other users"  },
    ]


    const Information = [
        {title: "What is Magic Cv?", paragraphs : ["Magic Cv creates astonishing resumes. Our users only need to add their information and select one of our multiple templates.", "On top of that, We also provide a system that allows them to personalize and create new templates that can be shared with the community. "]},
        {title: 'What inspired you to create Magic Cv?', paragraphs : ["Magic Cv was born to help people to create eye-popping resumes in no time. Multiple recruiters are always asking for an updated resume, even through LinkedIn. We have to admit that LinkedId has a way to create a PDF with your Resume. But, have you seen what unattractive template they provide to you? ", "Recruiters from Amazon and other big companies contacted to me through LinkedIn and they ask me for an updated Resume on PDF. If This happened to me, it is happening to multiple people." ]},
        {title: "Why Magic Cv?", paragraphs:["Magic cv was chosen as the name, because we can't help our users with their skills, but we can create an illusion on those skills. It is not the same a blank ugly resume, than an astonishing resume. At the end, what really manners is to get an interview, we help you with the extra magic to make it happen"]},
        {title: "History", paragraphs : []}
    ];

    return (
        <div className="min-h-full">
        <main className="mt-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
            <Typography variant="h5" className="text-center text-indigo-600">
                Company
            </Typography>

            {Information.map((element,index) => {

                return (
                    <div key={index} className=" m-auto w-8/12" >
                        <Typography variant="h6" className="text-center p-5 font-bold">
                            {element.title}
                        </Typography>
                        {element.paragraphs.map((par,indPar) => {
                            return (
                                <Typography key={indPar} component="p" className="pt-5">
                                    {par}
                                </Typography>
                            )
                        })}
        
                    </div>
                )
            })}

            <Grid container spacing={2} justify="center" className={classes.root}>
                {History.map((element, index) => (
                     <Grid key={index} item>
                         <Card 
                            pending= {index % 2 === 0}
                            image={element.image} 
                            title={element.title}
                            url={element.url}
                            body={element.body}
                        />
                    </Grid>
            
                ))}
            </Grid>
            
            
        </main>
    </div>
    )
}

export default Company;


