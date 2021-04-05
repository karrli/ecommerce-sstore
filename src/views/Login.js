import React from 'react';
import useForm from '../hooks/useForm';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Navbar from '../components/Navbar'

import { Button,
        Form,
        FormGroup,
        Label,
        Input } from 'reactstrap'; 


export default function Login(){
    const history = useHistory();
    const sendForm = (inputs) => {
        console.log('Using sendform from login', inputs);
        axios.post('https://ecomerce-master.herokuapp.com/api/v1/login', inputs)
            .then(({data})=>{
                
                const { token } = data;
            
                window.localStorage.setItem('token', token);
                history.push('/');
            })
            .catch(error=>{
                console.error(error.response.data)
            })
    };
    const {
        inputs, 
        handleInputs,
        handleSubmit,
    }   =   useForm(sendForm, {
      
    })
        
        return(
        <>
        <Navbar />
        
  
            <Form className="form-container"  onSubmit={handleSubmit}>
           
                <FormGroup className="mt-5 col-lg-3 col-md-5">
                    <Label for="email">email</Label>
                    <Input type="email" required value={inputs.email} onChange={handleInputs} name="email" id="email" placeholder="your_email@emailprovider.com" />
                </FormGroup>
                <FormGroup className="col-lg-3 col-md-5" >
                    <Label for="password">Password</Label>
                    <Input type="password" value={inputs.password} onChange={handleInputs} name="password" id="password" placeholder="yourAwesomePassword" />
                </FormGroup>
                <Button className= "d-flex justify-content-center ml-5 btn btn-danger">Login</Button>
               
            </Form>
            
            
        </>
        )
}  