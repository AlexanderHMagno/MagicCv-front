import React, {useState} from 'react';
import {Grid, Search, Segment, Header} from 'semantic-ui-react';



const Skills = () => {

    const isLoading  = false;
    const results = [];
    const [value, setValue] = useState("");


    return (
        <Grid>
        <Grid.Column width={12}>
          <Search
            input={{ icon: 'search', iconPosition: 'left' }}
            loading={isLoading}
            onResultSelect={()=>console.log(value)}
            onSearchChange= {(a) => setValue(a.target.value)}
            results={[{title:value}]}
            value={value}
            fluid
          />
        </Grid.Column>
        <Grid.Column width={10}>
            <span className="badge primary">
                {value}
            </span>
        </Grid.Column>
      </Grid>
    )
}



export default Skills;