import React, {useState, useEffect} from 'react';
import Background1 from './background1';
import Background2 from './background2';
// import {styles} from '../../styles';
import Loader from '../../../../util/loader';


import { Page, Text, View, Document, StyleSheet,PDFViewer, Image, Svg, Ellipse, G, Circle, Rect, Path, RadialGradient, Mask, Stop} from '@react-pdf/renderer';


// Create Document Component
const MyDocument = ({info}) => {

	const {color = 'hsl(9,82%,66%)', template} = info.options  ;
	let backgroundElected = <Background1 color={color}/>;
	
	switch (template) {
		case 'back2':
			backgroundElected = <Background2 color={color}/>
			break;
		default:
			break;
	}
	

// Create styles
const styles = StyleSheet.create({
	page: {
	  paddingTop: 20,
	  backgroundColor: 'white',
	  minHeight: '100%'
	},
	avatar : {

		borderRadius : '50%',
		width:150,
		height:150,
		marginLeft: 0,
		marginBottom: 20
	},
	leftTitle: {
	  margin: '30 0 10 0',
	  fontSize: '18px',
	  color: 'white'
	},
	leftExtra: {
	  opacity: '0.7',
	  lineHeight: 1,
	  marginTop:	5,
	  fontSize: 15,
	  color: 'white'
	},
	name: {
		marginTop: 30,
		fontSize: 35,
		fontWeight: 'extrabold',
		color: color,
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
	  
	  },
	rightColumn :{
		maxWidth: "55%",
		minWidth: "55%",
		marginLeft: '4%',
		marginTop: '20px',
	},
	group: {
		color: color,
	  fontSize: 20,
	  margin: "5 0"
	},
	title :{ 
		  color: 'hsl(169,60%,61%)',
		  fontSize: 15,
		  margin: '5 0'
	  },
	  extra : {
		  fontWeight: 'bold',
		  fontSize: 12,
		  margin: '5 0'
	  },
	  description : {
		  fontSize: 10,
		  opacity:0.7,
		  paddingLeft: 10
	  },
	  flexColumns : {
		  flexDirection: 'row'
	  }
  });
  


const {address, first, last, bio, city, country,phone,picture_url,experience,education,volunteer,skills} = info.info || {};
	
return (
  <Document>
    <Page size="A4" style={styles.page}>
		{/* <Svg style={styles.svgBack} > */}
		{backgroundElected}
		<View style={styles.flexColumns}>
			
			{/* Left Column */}
			<View  style={styles.leftColumn}>
				
				{picture_url && <Image fixed src={picture_url} style={styles.avatar}/>}
				<Text style={styles.leftTitle}>About Me</Text>
				<Text style={styles.leftExtra}>{bio}</Text>

				<Text style={styles.leftTitle}>Skills</Text>
				{skills && skills.map((skill, index) => {
					return <Text style={styles.leftExtra} key={index}>{skill.label}</Text>
				})}

				<Text style={styles.leftTitle}>Contact Me At:</Text>
				<Text style={styles.leftExtra}>Phone: {phone}</Text>
				<Text style={styles.leftExtra}>Email: ...</Text>
				
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
				{education && <Text break style={styles.group}>Education</Text>}
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

