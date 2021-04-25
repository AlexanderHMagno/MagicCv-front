import React, {useState, useEffect} from 'react';
import Background1 from '../../backgrounds/background1';
import Background2 from '../../backgrounds/background2';
import Background3 from '../../backgrounds/background3';
import {createStyle} from './styles';
import Loader from '../../../../../util/loader';
import {dateFormatter} from '../../../../../util/types';


import { Page, Text, View, Document,PDFViewer, Image} from '@react-pdf/renderer';


const Template = ({options:{settings, template}}) => {
	
	switch (template.Principal.template) {
		case 'triwave':
			return <Background1 options={settings}/>
		case 'bluewave':
			return <Background2 options={settings}/>
		case 'topwave':
			return <Background3 options={settings}/>
		default:
			return <Background3/>
			break;
	}
}  

// Create Document Component
const MyDocument = ({info}) => {
const styles = createStyle(info.options);
const {address, first, last, bio,role, city, email, country,phone,picture_url,experience,education,volunteer,skills} = info.info || {};
	
return (
  <Document>
    <Page size="A4" style={styles.page}>
		
		{/* Backgrounds */}
		<Template options={info.options}/>
		{/* Structure */}
		<View style={styles.flexColumns}>
			{/* Left Column */}
			<View  style={styles.leftColumn}>
				
				{(info.options.display.Avatar.picture ==='photo') && picture_url  ?
					<Image fixed src={picture_url} style={styles.avatar}/>
					:<Text fixed style={styles.textAvatar}>{first[0]}{last[0]}</Text>
				}	
				
				<Text style={styles.leftTitle}>About Me</Text>
				<Text style={styles.leftExtra}>{bio}</Text>

				<Text style={styles.leftTitle}>Skills</Text>
				{skills && skills.map((skill, index) => {
					return <Text style={styles.leftExtra} key={index}>{skill.label}</Text>
				})}

				<Text style={styles.leftTitle}>Contact Me At:</Text>
				<Text style={styles.leftExtra}>Phone: {phone}</Text>
				<Text style={styles.leftExtra}>Email: {email}</Text>
				{address && <Text style={styles.leftExtra}>{address}</Text>}
				{city && <Text style={styles.leftExtra}>{city},{country}</Text>}
				
			</View>
			
			{/* Right Column */}
			<View style={styles.rightColumn}>

			<Text style={styles.name}>{first} {last}</Text>
			<Text style={styles.position}>{role}</Text>



			{/* Experience */}
				{experience && <Text style={styles.group}>Experience</Text>}
				{experience && experience.map((exp, ind) => {
					const endDate = dateFormatter(exp.endMonth,exp.endYear);
					const dates = `${dateFormatter(exp.startMonth,exp.startYear)} -  ${exp.current? 'Present' : endDate}`;
					return (
					<View key={ind}>
							<Text style={styles.title}>{exp.title}</Text>
							<View style={styles.jobInfo}>
								<Text style={styles.extra}>{exp.company}</Text>
								<Text style={styles.jobDates}>{dates}</Text>
							</View>
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
	
	const [loading, setLoading] = useState(true);
	
	useEffect(()=> {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 1200);
	}, [info]);

	
	return (
		<>
		{loading && <Loader/>}
		<PDFViewer  height="100%" width="100%">
			<MyDocument info={info} name={"alex"}/>
		</PDFViewer>
		</>
	)
}

export default DOMRENDER;

