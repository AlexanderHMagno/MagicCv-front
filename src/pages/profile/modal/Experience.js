import React from 'react';
import { Container, Form, Checkbox, Button , Grid } from 'semantic-ui-react';

const Experience = () => {
    
    const options = [
        { key: 'employmentType:1', text: 'Self-employed', value: 'self-employed' },
        { key: 'employmentType:2', text: 'Freelance', value: 'freelance' },
        { key: 'employmentType:3', text: 'Internship', value: 'internship' },
        { key: 'employmentType:4', text: 'Apprenticeship', value: 'apprenticeship' },
        { key: 'employmentType:5', text: 'Permanent Full-time', value: 'PFT' },
        { key: 'employmentType:6', text: 'Permanent Part-time', value: 'PPT' },
        { key: 'employmentType:7', text: 'Contract Full-time', value: 'CFT' },
        { key: 'employmentType:8', text: 'Contract Part-time', value: 'CPT' },
        { key: 'employmentType:9', text: 'Seasonal', value: 'Seasonal' },
        { key: 'employmentType:10', text: 'Casual / On-call', value: 'Casual' },
        { key: 'employmentType:11', text: 'Co-op', value: 'coop' },
      ]
    
    const Months = [
        { key: '1', text: 'January', value: '1' },
        { key: '2', text: 'February', value: '2' },
        { key: '3', text: 'March', value: '3' },
        { key: '4', text: 'April', value: '4' },
        { key: '5', text: 'May', value: '5' },
        { key: '6', text: 'June', value: '6' },
        { key: '7', text: 'July', value: '7' },
        { key: '8', text: 'August', value: '8' },
        { key: '9', text: 'Septiembre', value: '9' },
        { key: '10', text: 'Octubre', value: '10' },
        { key: '11', text: 'Noviembre', value: '11' },
        { key: '12', text: 'Diciembre', value: '12' },
    ];

    const currentYear = new Date();
    let year = currentYear.getFullYear();
    let YearArray = [];
    let i = 0
    while (i < 60) {
        
        YearArray.push({key: year, text: year, value: year});
        year--;
        i++;
    }
    
    

    return (

        <Container>
            <Form>
                <Form.Field>
                    <label>Title</label>
                    <input placeholder='EX: Manager' />
                </Form.Field>
                <Form.Field>
                <Form.Select
                    fluid
                    label='Employment type'
                    options={options}
                    placeholder='Employment type'
                />
                </Form.Field>
                <Form.Field>
                    <label>Company</label>
                    <input placeholder='Ex: Google' />
                </Form.Field>
                <Form.Field>
                    <label>Location</label>
                    <input placeholder='Ex: Vancouver, Canada' />
                </Form.Field>
                <Form.Field>
                    <Checkbox label='I am currently working in this role' />
                </Form.Field>
         
                <Form.Field>
                    <label>Start Date *</label>
                    <br></br>
                    <Grid>
                        <Form.Select
                            options={Months}
                            placeholder='Month'
                        />
                        <Form.Select
                            options={YearArray}
                            placeholder='Year'
                        />
                    </Grid>
                </Form.Field>
                <Form.Field>
                    <label>End Date *</label>
                    <br></br>
                    <Grid>
                        <Form.Select
                            options={Months}
                            placeholder='Month'
                        />
                        <Form.Select
                            options={YearArray}
                            placeholder='Year'
                        />
                    </Grid>
                </Form.Field>

                <Form.TextArea label='Description' placeholder='Tell us more about you...' />
    


                {/* <Button type='submit'>Submit</Button> */}
            </Form>   
        </Container>

    )
}


export default Experience;