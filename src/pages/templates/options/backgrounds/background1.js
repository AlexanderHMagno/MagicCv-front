import React from 'react';
import {StyleSheet, Svg, Ellipse, G, Circle, Rect} from '@react-pdf/renderer';




const Background1 = ({color}) => {

const styles = StyleSheet.create({

    banner1: { 
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
      }
})
    return (
        <>
        <Svg fixed style={styles.banner3} width="300">
            <Circle fillOpacity="0.5" fill="rgb(252,234,143)" cx="350" cy="150" r="150" />
            <Circle fill="white" cx="350" cy="150" r="100" />
        </Svg>
        <Svg  fixed style={styles.banner2} width="400" height="100%"  viewBox="0 0 400 650">
            <G  stroke-width="5">
                <Circle fill={color} cx="110" cy="100" r="100" />
                <Rect
                    style={styles.banner2} 
                    x="10"
                    y="100"
                    width="200"
                    height="100%"
                    fill={color}
                />
            </G>
        </Svg>

        <Svg fixed style={styles.banner1} width="400" height="100%"  viewBox="0 0 400 600">
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
    </>
    )
}



export default Background1;