import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { register} from "../actions/userAction";
import FormContainer from "../components/shared/FormContainer";
import Message from "../components/shared/Message";
import Loader from "../components/shared/Loader";

const RegisterScreen = ({location,history}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");


  const redirect = location.search ? location.search.split('=')[1]:'/';
 
   const dispatch = useDispatch()
   const userRegister = useSelector((state)=>state.userRegister);
   const {loading,error,userInfo} = userRegister
  
   useEffect(() => {
    if(userInfo){history.push(redirect)}
   }, [history,userInfo,redirect])


  const submitHandler = (e) =>{
      e.preventDefault()
      if(password!==confirmPassword){
        setMessage('password do not match')
      }else{
      dispatch(register(name,email,password))
        
      }
  }
  return (
    <>
      <FormContainer>
        <h1>REGISTER</h1>
        {error && <Message>{error}</Message>}
        {loading && <Loader />}
        {message && <Message variant="danger">{message}</Message>}

        <Form onSubmit={submitHandler}>
        <Form.Group controlId="email">
            <Form.Label>NAME</Form.Label>
            <Form.Control
              type="name"
              placeholder="enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>
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
          <Form.Group controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="enter password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Button type="submit" variant="primary">SIGN IN</Button>
          <Row>
              <Col>
              Have an account |
              <Link to={redirect ? `login?redirect=${redirect}`:`/login` }>New User</Link>
              </Col>
          </Row>
        </Form>
      </FormContainer>
    </>
  );
};

export default RegisterScreen;
