import React, { useState, useEffect } from "react";
import Button from '@material-ui/core/Button';
import { useMutation, gql } from '@apollo/client';

// import "./App.css";
const price = 4.99;



const StripePayment = ({templateId}) => {

    const [OpenStripePayment] = useMutation(OPENPAYMENT, {
        update(cache, {data}) {
           window.location.href = data.createPayment;
        },
        onError(err) {
            console.log(err)
        },
        variables : {templateId},
    });

    return (
        <Button  onClick={() => OpenStripePayment()} variant="contained" color="secondary">
            Buy Template (${price})
        </Button>
    
    );       
};

export default StripePayment;


const OPENPAYMENT = gql`
mutation createPayment($templateId: ID!){ 
    createPayment (templateId: $templateId) }
`;