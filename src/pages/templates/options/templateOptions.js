
// TODO: This should be saved in the database

export const DEFAULTCONFIG =         {   
    display: {Avatar: {picture: 'round'}},
    template: {Principal: { template: "bluewave" }},
    settings: {
        Main: {color:"#010332",font:"Rubik",size:20},
        Background: {color:"#FFFFFF",font:"",size:0},
        Name: {color:"#010332",font:"Rubik",size:35},
        Title: {color:"#010332",font:"Rubik",size:20},
        Subtitle: {color:"#86D8CA",font:"Rubik",size:15},
        Text: {color:"#000000",font:"Rubik",size:10},
        Extra: {color:"#000000",font:"Rubik",size:18},
    },
};


export const TEMPLATEOPTIONS = [
    {label: "bluewave" ,image:"images/cv2.png",config: DEFAULTCONFIG},
    {label: "doublering" ,image:"images/cv8.png",
    config: {
        display: {Avatar: {picture: "acronym"}},
        template:{Principal: {template: "doublering"}},
        settings: {
            Main: {color: "#3d62b7", font: "Rubik", size: 20},
            Background: {color: "#5a5a58", font: "", size: 0},
            Back1: {color: "#e9e90c", font: "Rubik", size: 0},
            Back2: {color: "#0b0b0a", font: "Rubik", size: 0},
            Name: {color: "#fcfcfc", font: "Orbitron", size: 30},
            Title: {color: "#fcfcfc", font: "Rubik", size: 20},
            Subtitle: {color: "#a6a6a6", font: "Rubik", size: 15},
            Text: {color: "#ffffff", font: "Rubik", size: 10},
            Extra: {color: "#f2f2f2", font: "Rubik", size: 18},
        },
        
    }
    },
    {label: "topwave" ,image:"images/cv3.png",
        config: {
            display: {Avatar: {picture: "round"}},   
            template: {Principal: {template: "topwave"}},     
            settings: {
                Background: {color: "#FFFFFF", font: "", size: 0},
                Extra: {color: "#000000", font: "Bangers", size: "18"},
                Main: {color: "#050505", font: "Rubik", size: 20},
                Name: {color: "#ffffff", font: "FugazOne", size: 35},
                Subtitle: {color: "#86D8CA", font: "Rubik", size: 15},
                Text: {color: "#000000", font: "OpenSans", size: 10},
                Title: {color: "#d9d9d9", font: "OpenSans", size: "17"}   
            },
        }
    },

    {label: "triwave" ,image:"images/cv4.png",
        config: {
            display: {Avatar: {picture: "acronym"}},
            template:{Principal: {template: "triwave"}},
            settings: {
                Main: {color: "#1b1818", font: "Rubik", size: 20},
                Background: {color: "#000000", font: "", size: 0},
                Back1: {color: "#7DF901", font: "Rubik", size: 0},
                Back2: {color: "#000000", font: "Rubik", size: 0},
                Name: {color: "#7DF901", font: "Monoton", size: 25},
                Title: {color: "#484646", font: "Rubik", size: 20},
                Subtitle: {color: "#fafafa", font: "Rubik", size: 15},
                Text: {color: "#ffffff", font: "Rubik", size: 10},
                Extra: {color: "#908e8e", font: "Rubik", size: 18},
            },  
        }
    },
    {label: "triwave" ,image:"images/cv5.png",
    config: {
        display: {Avatar: {picture: "round"}},
        template:{Principal: {template: "triwave"}},
        settings: {
            Background: {color: "#faf9f9", font: "", size: 0},
            Back1: {color: "#014bf9", font: "Rubik", size: 0},
            Back2: {color: "#fafafa", font: "Rubik", size: 0},
            Main: {color: "#3d62b7", font: "Orbitron", size: 20},
            Name: {color: "#234bf9", font: "Orbitron", size: "27"},
            Title: {color: "#484646", font: "Roboto", size: 20},
            Subtitle: {color: "#3d62b7", font: "Roboto", size: 15},
            Text: {color: "#000000", font: "Roboto", size: 10},
            Extra: {color: "#030303", font: "Roboto", size: 18},
        },
        }
    },
    {label: "doublering" ,image:"images/cv7.png",
    config: {
        display: {Avatar: {picture: "acronym"}},
        template:{Principal: {template: "doublering"}},
        settings: {
            Background: {color: "#0b0b0a", font: "", size: 0},
            Back1: {color: "#01f9bb", font: "Rubik", size: 0},
            Back2: {color: "#a39f9f", font: "Rubik", size: 0},
            Main: {color: "#3d62b7", font: "Rubik", size: 20},
            Name: {color: "#fcfcfc", font: "Orbitron", size: 30},
            Title: {color: "#fcfcfc", font: "Rubik", size: 20},
            Subtitle: {color: "#a6a6a6", font: "Rubik", size: 15},
            Text: {color: "#ffffff", font: "Rubik", size: 10},
            Extra: {color: "#f2f2f2", font: "Rubik", size: 18},
        },
        
    }
    },
 
];
