import React from 'react';
import {StyleSheet, Svg, Ellipse, G, Circle, Rect, Polygon} from '@react-pdf/renderer';



const Background5 = ({options}) => {
const {Main,Background, Back1,Back2, Back3, Back4} = options|| {};

const styles = StyleSheet.create({

    banner1: { 
        position:"absolute",
        top: 0,
        left: -50,
      },
      banner2:{
          position:'absolute',
          bottom: 0,
      },
      banner3:{
          position:'absolute',
          top: 0,
          right:0  
      }
})
    return (
        <>
        <Svg fixed style={styles.banner3} width="600" height="850">
            {/* <Circle fillOpacity="0.4" fill={Back1.color} cx="492.5" cy="107.5" r="315" />
            <Circle fill={Background.color} cx="495" cy="105" r="310" />
            <Circle fillOpacity="0.4" fill={Back1.color} cx="500" cy="100" r="300" /> */}
            <Polygon
                points="0,300 0,0 300,0 400,300 300,400"
                fill={Back1.color}
                stroke={Back1.color}
                
                />
             <Polygon
                points="300,0 600,0 600,450 300,400 400,300"
                fill={Back2.color}
                stroke={Back2.color}
                
                />
                <Polygon
                points="0,300 300,400 200,600 500,850 0,850"
                fill={Back3.color}
                stroke={Back3.color}
                
                />
                
                  <Polygon
                points="300,400 600,450 600,850 500,850 200,600"
                fill={Back4.color}
                stroke={Back4.color}
                
                />
            
        </Svg>
    </>
    )
}



export default Background5;