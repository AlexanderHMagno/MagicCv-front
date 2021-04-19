import React, {useState} from 'react';
import {Grid,Form, Button} from 'semantic-ui-react';
import {gql, useMutation} from '@apollo/client';
import {useForm} from '../../../util/hooks';


const Basic = ({info, closeModal}) => {
    const [errors, setErrors] = useState({});
    const startingInformation = info || {};
    const {values, handleSubmit, onChange} = useForm(updateBasic,startingInformation)
    const [experience_changer, {loading}] = useMutation(BASIC_MUTATION, {
        update(proxy, newData) {
          closeModal(false);
        },
        onError(err) {
          setErrors(err.graphQLErrors[0].extensions.errors);
        },
        variables :  values
    });

    function updateBasic ()  {
        experience_changer();
    }

    return (
        <Grid>
        <Grid.Column width={16}>

        <Form  onSubmit={handleSubmit} loading={loading}>
                <Form.Input
                    type="text"
                    error= { errors && errors.first ? {  content: errors.first , pointing: 'below' } :false}
                    onChange={onChange}
                    label="First Name"
                    name="first"
                    defaultValue={values.first}   
                />

                <Form.Input
                    type="text"
                    error= { errors && errors.last ? {  content: errors.last , pointing: 'below' } :false}
                    onChange={onChange}
                    label="Last Name"
                    name="last"
                    defaultValue={values.last}   
                />

                <Form.Input
                    type="text"
                    error= { errors && errors.location ? {  content: errors.location , pointing: 'below' } :false}
                    onChange={onChange}
                    label="City"
                    name="city"
                    defaultValue={values.city}   
                />

                <Form.Input
                    type="text"
                    error= { errors && errors.location ? {  content: errors.location , pointing: 'below' } :false}
                    onChange={onChange}
                    label="Country"
                    name="country"
                    defaultValue={values.country}   
                />

                <Form.Input
                    type="text"
                    error= { errors && errors.address ? {  content: errors.address , pointing: 'below' } :false}
                    onChange={onChange}
                    label="Address"
                    name="address"
                    defaultValue={values.address}   
                />

                <Form.Input
                    type="phone"
                    error= { errors && errors.phone ? {  content: errors.phone , pointing: 'below' } :false}
                    onChange={onChange}
                    label="Phone"
                    name="phone"
                    defaultValue={values.phone}   
                />

                <Form.Input
                    type="text"
                    error= { errors && errors.role ? {  content: errors.role , pointing: 'below' } :false}
                    onChange={onChange}
                    label="Principal Role"
                    placeholder="Accountant"
                    name="role"
                    defaultValue={values.role}   
                />

                <Form.TextArea 
                    onChange={onChange} 
                    name="bio" 
                    label='About' 
                    placeholder='Tell us more about you' 
                    defaultValue={values.bio}
                    error= { errors && errors.bio ? {  content: errors.bio , pointing: 'below' } :false}
                />

                <Button fluid type="submit"  className="primary-color m-20 block">
                            Save 
                </Button> 
          </Form>
        </Grid.Column>

      </Grid>
    )
}



const BASIC_MUTATION = gql`
mutation basicInformation
    (
        $phone: String
        $bio: String
        $first: String
        $last: String
        $role: String
        $city: String
        $country: String
        $address: String
        
    )
    { 
        basicInformation (basicInput : {
            first: $first
            last: $last
            bio: $bio
            role: $role
            city: $city
            country: $country
            phone: $phone
            address: $address
        }) {
            id
            first
            last
            bio
            role
            country
            phone
            address
        }
    }
`;

export default Basic;