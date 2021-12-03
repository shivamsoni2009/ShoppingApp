import React,{useState} from "react";
import { Form, Button, Col } from "react-bootstrap";
import { savePaymentMethod } from "../actions/cartAction";
import CheckoutStep from "./CheckoutStep";
import {useSelector,useDispatch} from 'react-redux'

const PaymentScreen = ({history}) => {
    const cart = useSelector(state=>state.cart)
    const {shippingAddress} = cart;
    if(!shippingAddress){

    }
   
    const dispatch = useDispatch()
    const [paymentMethod, setPaymentMethod] = useState('paypal')
    const submitHandler = (e) =>{
      dispatch(savePaymentMethod(paymentMethod))
      history.push('/placeorder')
    }
  return (
    <>
      <CheckoutStep step1 step2 step3 />
      <h1>Payment Method</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as="legend">Select Payment Method</Form.Label>
          <Col>
            <Form.Check
              type="radio"
              label="Paypal or credit card"
              id="paypal"
              name="paymentMethod"
              value="paypal"
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>
             <Form.Check
              type="radio"
              label="Strip"
              id="Strip"
              name="paymentMethod"
              value="Strip"
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>
          </Col>
        </Form.Group>
        <Button typr="submit" variant="primary">Continue</Button>
      </Form>
    </>
  );
};

export default PaymentScreen;
