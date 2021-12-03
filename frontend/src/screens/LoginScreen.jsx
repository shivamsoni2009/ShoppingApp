import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userAction";
import FormContainer from "../components/shared/FormContainer";
import Message from "../components/shared/Message";
import Loader from "../components/shared/Loader";

const LoginScreen = ({location,history}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const redirect = location.search ? location.search.split('=')[1]:'/';
 
   const dispatch = useDispatch()
   const userLogin = useSelector((state)=>state.userLogin);
   const {loading,error,userInfo} = userLogin
  
   useEffect(() => {
    if(userInfo){history.push(redirect)}
   }, [history,userInfo,redirect])


  const submitHandler = (e) =>{
      e.preventDefault()
      dispatch(login(email,password))
  }
  return (
    <>
      <FormContainer>
        <h1>SIGN IN</h1>
        {error && <Message>{error}</Message>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Button type="submit" variant="primary">SIGN IN</Button>
          <Row>
              <Col>
              <Link to={redirect ? `register?redirect=${redirect}`:`/register` }>New User</Link>
              </Col>
          </Row>
        </Form>
      </FormContainer>
    </>
  );
};

export default LoginScreen;
