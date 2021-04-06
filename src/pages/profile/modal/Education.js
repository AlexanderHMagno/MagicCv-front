import React, {useState} from 'react';
import { Container, Form, Checkbox, Button , Grid } from 'semantic-ui-react';
import {gql, useMutation} from '@apollo/client';
import {useForm} from '../../../util/hooks';
import {YearEducation} from '../../../util/types';

const Education = ({info, closeModal}) => {
    const [errors, setErrors] = useState({});
    const startingInformation = info || {};
    const {values, handleSubmit, onChange, pushChange} = useForm(updateEducation,startingInformation)

    const [experience_changer, {loading}] = useMutation(EDUCATION_MUTATION, {
        update(proxy, newData) {
           closeModal(false);
        },
        onError(err) {
            setErrors(err.graphQLErrors[0].extensions.errors);
        },
        variables : values
    });

    function updateEducation ()  {
        experience_changer();
    }

    return (

        <Container>
            <Form  onSubmit={handleSubmit} loading={loading}>
                <Form.Field>
                    <Form.Input
                        type="text"
                        error= { errors && errors.school ? {  content: errors.school , pointing: 'below' } :false}
                        onChange={onChange}
                        label="School"
                        name="school"
                        placeholder="EX: NorthEastern University"
                        defaultValue={values.school}   
                    />
                </Form.Field>
                <Form.Field>
                    <Form.Input
                        type="text"
                        error= { errors && errors.degree ? {  content: errors.degree , pointing: 'below' } :false}
                        onChange={onChange}
                        label="Degree"
                        name="degree"
                        placeholder="EX: Bachelor's"
                        defaultValue={values.degree}   
                    />
                </Form.Field>
                <Form.Field>
                    <Form.Input
                        type="text"
                        error= { errors && errors.field ? {  content: errors.field , pointing: 'below' } :false}
                        onChange={onChange}
                        label="Field"
                        name="field"
                        placeholder="EX: Economy"
                        defaultValue={values.field}   
                    />
                </Form.Field>
                <Form.Field>
                </Form.Field>
         
                <Form.Field>
                <br></br>
                    <Grid>
                        <Form.Select
                            options={YearEducation()}
                            placeholder='Year'
                            label="Start Year"
                            defaultValue={+values.startYear}
                            onChange={(e,{name, value})=> pushChange(name, value)} 
                            name="startYear"
                            error= { errors && errors.startYear ? {  content: errors.startYear , pointing: 'below' } :false}
                        />
                        <Form.Select
                            options={YearEducation()}
                            placeholder='Year'
                            label="End Year (Expected)"
                            defaultValue={+values.endYear}
                            onChange={(e,{name, value})=> pushChange(name, value)} 
                            name="endYear"
                            error= { errors && errors.endYear ? {  content: errors.endYear , pointing: 'below' } :false}
                        />
                    </Grid>
                </Form.Field>

                <Form.TextArea 
                    onChange={onChange} 
                    name="description" 
                    label='Description' 
                    placeholder='Tell us more about your Education' 
                    defaultValue={values.description}
                    error= { errors && errors.description ? {  content: errors.description , pointing: 'below' } :false}
                    />
                <Button fluid type="submit"  className="primary-color m-20 block">
                            Save 
                </Button> 
            </Form>   
        </Container>

    )
}



const EDUCATION_MUTATION = gql`
mutation createEducation
    (
        $id: ID,
        $school: String,
        $degree: String,
        $field: String,
        $startYear: Int,
        $endYear: Int,
        $description: String,
    )

    { 
        createEducation (educationInput : {
    	id: $id
        school: $school
        degree: $degree
        field: $field
        startYear: $startYear
        endYear: $endYear
        description: $description
  }){
    id
    education {
        id 
    }
}
}
`;


export default Education;