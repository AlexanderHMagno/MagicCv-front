import React from 'react';
import { Container, Form, Checkbox, Button , Grid } from 'semantic-ui-react';

const Education = () => {
    
    const currentYear = new Date();
    let year = currentYear.getFullYear() + 5;
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
                    <label>School</label>
                    <input placeholder='EX: NorthEastern University' />
                </Form.Field>
                <Form.Field>
                    <label>Degree</label>
                    <input placeholder="Ex: Bachelor's" />
                </Form.Field>
                <Form.Field>
                    <label>Field Of study</label>
                    <input placeholder="Ex: Economy" />
                </Form.Field>
                <Form.Field>
                </Form.Field>
         
                <Form.Field>
                <br></br>
                    <Grid>
                    
                        <Form.Select
                            options={YearArray}
                            placeholder='Year'
                            label="Start Year"
                        />
                        <Form.Select
                            options={YearArray}
                            placeholder='Year'
                            label="End Year (Expected)"
                        />
                    </Grid>
                </Form.Field>

                <Form.TextArea label='Description' placeholder='Tell us more about you Education' />
    


                {/* <Button type='submit'>Submit</Button> */}
            </Form>   
        </Container>

    )
}


export default Education;