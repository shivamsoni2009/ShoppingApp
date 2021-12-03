import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails, register,updateUserProfile} from "../actions/userAction";
// import FormContainer from "../components/shared/FormContainer";
import Message from "../components/shared/Message";
import Loader from "../components/shared/Loader";

const ProfileScreen = ({location,history}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");


 
   const dispatch = useDispatch()
   const userDetails = useSelector((state)=>state.userDetails);
   const userLogin = useSelector((state)=>state.userLogin);
   const {loading,error,user} = userDetails
   const {userInfo} = userLogin;

   const userUpdateProfile = useSelector((state)=>state.userUpdateProfile)
  const {success} = userUpdateProfile
   useEffect(() => {
    if(!userInfo){
        history.push('/login')
    }else{
        if(!user.name){
            dispatch(getUserDetails('profile'))
        }else{
            setName(user.name)
            setEmail(user.email)
        }
    }
   }, [history,userInfo,dispatch,user])


  const submitHandler = (e) =>{
      e.preventDefault()
      dispatch(
        updateUserProfile({id:user._id,name,email,password})
      )
  }
  return (
    <>
      <Row>
          <Col md={3}>
          <h1>Update Information</h1>
        {error && <Message>{error}</Message>}
        {success && <Message variant="success">Profile Updated</Message>}
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
          <Button type="submit" variant="primary">UPDATE</Button>
        </Form>
          </Col>
          <Col md={9}>
            <h1>My order</h1>
          </Col>
      </Row>
    </>
  );
};

export default ProfileScreen;
