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


const Background2 = ({color, backgroundColor}) => {
    
    return (
        <>
        <Svg style={styles.banner2} width="800" height="841"  >
            <G>
                <Rect
                    
                    x="0"
                    y="0"
                    width="800"
                    height="150"
                    fill={color}
                />
                <Circle fillOpacity="1" fill={color} cx="210" cy="150" r="50" />
                <Circle fillOpacity="1" fill='white' cx="261" cy="200" r="50" />
            </G>

        </Svg>
        <Svg fixed style={styles.banner2} width="800" height="841"  >
            <G >
                <Rect
                    
                    x="0"
                    y="0"
                    width="210"
                    height="100%"
                    
                    fill={color}
                />
            </G>
        </Svg>

    </>
    )
}



export default Background2;