
// TODO: This should be saved in the database

export const DEFAULTCONFIG =         {   
    avatar: 'round',
    template: "bluewave",
    tags: ['traditional'],
    image: "/images/cvs/cv2.png",
    order: 1,
    original: true,
    settings: {
        Main: {color:"#010332",font:"Rubik",size:20},
        Background: {color:"#FFFFFF",font:"",size:0},
        Name: {color:"#010332",font:"Rubik",size:35},
        LeftTitle: {color: "#ffffff", font: "Rubik", size: 16, position: 'center'},
        LeftText: {color: "#ffffff", font: "Rubik", size: 14, position: 'center'},
        Title: {color:"#010332",font:"Rubik",size:20},
        Subtitle: {color:"#86D8CA",font:"Rubik",size:15},
        Text: {color:"#000000",font:"Rubik",size:10},
        Extra: {color:"#000000",font:"Rubik",size:18},
    },
};


export const TEMPLATEOPTIONS = [
    {title: "bluewave" ,image:"images/cvs/cv2.png",config: DEFAULTCONFIG},
    {title: "bluewave" ,image:"images/cvs/cv11.png",
        config: {   
            avatar: 'acronym2',
            template: "bluewave" ,
            settings: {
                Main: {color:"#393939",font:"Rubik",size:20},
                Background: {color:"#FFFFFF",font:"",size:0},
                Name: {color:"#6cd1dc",font:"OdibeeSans",size:60},
                LeftTitle: {color: "#6cd1dc", font: "Rubik", size: 16, position: 'flex-start'},
                LeftText: {color: "#ffffff", font: "Rubik", size: 16, position: 'flex-start'},
                Title: {color:"#010332",font:"Rubik",size:20},
                Subtitle: {color:"#000000",font:"Rubik",size:15},
                Text: {color:"#000000",font:"Rubik",size:10},
                Extra: {color:"#6cd1dc",font:"Rubik",size:18},
            },
        }
    },
    {title: "doublering" ,image:"images/cvs/cv8.png",
    config: {
        avatar: "acronym", 
        template: "doublering", 
        settings: {
            Main: {color: "", font: "Rubik", size: 0},
            Background: {color: "#5a5a58", font: "", size: 0},
            Back1: {color: "#e9e90c", font: "Rubik", size: 0},
            Back2: {color: "#0b0b0a", font: "Rubik", size: 0},
            LeftTitle: {color: "#e9e90c", font: "Rubik", size: 16, position: 'center'},
            LeftText: {color: "#ffffff", font: "Rubik", size: 14, position: 'center'},
            Name: {color: "#fcfcfc", font: "Orbitron", size: 30},
            Title: {color: "#fcfcfc", font: "Rubik", size: 20},
            Subtitle: {color: "#a6a6a6", font: "Rubik", size: 15},
            Text: {color: "#ffffff", font: "Rubik", size: 10},
            Extra: {color: "#f2f2f2", font: "Rubik", size: 18},
        },
        
    }
    },
    {title: "doublering" ,image:"images/cvs/cv12.png",
    config: {
        avatar: "acronym2", 
        template: "doublering", 
        settings: {
            Main: {color: "", font: "Rubik", size: 0},
            Background: {color: "#5a5a58", font: "", size: 0},
            Back1: {color: "3a3a38", font: "Rubik", size: 0},
            Back2: {color: "#0b0b0a", font: "Rubik", size: 0},
            LeftTitle: {color: "#ffffff", font: "Rubik", size: 16, position: 'center'},
            LeftText: {color: "#ffffff", font: "Rubik", size: 14, position: 'center'},
            Name: {color: "#8a66df", font: "Orbitron", size: 30},
            Title: {color: "#fcfcfc", font: "Rubik", size: 20},
            Subtitle: {color: "#a6a6a6", font: "Rubik", size: 15},
            Text: {color: "#ffffff", font: "Rubik", size: 10},
            Extra: {color: "#f2f2f2", font: "Rubik", size: 18},
        },
        
    }
    },
    {title: "topwave" ,image:"images/cvs/cv3.png",
        config: {
            avatar: "round",    
            template: "topwave",     
            settings: {
                Background: {color: "#FFFFFF", font: "", size: 0},
                Extra: {color: "#000000", font: "Bangers", size: "18"},
                Main: {color: "#050505", font: "Rubik", size: 20},
                LeftTitle: {color: "#ffffff", font: "Rubik", size: 16, position: 'center'},
                LeftText: {color: "#ffffff", font: "Rubik", size: 14, position: 'center'},
                Name: {color: "#ffffff", font: "FugazOne", size: 35},
                Subtitle: {color: "#86D8CA", font: "Rubik", size: 15},
                Text: {color: "#000000", font: "OpenSans", size: 10},
                Title: {color: "#d9d9d9", font: "OpenSans", size: "17"}   
            },
        }
    },
    {title: "triwave" ,image:"images/cvs/cv4.png",
        config: {
            avatar: "acronym", 
            template: "triwave", 
            settings: {
                Main: {color: "#1b1818", font: "Rubik", size: 20},
                Background: {color: "#000000", font: "", size: 0},
                Back1: {color: "#7DF901", font: "Rubik", size: 0},
                Back2: {color: "#000000", font: "Rubik", size: 0},
                LeftTitle: {color: "#7DF901", font: "Rubik", size: 16, position: 'center'},
                LeftText: {color: "#ffffff", font: "Rubik", size: 14, position: 'center'},
                Name: {color: "#7DF901", font: "Monoton", size: 25},
                Title: {color: "#484646", font: "Rubik", size: 20},
                Subtitle: {color: "#fafafa", font: "Rubik", size: 15},
                Text: {color: "#ffffff", font: "Rubik", size: 10},
                Extra: {color: "#908e8e", font: "Rubik", size: 18},
            },  
        }
    },
    {title: "triwave" ,image:"images/cvs/cv5.png",
    config: {
        avatar: "round", 
        template: "triwave", 
        settings: {
            Background: {color: "#faf9f9", font: "", size: 0},
            Back1: {color: "#014bf9", font: "Rubik", size: 0},
            Back2: {color: "#fafafa", font: "Rubik", size: 0},
            LeftTitle: {color: "#ffffff", font: "Rubik", size: 16, position: 'center'},
            LeftText: {color: "#ffffff", font: "Rubik", size: 14, position: 'center'},
            Main: {color: "#3d62b7", font: "Orbitron", size: 20},
            Name: {color: "#234bf9", font: "Orbitron", size: "27"},
            Title: {color: "#484646", font: "Roboto", size: 20},
            Subtitle: {color: "#3d62b7", font: "Roboto", size: 15},
            Text: {color: "#000000", font: "Roboto", size: 10},
            Extra: {color: "#030303", font: "Roboto", size: 18},
        },
        }
    },
    {title: "doublering" ,image:"images/cvs/cv7.png",
    config: {
        avatar: "acronym", 
        template: "doublering", 
        settings: {
            Background: {color: "#0b0b0a", font: "", size: 0},
            Back1: {color: "#01f9bb", font: "Rubik", size: 0},
            Back2: {color: "#a39f9f", font: "Rubik", size: 0},
            LeftTitle: {color: "#ffffff", font: "Rubik", size: 16, position: 'center'},
            LeftText: {color: "#ffffff", font: "Rubik", size: 14, position: 'center'},
            Main: {color: "", font: "Rubik", size: 20},
            Name: {color: "#fcfcfc", font: "Orbitron", size: 30},
            Title: {color: "#fcfcfc", font: "Rubik", size: 20},
            Subtitle: {color: "#a6a6a6", font: "Rubik", size: 15},
            Text: {color: "#ffffff", font: "Rubik", size: 10},
            Extra: {color: "#f2f2f2", font: "Rubik", size: 18},
        },
    }
    },
    {title: "square" ,image:"images/cvs/cv9.png",
    config: {
        avatar: "acronym", 
        template: "square", 
        settings: {
            Background: {color: "", font: "", size: 0},
            Back1: {color: "#4ed3ff", font: "Rubik", size: 0},
            Back2: {color: "#00b3ff", font: "Rubik", size: 0},
            Back3: {color: "#7a9bff", font: "Rubik", size: 0},
            Back4: {color: "#3dedff", font: "Rubik", size: 0},
            Main: {color: "", font: "Rubik", size: 0},
            LeftTitle: {color: "#ffffff", font: "Rubik", size: 16, position: 'center'},
            LeftText: {color: "#000000", font: "Rubik", size: 14, position: 'center'},
            Name: {color: "#ffffff", font: "Orbitron", size: 30},
            Title: {color: "#000000", font: "Rubik", size: 20},
            Subtitle: {color: "#000000", font: "Rubik", size: 15},
            Text: {color: "#000000", font: "Rubik", size: 10},
            Extra: {color: "#000000", font: "Rubik", size: 18},
        },
    }
    },
    {title: "gastown" ,image:"images/cvs/cv10.png",
    config: {
        avatar: "acronym", 
        template: "gastown", 
        settings: {
            Background: {color: "#ffffff", font: "", size: 0},
            Back1: {color: "#5f27cd", font: "Rubik", size: 0},
            Back2: {color: "#5f27cd", font: "Rubik", size: 0},
            Back3: {color: "#feca57", font: "Rubik", size: 0},
            Main: {color: "", font: "Rubik", size: 0},
            LeftTitle: {color: "#ffffff", font: "Rubik", size: 16, position: 'center'},
            LeftText: {color: "#ffffff", font: "Rubik", size: 14, position: 'center'},
            Name: {color: "#ffffff", font: "Arbutus", size: 40},
            Title: {color: "#000000", font: "Rubik", size: 20},
            Subtitle: {color: "#5f27cd", font: "Rubik", size: 15},
            Text: {color: "#000000", font: "Rubik", size: 10},
            Extra: {color: "#000000", font: "Rubik", size: 18},
        },
    }
    },
];
