
import StyleSheet from '../../../fonts';

export const createStyle = (options) => {
	const {settings,avatar} = options || {};
	const photo = {
		round: "50%",
		square: "5%"
	}
	const acronym = {
		acronym : {color:'white',backgroundColor:'transparent'},
		acronym2 : {color:'black',backgroundColor:settings.Name.color},
	}
	
	const acronymSelected = acronym[avatar];

	return StyleSheet.create({
	page: {
	  paddingTop: 20,
	  minHeight: '100%',
	  fontFamily: settings.Main.font,
	  fontSize: settings.Main.size,
	  backgroundColor: settings.Background.color
	},
	agua: {
		position: "absolute",
		top : "300",
		left: "100",
		fontSize: 100,
		color: settings.Name.color,
		opacity: 0.2,
		transform: "rotate(-45deg)",
	},
	brand: {
		position: "absolute",
		bottom : "10",
		left: "10",
		fontSize: 15,
		fontFamily: "Monofett", 
		color: settings.Name.color,
		opacity: 0.3,
	},
	avatar : {
		borderRadius : photo[avatar] ?? 0,
		width:150,
		marginLeft: -5,
		height:150,
		marginBottom: 20,
	},
	backAvatar: {
		backgroundColor: acronymSelected ? acronym[avatar].backgroundColor : "transparent",
		borderRadius: "5%",
		margin: "35 0 50 -15"
	},
	textAvatar: {
		fontSize: '75',
		color: acronymSelected ? acronym[avatar].color : "transparent",
		opacity:0.5,
		padding: 10

	}
	,
	leftTitle: {
	  margin: '30 0 10 0',
	  fontSize: settings.LeftTitle.size,
	  color: settings.LeftTitle.color,
	  fontFamily: settings.LeftTitle.font,
	  alignSelf: settings.LeftTitle.position
	},
	leftExtra: {
	  opacity: '0.7',
	  lineHeight: 1,
	  marginTop:	5,
	  fontSize: settings.LeftText.size - 2,
	  color: settings.LeftText.color,
	  fontFamily: settings.LeftText.font,
	  alignSelf: settings.LeftText.position
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