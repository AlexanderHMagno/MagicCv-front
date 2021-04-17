import React from 'react';
import {StyleSheet, Svg, Defs, RadialGradient, Stop, G, Circle, Rect} from '@react-pdf/renderer';


const styles = StyleSheet.create({

      banner2:{
          position:'absolute',
          top: 0,
      },
      banner3:{
          position:'absolute',
          bottom: 100,
          right:0  
      },
      banner4:{
        position:'absolute',
        bottom: 0,
        right:0  
    },
})


const Background2 = ({color}) => {
    
    return (
        <>
        <Svg fixed style={styles.banner2} width="250" height="841"  >
            <G  >
                <Rect
                    
                    x="0"
                    y="0"
                    width="210"
                    height="100%"
                    
                    fill={color}
                />
            </G>
        </Svg>

        <Svg fixed style={styles.banner3} width="300">
            <Circle fillOpacity="0.5" fill={color} cx="350" cy="150" r="150" />
            <Circle fill="white" cx="350" cy="150" r="100" />
        </Svg>
        <Svg fixed style={styles.banner4} width="300">
            <Circle fillOpacity="0.1" fill={color} cx="350" cy="150" r="150" />
            <Circle fill="white" cx="350" cy="150" r="100" />
        </Svg>

    </>
    )
}



export default Background2;