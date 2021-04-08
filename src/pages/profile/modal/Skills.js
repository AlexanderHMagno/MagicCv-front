import React, {useState} from 'react';
import {Grid, Search,Form, Rating, Button} from 'semantic-ui-react';
import {gql, useMutation} from '@apollo/client';
import {useForm} from '../../../util/hooks';


const Skills = ({info, closeModal}) => {
    const [errors, setErrors] = useState({});
    const startingInformation = info || {rate:5};
    const {values, handleSubmit, onChange, pushChange} = useForm(updateSkill,startingInformation)
    const [experience_changer, {loading}] = useMutation(SKILL_MUTATION, {
        update(proxy, newData) {
          closeModal(false);
        },
        onError(err) {
          setErrors(err.graphQLErrors[0].extensions.errors);
        },
        variables :  {
          ...values,
          rate :  +values.rate
        }
    });

    function updateSkill ()  {
        experience_changer();
    }

    return (
        <Grid>
        <Grid.Column width={16}>

        <Form  onSubmit={handleSubmit} loading={loading}>
                <Form.Input
                    type="text"
                    error= { errors && errors.label ? {  content: errors.label , pointing: 'below' } :false}
                    onChange={onChange}
                    label="Skill"
                    name="label"
                    placeholder="Ex: Managment"
                    defaultValue={values.label}   
                />

                <Rating  size="mini" icon='star' rating={values.rate} maxRating={10} />

                <Form.Input
                    type="range"
                    onChange={onChange}
                    name="rate"
                    min={1}
                    max={10}
                    defaultValue={values.rate}   
                />
                
                <Button fluid type="submit"  className="primary-color m-20 block">
                            Save 
                </Button> 
          </Form>
        </Grid.Column>

      </Grid>
    )
}



const SKILL_MUTATION = gql`
mutation createSkills
    (
        $id: ID,
        $label: String,
        $rate: Int,
    )
    { 
	createSkills (id: $id label: $label rate: $rate) {
    id
    skills {
        id 
    }
  }
}
`;

export default Skills;