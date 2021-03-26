import React, {useState} from 'react';
import {Grid, Search, Segment, Header} from 'semantic-ui-react';



const Skills = () => {

    const isLoading  = false;
    const results = [];
    const [value, setValue] = useState("");
    const [selected, setSelected] =  useState({});

    const AddSelectedToArray = () => {
      if (value) {
        setSelected({...selected, [value]:value});
        setValue("");
      }
    }

    const removeElement = skill => {
      let newSelected = {...selected};
      delete newSelected[skill];
      setSelected(newSelected);
    }

    const onEnter = event => {
      if(event.key === 'Enter'){
        AddSelectedToArray()
      }
    }

    return (
        <Grid>
        <Grid.Column width={16}>
          <Search
            input={{ icon: 'search', iconPosition: 'left' }}
            loading={isLoading}
            onResultSelect={()=>AddSelectedToArray()}
            onSearchChange= {(a) => setValue(a.target.value)}
            onKeyPress = {(e)=> onEnter(e)}
            results={[{title:value}]}
            value={value}
            fluid
            
          />
        </Grid.Column>
        <Grid.Row>

        </Grid.Row>
        <Grid.Column width={16}>
          
          {Object.keys(selected).length > 0 && Object.keys(selected).map( (option, index) => 
            <span className="badge primary-color m-1 cursor-pointer" key={index} onClick={()=> removeElement(option)}>
                {option}
            </span>
          )
          }
          
        </Grid.Column>
      </Grid>
    )
}



export default Skills;