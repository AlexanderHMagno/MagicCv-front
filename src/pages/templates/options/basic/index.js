import React from 'react';
import {defaultOption, Drastical} from './background';
// import {styles} from '../../styles';
import Loader from '../../../../util/loader';


import { Page, Text, View, Document, StyleSheet, PDFViewer, Image, Svg, Polygon, G} from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
	backgroundColor: 'white',
  },
  svgBack: { 
	  width: 400, 
	  height: 400,
	  position:"absolute",
	  top: 200,
	  left: -20
	},
  avatar : {
	  borderRadius : '50%',
	  width:150,
	  marginLeft: 0,
	  marginBottom: 20
  },
  leftTitle: {
	  margin: '30 0 10 0',
	 fontSize: '15px'
  },
  name: {
	  marginTop: 30,
	  fontSize: 35,
	  fontWeight: 'bold',
	  color: 'orange',
  },
  position: {
	marginBottom: 50
  },
  bio: {
	fontStyle: 'italic',
	color:'grey',
	opacity: '0.5',
	lineHeight: 1,
	marginTop:	5,
	fontSize: 15,
  },
  leftColumn :{
	maxWidth: "30%",
	minWidth: "30%",
	marginLeft: '4%',
	flexDirection: 'column',
	alignItems: 'center',
	marginTop: '20px'
	},
  rightColumn :{
	  maxWidth: "55%",
	  minWidth: "55%",
	  marginLeft: '4%',
	  marginTop: '20px'
  },
  group: {
	color: 'orange',
	fontSize: 20,
	margin: "5 0"
  },
  title :{ 
		color: 'green',
		fontSize: 15,
		margin: '5 0'
	},
	extra : {
		fontWeight: 'bold',
		fontSize: 12,
		margin: '5 0'
	},
	description : {
		fontSize: 10
	},
	flexColumns : {
		flexDirection: 'row'
	}
});

// Create Document Component
const MyDocument = ({info,name}) => {

const {address, first, last, bio, city, country,phone,picture_url,experience,education,volunteer,skills} = info.info || {};
	
return (
  <Document>
    <Page size="A4" style={styles.page}>
		<Svg style={styles.svgBack} >
		
		</Svg>

		<View style={styles.flexColumns}>
			
			{/* Left Column */}
			<View style={styles.leftColumn}>
				{picture_url && <Image src={picture_url} style={styles.avatar}/>}
				<Text style={styles.leftTitle}>About Me</Text>
				<Text style={styles.bio}>{bio}</Text>

				<Text style={styles.leftTitle}>Skills</Text>
				{skills && skills.map((skill, index) => {
					return <Text style={styles.bio} key={index}>{skill.label}</Text>
				})}

				<Text style={styles.leftTitle}>Contact Me At:</Text>
				<Text style={styles.bio}>Phone: {phone}</Text>
				<Text style={styles.bio}>Email: ...</Text>
				
			</View>
			
			{/* Right Column */}
			<View style={styles.rightColumn}>

			<Text style={styles.name}>{first} {last}</Text>
			<Text style={styles.position}>Software Developer</Text>



			{/* Experience */}
				{experience && <Text style={styles.group}>Experience</Text>}
				{experience && experience.map((exp, ind) => {
					return (
					<View key={ind}>
							<Text style={styles.title}>{exp.title}</Text>
							<Text style={styles.extra}>{exp.company}</Text>
							<Text style={styles.description}>{exp.description}</Text>
					</View>
					)

				})}
				{education && <Text style={styles.group}>Education</Text>}
					{education && education.map((exp, ind) => {
						return (
						<View key={ind}>
								<Text style={styles.title}>{exp.degree}</Text>
								<Text style={styles.extra}>{exp.school}</Text>
								<Text style={styles.description}>{exp.description}</Text>
						</View>
						)

					})}
			</View>
	
		</View>
	  
    </Page>
  </Document>
)
};


const DOMRENDER = (info) => {

	return (
		<PDFViewer height="100%" width="100%">
			<MyDocument info={info} name={"alex"}/>
		</PDFViewer>
	)
}

export default DOMRENDER;


// export const basicBlue = ({data, option}) => {

//     let svg = defaultOption;

//     if (option === 'Drastical') svg = Drastical;
// 	if (option === 'Polygon') svg = Polygon;
	
// 	const {address, first, last, bio, city, country,phone,picture_url,experience,education,volunteer,skills} = data.getProfile || {};
//     console.log({data});
//     return {background: function(currentPage, pageSize) {
//         return {svg}
		
//         // return `page ${currentPage} with size ${pageSize.width} x ${pageSize.height}`
//     },
// 	content: [
// 	    {image: 'profile'},
// 		{text: first , style: 'header'},
// 		{text: last, style:'header2', alignment:'right'},
// 		{text: bio},
		
// 	    { qr: `Name: ${first} ${last} \nNumber:7787518081\nResume:"www.magiccv.com/${first}"`, fit:"100" },	
// 	],
// 	images : 
// 	{
// 		profile:picture_url
// 	},
// 	watermark: { text: 'Magic Cv', color: 'blue', opacity: 0.3, bold: true, italics: false },
// 	styles,
// 	defaultStyle: {
// 		// alignment: 'justify'
//     }
// }
// }