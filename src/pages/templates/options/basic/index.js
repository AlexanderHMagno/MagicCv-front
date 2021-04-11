import React from 'react';
import {defaultOption, Drastical, Polygon} from './background';
import {styles} from '../../styles';

export const basicBlue = ({data, option}) => {

    let svg = defaultOption;

    if (option === 'Drastical') svg = Drastical;
	if (option === 'Polygon') svg = Polygon;
	
	const {address, first, last, bio, city, country,phone,picture_url,experience,education,volunteer,skills} = data.getProfile || {};
    console.log({data});
    return {background: function(currentPage, pageSize) {
        return {svg}
		
        // return `page ${currentPage} with size ${pageSize.width} x ${pageSize.height}`
    },
	content: [
	    {image: 'profile'},
		{text: first , style: 'header'},
		{text: last, style:'header2', alignment:'right'},
		{text: bio},
		
	    { qr: `Name: ${first} ${last} \nNumber:7787518081\nResume:"www.magiccv.com/${first}"`, fit:"100" },	
	],
	images : 
	{
		profile:picture_url
	},
	watermark: { text: 'Magic Cv', color: 'blue', opacity: 0.3, bold: true, italics: false },
	styles,
	defaultStyle: {
		// alignment: 'justify'
    }
}
}