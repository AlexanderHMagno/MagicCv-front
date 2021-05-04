import React from 'react';
import {StyleSheet, Svg, Ellipse, G, Circle, Rect} from '@react-pdf/renderer';





const Background4 = ({options}) => {
const {Main,Background, Back1,Back2} = options|| {};

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
        <Svg  fixed style={styles.banner3} width="600">
            <Circle fillOpacity="0.4" fill={Back1.color} cx="492.5" cy="107.5" r="315" />
            <Circle fill={Background.color} cx="495" cy="105" r="310" />
            <Circle fillOpacity="0.4" fill={Back1.color} cx="500" cy="100" r="300" />
            
        </Svg>
        <Svg fixed style={styles.banner2} width="600">
        <Circle fillOpacity="0.4" fill={Back2.color} cx="107.5" cy="492.5" r="315" />
            <Circle fill={Background.color} cx="105" cy="495" r="310" />
            <Circle fillOpacity="0.4" fill={Back2.color} cx="100" cy="500" r="300" />
            
            
            {/* <Circle fill={Background.color} cx="350" cy="100" r="150" /> */}
        </Svg>
        {/* <Svg  fixed style={styles.banner2} width="400" height="100%"  viewBox="0 0 400 650">
            <G  stroke-width="5">
                <Circle fill={Main.color} cx="110" cy="100" r="100" />
                <Rect
                    style={styles.banner2} 
                    x="10"
                    y="100"
                    width="200"
                    height="100%"
                    fill={Main.color}
                />
            </G>
        </Svg> */}

        {/* <Svg fixed style={styles.banner1} width="400" height="100%"  viewBox="0 0 400 600">
            <G stroke-width="5">
            <Ellipse
                cx="162"
                cy="95"
                rx="85"
                ry="85"
                fill={Back2.color}
                />
            <Circle fillOpacity="0.5" fill={Back1.color} cx="20" cy="150" r="180" />
            <Circle fill={Background.color} cx="15" cy="150" r="70" />
            </G>
        </Svg> */}
    </>
    )
}



export default Background4;