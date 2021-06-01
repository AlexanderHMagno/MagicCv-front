import React, { useState, useEffect, Fragment } from 'react';

import {Table,TableRow,TableBody,TableCell, Typography,TextField, Button } from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import InputLabel from '@material-ui/core/InputLabel';
import { Carousel } from 'react-responsive-carousel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Card,Image } from 'semantic-ui-react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import LateralOption from './lateralOptionNav';


//internals
import {TEMPLATEOPTIONS} from './templateOptions';
import {FONTS, POSITIONS} from './fontOptions';

import Loader from '../../../util/loader';







//Princpial Container
const Options = (({handleOption, options, setOptions}) => {
    const [expanded, setExpanded] = useState('template');
    const [tem, setTem] = useState(0);
    const {settings, display,template:{Principal}} = options || {};
    const [Loading, setLoading] = useState(true);
    
    // Load On Change
    useEffect(()=> { setLoading(true)
        setTimeout(() => {
            setLoading(false);    
        }, 200);
    },[Principal])


    //Create Color Array
    const COLOROPTIONS = Object.entries(settings).map((element => {
        return {label:element[0],value:element[1].color}
    }))

    //Create font and Size array, size must be greater than zero
    const TEXTOPTIONS = Object.entries(settings).map((element => {
        return {label:element[0],font:element[1].font,size: element[1].size, position: element[1].position??"" }
    }))
    

    
    const handleAccordion = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    }

    const handleButton = (config, index) => {
        setOptions(config);
        setTem(index);
    }


    return (
        <>
        { Loading && <Loader/>}
        
        <LateralOption>
            <Accordion expanded={expanded === 'colors'} onChange={handleAccordion('colors')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                >
                <Typography >Colors</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Card.Description> 
                { Loading ? <Loader/> :<Table>
                        <TableBody>
                            {COLOROPTIONS.filter((item)=> item.value !== "").map((item,index) => {
                                return (
                                    <TableRow hover={true} key={index}>
                                        <TableCell style={{borderBottom:"none"}}>
                                            <label>{item.label}</label>
                                        </TableCell>
                                        <TableCell align="left" style={{borderBottom:"none"}}>
                                            <input onChange={(e)=>handleOption({group:"settings",subGroup:item.label,setting:'color',value:e.target.value})} type="color" defaultValue={item.value}/>
                                        </TableCell>
                                    </TableRow>
                                    )
                            })}
                        </TableBody>
                    </Table>
                }
                </Card.Description> 
            
                </AccordionDetails>
            </Accordion>
            
            {/* Fonts */}
            <Accordion expanded={expanded === 'Fonts'} onChange={handleAccordion('Fonts')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                >
                <Typography >Fonts</Typography>
                </AccordionSummary>
                <AccordionDetails>
                
                {   Loading ? <Loader/> : <Table>
                        <TableBody>
                            
                                {TEXTOPTIONS.filter((item)=> item.size > 0).map((item,index) => {
                                    return (
                                        <Fragment key={index}>
                                        <TableRow style={{background:"lightgray"}}>
                                            <TableCell size="small" colSpan="3" style={{textAlign:"center",borderBottom:"none"}}>
                                                <label>{item.label}</label>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow hover={true} style={{display:'flex',flexDirection:'column'}}>
                                            
                                            <TableCell style={{borderBottom:"none"}}>
                                                <div className="flex justify-between">
                                                    <div>
                                                        <InputLabel>Font</InputLabel>
                                                        <Select   
                                                            value={item.font}
                                                            onChange={(e)=> 
                                                                handleOption(
                                                                    {group:"settings",
                                                                    subGroup:item.label,
                                                                    setting:'font',
                                                                    value:e.target.value})}  
                                                            >
                                                            {
                                                                FONTS.map((item) => 
                                                                    <MenuItem key={item.key} value={item.value}>
                                                                        {item.text}
                                                                    </MenuItem> )
                                                            } 
                                                        </Select>
                                                    </div>

                                                    
                                                    {item.position && 
                                                        <div>
                                                        <InputLabel>Location</InputLabel>
                                                        <Select   
                                                                value={item.position}
                                                                onChange={(e)=> 
                                                                    handleOption(
                                                                        {group:"settings",
                                                                        subGroup:item.label,
                                                                        setting:'position',
                                                                        value:e.target.value})}  
                                                                >
                                                                {
                                                                    POSITIONS.map((item) => 
                                                                        <MenuItem key={item.key} value={item.value}>
                                                                            {item.text}
                                                                        </MenuItem> )
                                                                } 
                                                            </Select>
                                                        </div>
                                                    }   
                                                </div>
                                                <div className="mt-4">
                                                    <InputLabel>Size</InputLabel>
                                                    <TextField  style={{width:60}} margin="none" size="small"  onChange={(e)=>handleOption({group:"settings",subGroup:item.label,setting:'size',value:e.target.value})} type="number" value={item.size}/>
                                                </div>
                                                
                                            </TableCell>
                                        </TableRow>
                                    </Fragment>
                                        )
                            })}
                        </TableBody>
                    </Table>
                }
            
                </AccordionDetails>
            </Accordion>
            
            {/* Display */}
            <Accordion expanded={expanded === 'Display'} onChange={handleAccordion('Display')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
                >
                <Typography >Display</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Table>
                        <TableBody>
                            <TableRow hover={true}>
                                <TableCell style={{borderBottom:"none"}}>
                                    <label>Picture</label>
                                </TableCell>
                                <TableCell style={{borderBottom:"none"}}>
                                <Select  
                                    labelId="name-font-selection" 
                                    value={display.Avatar.picture}
                                    onChange={e =>  handleOption(
                                        {group:"display",
                                        subGroup:'Avatar',
                                        setting:'picture',
                                        value:e.target.value})}  
                                >
                                    {   
                                        [{key:'1',value: 'acronym', text:'Acronym'},
                                        {key:'2',value: 'acronym2', text:'Acronym 2'},
                                        {key:'3',value: 'round', text:'Rounded'},
                                        {key:'4',value: 'square', text:'Squared'},
                                        
                                    ].map((item) => 
                                            <MenuItem 
                                                key={item.key} 
                                                value={item.value}>
                                                    {item.text}
                                            </MenuItem> )
                                    } 
                                </Select>
                                </TableCell>
                            
                            </TableRow>
                        </TableBody>
                    </Table>
                </AccordionDetails>
            </Accordion> 
        </LateralOption>

        {/* Templates */}
        <div className=" pt-5">
            <Carousel showThumbs={false} infiniteLoop={true} autoPlay={false}>

                {TEMPLATEOPTIONS.map((element,index) => {
                    const selected = tem === index;
                    return <div 
                        key={index}
                        className="m-auto w-9/12  md:w-full"  
                            >
                            <Image src={element.image}  />
                            <Button 
                            size="large"
                            style={{position:'absolute', bottom: 50,left:0, right:0,margin:'auto'}}
                            onClick={()=> handleButton(element.config, index)}
                            variant="contained" color={selected ? 'primary' : 'disabled'}>
                                {selected? 'Selected': 'select'}
                            </Button>
                             

                    </div>
                })}
            </Carousel>     
        </div>
        {/* Colors */}
    </>)
});


export default Options;