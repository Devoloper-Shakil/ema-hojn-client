import React from 'react';
import { CardElement, Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpulePamentFrom from './SimpulePamentFrom';

const stripePromise = loadStripe(

    'pk_test_51Ie0oDDsMn6Men7obd79VMsyHOtBdgV8JmGpbMtHUaHHOFDcJgo29hZX3kxKTxGJD0TQGcazp68s7jGNmzYU03TQ00bMXTM2W1'
);

const ProssesPament = ({prossesSuccses}) => {
    return (
        <>
            <Elements stripe={stripePromise}>
               <SimpulePamentFrom prossesSuccses={prossesSuccses}></SimpulePamentFrom>
            </Elements>
        </>
    );
};

export default ProssesPament;