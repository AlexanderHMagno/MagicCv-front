import React, {useState} from 'react';
import { Container, Form, Button , Grid, Radio } from 'semantic-ui-react';
import {gql, useMutation} from '@apollo/client';
import {useForm} from '../../../util/hooks';
import {employmentOptions, Months, YearArray} from '../../../util/types';


const Experience = ({info, closeModal}) => {
    const [errors, setErrors] = useState({});
    const startingInformation = info || {};
    const {values, handleSubmit, onChange, pushChange} = useForm(updateExperience,startingInformation)

    //CheckIfCurrentStatus is corrected or not
    const [currentWork, setCurrentWork] = useState(values.current);

    const [experience_changer, {loading}] = useMutation(EXPERIENCE_MUTATION, {
        update(proxy, newData) {
           closeModal(false);
        },
        onError(err) {
            setErrors(err.graphQLErrors[0].extensions.errors);
        },
        variables : values
    });


    function updateExperience ()  {
        experience_changer();
    }

    return (

        <Container>
            <Form  onSubmit={handleSubmit} loading={loading}>
                <Form.Input
                    type="text"
                    error= { errors && errors.title ? {  content: errors.title , pointing: 'below' } :false}
                    onChange={onChange}
                    label="Title"
                    name="title"
                    placeholder="Ex: Manager"
                    defaultValue={values.title}   
                />
                <Form.Field>
                <Form.Select
                    fluid
                    label='Employment type'
                    options={employmentOptions}
                    placeholder='Employment type'
                    defaultValue = {values.typeExp}
                    onChange={(e,{name, value})=> pushChange(name, value)} 
                    name="typeExp"
                    error= { errors && errors.typeExp ? {  content: errors.typeExp , pointing: 'below' } :false}
                />
                </Form.Field>
                <Form.Field>
                    <Form.Input
                        type="text"
                        error= { errors && errors.company ? {  content: errors.company , pointing: 'below' } :false}
                        onChange={onChange}
                        label="Company"
                        name="company"
                        placeholder="Ex: Google"
                        defaultValue={values.company}   
                    />
                </Form.Field>
                <Form.Field>
                    <Form.Input
                            type="text"
                            error= { errors && errors.location ? {  content: errors.location , pointing: 'below' } :false}
                            onChange={onChange}
                            label="Location"
                            name="location"
                            placeholder="Ex: Vancouver, Canada"
                            defaultValue={values.location}   
                    />
                </Form.Field>
                <Form.Field>
                    <Radio  
                        toggle
                        name="current" 
                        onChange={(e,{name, checked})=> pushChange(name, checked)}   
                        onClick={()=> setCurrentWork(!currentWork)} 
                        label='I am currently working in this role' 
                        defaultChecked={values.current} />
                </Form.Field>
         
                <Form.Field>
                    <label>Start Date *</label>
                    <br></br>
                    <Grid>
                        <Form.Select
                            options={Months}
                            placeholder='Month'
                            defaultValue={+values.startMonth}
                            onChange={(e,{name, value})=> pushChange(name, value)} 
                            name="startMonth"
                            error= { errors && errors.startMonth ? {  content: errors.startMonth , pointing: 'below' } :false}
                        />
                        <Form.Select
                            options={YearArray}
                            placeholder='Year'
                            defaultValue={+values.startYear}
                            onChange={(e,{name, value})=> pushChange(name, value)} 
                            name="startYear"
                            error= { errors && errors.startYear ? {  content: errors.startYear , pointing: 'below' } :false}
                        />
                    </Grid>
                </Form.Field>
                {!currentWork && 
                     <Form.Field>
                        <label>End Date *</label>
                        <br></br>
                        <Grid>
                            <Form.Select
                                options={Months}
                                placeholder='Month'
                                defaultValue={+values.endMonth}
                                onChange={(e,{name, value})=> pushChange(name, value)} 
                                name="endMonth"
                                error= { errors && errors.endMonth ? {  content: errors.endMonth , pointing: 'below' } :false}
                            />
                            <Form.Select
                                options={YearArray}
                                placeholder='Year'
                                defaultValue={+values.endYear}
                                onChange={(e,{name, value})=> pushChange(name, value)} 
                                name="endYear"
                                error= { errors && errors.endYear ? {  content: errors.endYear , pointing: 'below' } :false}
                            />
                        </Grid>
                    </Form.Field>
                } 
               

                <Form.TextArea 
                    onChange={onChange} 
                    name="description" 
                    label='Description' 
                    placeholder='Tell us more about you...' 
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



const EXPERIENCE_MUTATION = gql`
mutation createExperience
    (
        $id: ID,
        $title: String,
        $typeExp: String,
        $company: String,
        $location: String,
        $current: Boolean,
        $startMonth: Int,
        $startYear: Int,
        $endMonth: Int,
        $endYear: Int,
        $description: String,
    )

    { 
	createExperience (experienceInput : {
    	id: $id
        title: $title
        typeExp: $typeExp
        company: $company
        location: $location
        current: $current
        startMonth: $startMonth
        startYear: $startYear
        endMonth: $endMonth
        endYear: $endYear
        description: $description
  }){
    id
    experience {
        id title typeExp company location current
        startMonth startYear endMonth endYear
        description createdAt
    }
}
}
`;


export default Experience;