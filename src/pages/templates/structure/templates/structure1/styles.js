
import StyleSheet from '../../../fonts';

export const createStyle = (options) => {
	const {settings,display} = options || {};
	const photo = {
		round: "50%",
		square: "5%"
	}


	return StyleSheet.create({
	page: {
	  paddingTop: 20,
	  minHeight: '100%',
	  fontFamily: settings.Main.font,
	  fontSize: settings.Main.size,
	  backgroundColor: settings.Background.color
	},
	avatar : {
		borderRadius : photo[display.Avatar.picture] ?? 0,
		width:150,
		marginLeft: -5,
		height:150,
		marginBottom: 20,
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
		fontSize: settings.Name.size,
		fontWeight: 'extrabold',
		color: settings.Name.color,
		fontFamily: settings.Name.font,
		lineHeight:1.5
	},
	position: {
	  marginBottom: 50,
	  color: settings.Title.color,
	  fontSize: settings.Title.size,
	  fontFamily: settings.Title.font,
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
		color: settings.Extra.color,
	  	fontSize: settings.Extra.size,
	  	margin: "5 0"
	},
	
	title :{ 
		  color: settings.Subtitle.color,
		  fontSize: settings.Subtitle.size,
		  fontFamily: settings.Subtitle.font,
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
		opacity: 0.5,
		marginLeft: 5,
		fontSize: settings.Extra.size - 8,
		color: settings.Extra.color
	},
	  extra : {
		  fontWeight: 'bold',
		  fontSize: settings.Extra.size - 6,
		  color: settings.Extra.color
	  },
	  description : {
		  fontSize: settings.Text.size,
		  paddingLeft: 10,
		  color: settings.Text.color,
		  fontFamily: settings.Text.font
	  },
	  flexColumns : {
		  flexDirection: 'row'
	  }
  })
};