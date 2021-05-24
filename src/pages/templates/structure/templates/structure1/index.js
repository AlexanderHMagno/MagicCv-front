import React, {useState, useEffect} from 'react';
import Background1 from '../../backgrounds/background1';
import Background2 from '../../backgrounds/background2';
import Background3 from '../../backgrounds/background3';
import Background4 from '../../backgrounds/background4';
import Background5 from '../../backgrounds/background5';
import Background6 from '../../backgrounds/background6';

import {createStyle} from './styles';
import Loader from '../../../../../util/loader';
import {dateFormatter} from '../../../../../util/types';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ErrorIcon from '@material-ui/icons/Error';


import { Page, Text, View, Document,PDFViewer, Image, PDFDownloadLink} from '@react-pdf/renderer';


const Template = ({options:{settings, template}}) => {
	
	switch (template.Principal.template) {
		case 'triwave':
			return <Background1 options={settings}/>
		case 'bluewave':
			return <Background2 options={settings}/>
		case 'topwave':
			return <Background3 options={settings}/>
		case 'doublering':
			return <Background4 options={settings}/>
		case 'square':
			return <Background5 options={settings}/>
		case 'gastown':
			return <Background6 options={settings}/>
		default:
			return <Background3/>
			break;
	}
}  

// Create Document Component
const MyDocument = ({info, agua}) => {
const styles = createStyle(info.options);
const {address, first, last, bio,role, city, email, country,phone,picture_url,experience,education,volunteer,skills} = info.info || {};
const acronyms = ['acronym','acronym2'];
console.log({picture_url});

return (
  <Document>
    <Page size="A4" style={styles.page}>
	 
		{/* Backgrounds */}
		<Template options={info.options}/>
		{/* Structure */}
		<View style={styles.flexColumns}>
			{/* Left Column */}
			<View  style={styles.leftColumn}>
				
				{(!acronyms.includes(info.options.display.Avatar.picture)) && picture_url  ?
					<Image fixed source={{uri:picture_url}} style={styles.avatar}/>
					:<View fixed style={styles.backAvatar}><Text style={styles.textAvatar}>{first[0]}{last[0]}</Text></View>
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
		{/* Agua */}
		{agua && <Text fixed style={styles.agua}>Magic Cv</Text>}
		{/* Brand */}
		<Text fixed style={styles.brand}>Made by Magic Cv</Text>
    </Page>
  </Document>
)
};


const DOMRENDER = (info) => {
	
	const [loading, setLoading] = useState(true);
	const {first ="document", last} = info.info || {};
	const documentFile = `${first}_${last}_cv`;
	
	useEffect(()=> {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 1200);
	}, [info]);

	
	return (
		<>
		{loading && <Loader/>}
		
		<div className="sm:h-full flex flex-col-reverse">
			<div className="h-0 hidden sm:block sm:h-full">
				<PDFViewer  height="100%" width="100%">
					<MyDocument info={info} agua={true}/>
				</PDFViewer>
			</div>
			<div className="flex justify-evenly">
				<PDFDownloadLink fileName={`preview_${documentFile}`} document={<MyDocument info={info} agua={true}/>}>
					{<Button info={info} variant="contained" color="secondary" component="span" style={{margin:20}}>
						Preview Your Cv
					</Button>}
				</PDFDownloadLink>
				<PDFDownloadLink fileName={documentFile} document={<MyDocument info={info} agua={false}/>}>
					<Button  info={info} variant="contained" color="primary" component="span" style={{margin:20}}>
						Dowload Your Cv
					</Button>
				</PDFDownloadLink>
				
			</div>
			<div className="sm:hidden">
				<Typography variant="h6" component="h2" gutterBottom color="primary" align="center"> 
					<ErrorIcon/> To preview your Cv, we recommend to use a computer.
				</Typography>
			</div>
		</div>
		

		
		</>
	)
}

export default DOMRENDER;

