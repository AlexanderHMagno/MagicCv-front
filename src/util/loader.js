import React from 'react';
import {Dimmer, Image} from 'semantic-ui-react';


const Load = () => {
    return ( 
        <Dimmer active inverted>
            {/* <Loader inverted>Loading</Loader> */}
            <Image size="tiny" className="animate-ping" src='/images/cv.png' />
        </Dimmer>);
} 


export default Load;