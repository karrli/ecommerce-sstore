import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import profile from '../assets/profile.png'


export default function Profile() {

    const [user, setUser] = useState({})

    useEffect(() => {
        const token = window.localStorage.getItem('token')
        const headers = {
            headers:{
                Authorization: `JWT ${token}`
            }
        }
        axios.get('https://ecomerce-master.herokuapp.com/api/v1/user/me', headers)

        .then(response => {
            setUser(response.data)
            
        }).catch(error => {
            console.error(error)
        })

    },[])

    
    return(
        <div>
        <Navbar/>
            <div className="card mt-5 mr-5 ml-5 mt-5" style={{maxWidth: '300'}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={profile} alt="no profile picture"/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Hello, {user && user.user && user.user.first_name} {user&& user.user && user.user.last_name}</h5>
        <p className="card-text">registered email: {user && user.user &&user.user.email}</p>
        
      </div>
    </div>
  </div>
</div>
        
        </div>
    )
}

