import React, { useState, useEffect, Fragment } from 'react';

import {Table,TableRow,TableBody,TableCell, Typography,TextField } from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Box from '@material-ui/core/Box';
import { Carousel } from 'react-responsive-carousel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Card,Image } from 'semantic-ui-react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


//internals
import {TEMPLATEOPTIONS} from './templateOptions';
import {FONTS, POSITIONS} from './fontOptions';

import Loader from '../../../util/loader';







//Princpial Container
const Options = (({handleOption, options, setOptions}) => {
    const [expanded, setExpanded] = useState('template');
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


    return (
        <>
        {/* Templates */}
        <Accordion expanded={expanded === 'template'} onChange={handleAccordion('template')}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
            >
            <Typography >Templates</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Carousel showThumbs={false} infiniteLoop={true}>

                {TEMPLATEOPTIONS.map((element,index) => {
                    
                    return <div 
                        key={index}
                        className="cursor-pointer" 
                        onClick={()=> setOptions(element.config)}  
                            >
                            <Image src={element.image}  />
                    </div>
                })}
                </Carousel>     
            </AccordionDetails>
        </Accordion>

        {/* Colors */}
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
                                    <TableRow hover={true}  >
                                        
                                        <TableCell style={{borderBottom:"none"}}>
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
                                        </TableCell>
                                        <TableCell style={{borderBottom:"none"}}>
                                            <TextField  margin="none" size="small"  onChange={(e)=>handleOption({group:"settings",subGroup:item.label,setting:'size',value:e.target.value})} type="number" value={item.size}/>
                                        </TableCell>
                                        
                                            <TableCell  style={{borderBottom:"none"}}>
                                            {item.position && 
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
                                        }
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
    </>)
});


export default Options;