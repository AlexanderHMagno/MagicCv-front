import React, {useState} from 'react';
import { Container, Form, Checkbox, Button , Grid, Icon } from 'semantic-ui-react';
import {gql, useMutation} from '@apollo/client';
import {useForm} from '../../../util/hooks';
import {employmentOptions, Months, YearArray} from '../../../util/types';


const Experience = ({info, closeModal}) => {
    
    const startingInformation = info || {};
    const {values, handleSubmit, onChange, pushChange} = useForm(updateExperience,startingInformation)

    //CheckIfCurrentStatus is corrected or not
    const [currentWork, setCurrentWork] = useState(values.current);

    const [experience_changer, {loading}] = useMutation(EXPERIENCE_MUTATION, {
        update(proxy, newData) {
           closeModal(false);
        },
        onError(err) {
            console.log(err);
            // setErrors(err.graphQLErrors[0].extensions.errors);
        },
        variables : values
    });


    function updateExperience ()  {
        experience_changer();
    }

    return (

        <Container>
            <Form  onSubmit={handleSubmit} loading={loading}>
                <Form.Field>
                    <label>Title</label>
                    <input onChange={onChange} name="title" placeholder='EX: Manager' defaultValue={values.title} />
                </Form.Field>
                <Form.Field>
                <Form.Select
                    fluid
                    label='Employment type'
                    options={employmentOptions}
                    placeholder='Employment type'
                    defaultValue = {values.typeExp}
                    onChange={(e,{name, value})=> pushChange(name, value)} 
                    name="typeExp"
                />
                </Form.Field>
                <Form.Field>
                    <label>Company</label>
                    <input 
                        placeholder='Ex: Google' 
                        defaultValue={values.company} 
                        onChange={onChange} 
                        name="company"
                        />
                </Form.Field>
                <Form.Field>
                    <label>Location</label>
                    <input 
                        placeholder='Ex: Vancouver, Canada' 
                        defaultValue={values.location} 
                        onChange={onChange} 
                        name="location"
                        />
                </Form.Field>
                <Form.Field>
                    <Checkbox  
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
                        />
                        <Form.Select
                            options={YearArray}
                            placeholder='Year'
                            defaultValue={+values.startYear}
                            onChange={(e,{name, value})=> pushChange(name, value)} 
                            name="startYear"
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
                            />
                            <Form.Select
                                options={YearArray}
                                placeholder='Year'
                                defaultValue={+values.endYear}
                                onChange={(e,{name, value})=> pushChange(name, value)} 
                                name="endYear"
                            />
                        </Grid>
                    </Form.Field>
                } 
               

                <Form.TextArea onChange={onChange} name="description" label='Description' placeholder='Tell us more about you...' defaultValue={values.description}/>
                    
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