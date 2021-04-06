import React from 'react';
import useForm from '../hooks/useForm';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import Navbar from "../components/Navbar";


export default function Signup() {
    const history = useHistory();

    const sendForm = (inputs) => {
        console.log('Using sendForm', inputs);
        if(inputs.password === inputs.password_confirmation) {
            delete inputs.password_confirmation;
            axios.post('https://ecomerce-master.herokuapp.com/api/v1/signup', inputs)
                .then(({data, status}) => {
                    console.log(data, status);
                    history.push('/');
                })
                .catch(error => {
                    console.error(error.response.data);
                })
        } else {
            alert('Passwords does not match');
        }
    };
    
    const {
        inputs,
        handleInputs,
        handleSubmit,
    } = useForm(sendForm, {});

    return(
        <>
                <Navbar/>
        <form onSubmit={handleSubmit}>
            <div className="container my-4">
            <div className="row">
            <div  className="col-7 mt-3">
                <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">@</span>
                <input type="text" required value={inputs.email} onChange={handleInputs} className="form-control" id="email" placeholder="e-mail" aria-label="email" aria-describedby="addon-wrapping"/>
                </div>
            </div>
            <div  className="col-7  mt-3">
                <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping"></span>
                <input type="text" required value={inputs.first_name} onChange={handleInputs} className="form-control" id="first_name" placeholder="First Name" aria-label="first_name" aria-describedby="addon-wrapping"/>
                </div>
            </div>
            <div  className="col-7 mt-3">
                <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping"></span>
                <input type="text" required value={inputs.last_name} onChange={handleInputs} className="form-control" id="last_name" placeholder="Last Name" aria-label="last_name" aria-describedby="addon-wrapping"/>
                </div>
            </div>
            <div  className="col-7 mt-3">
                <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping"></span>
                <input type="password" required value={inputs.password} onChange={handleInputs} className="form-control" id="password" placeholder="Password" aria-label="password" aria-describedby="addon-wrapping"/>
                </div>
            </div>
            <div  className="col-7 mt-3">
                <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping"></span>
                <input type="password" required value={inputs.password_confirmation} onChange={handleInputs} className="form-control" id="password_confirmation" placeholder="Confirm password" aria-label="password_confirmation" aria-describedby="addon-wrapping"/>
                </div>
            </div>
            <div className="col-6 mt-4">
                <button type="submit" className="btn btn-info">Signup</button>
            </div>
            </div>
        </div>
        </form>
       
        </>
    );
}