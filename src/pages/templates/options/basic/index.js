import React from 'react';
import {defaultOption, Drastical} from './background';
// import {styles} from '../../styles';
import Loader from '../../../../util/loader';


import { Page, Text, View, Document, StyleSheet,PDFViewer, Image, Svg, Ellipse, G, Circle, Rect, Path, RadialGradient, Mask, Stop} from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
	backgroundColor: 'white',
	minHeight: '100%'
  },
  svgBack: { 

	  position:"absolute",
	  top: 0,
	  left: -50,
	},
	banner2:{
		position:'absolute',
		top: 190,
	},
	banner3:{
		position:'absolute',
		bottom: 100,
		right:0
		
	},
  avatar : {
	  borderRadius : '50%',
	  width:150,
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
	  color: 'hsl(9,82%,66%)',
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
	color: 'hsl(9,82%,66%)',
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
		{/* <Svg style={styles.svgBack} > */}
		<Svg style={styles.banner3} width="300">
			<Circle fillOpacity="0.5" fill="rgb(252,234,143)" cx="350" cy="150" r="150" />
			<Circle fill="white" cx="350" cy="150" r="100" />
		</Svg>
		<Svg  style={styles.banner2} width="400" height="100%"  viewBox="0 0 400 650">
		<G  stroke-width="5">
			<Circle fill="hsl(169,60%,61%)" cx="110" cy="100" r="100" />
			<Rect
				style={styles.banner2} 
				x="10"
				y="100"
				width="200"
				height="100%"
				fill="hsl(169,60%,61%)"
			/>

			</G>
		</Svg>

		<Svg style={styles.svgBack} width="400" height="100%"  viewBox="0 0 400 600">
			<G stroke-width="5">
			<Ellipse
				cx="162"
				cy="95"
				rx="85"
				ry="85"
				fill="hsl(9,82%,66%)"
				/>
			<Circle fillOpacity="0.5" fill="rgb(252,234,143)" cx="20" cy="150" r="180" />
			<Circle fill="white" cx="15" cy="150" r="70" />

			
			</G>
		</Svg>


		<View style={styles.flexColumns}>
			
			{/* Left Column */}
			<View style={styles.leftColumn}>
				{picture_url && <Image src={picture_url} style={styles.avatar}/>}
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

