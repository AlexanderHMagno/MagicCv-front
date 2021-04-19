
import {  StyleSheet} from '@react-pdf/renderer';

export const createStyle = (color,template) => {
	
	const titleColor = template === 'topwave' ? 'white' : color;
	
	return StyleSheet.create({
	page: {
	  paddingTop: 20,
	  backgroundColor: 'white',
	  minHeight: '100%',
	},
	avatar : {

		borderRadius : '50%',
		width:150,
		height:150,
		marginLeft: 0,
		marginBottom: 20
	},
	textAvatar: {
		fontSize: '75',
		paddingTop: '35',
		color: 'white',
		opacity:0.2,
		marginBottom:75
	}
	,
	leftTitle: {
	  margin: '30 0 10 0',
	  fontSize: 14,
	  color: 'white'
	},
	leftExtra: {
	  opacity: '0.7',
	  lineHeight: 1,
	  marginTop:	5,
	  fontSize: 12,
	  color: 'white'
	},
	name: {
		marginTop: 30,
		fontSize: 35,
		fontWeight: 'extrabold',
		color: titleColor,
	},
	position: {
	  marginBottom: 50,
	  color: titleColor,
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
	  fontSize: 18,
	  margin: "5 0"
	},
	title :{ 
		  color: 'hsl(169,60%,61%)',
		  fontSize: 15,
		  marginTop: 10,
		  marginBottom:4
	  },
	jobInfo: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'flex-end',
		justifyContent: 'flex-start',
		marginBottom: 5		
	},
	jobDates: {
		fontSize: 10,
		opacity: 0.5,
		marginLeft: 5,	
	},
	  extra : {
		  fontWeight: 'bold',
		  fontSize: 12,
		  
	  },
	  description : {
		  fontSize: 10,
		  opacity:0.7,
		  paddingLeft: 10
	  },
	  flexColumns : {
		  flexDirection: 'row'
	  }
  })
};