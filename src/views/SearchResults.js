import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useLocation} from 'react-router-dom';
import ProductDetail from '../components/ProductDetail';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


export default function SearchResults() {

    const [results,setResults] = useState([])

    const query = useLocation().search
    const useQuery = new URLSearchParams(query)
    const searchTerm = useQuery.get('name')
    
    

    useEffect(()=>{
        axios.get(`https://ecomerce-master.herokuapp.com/api/v1/item?name=${searchTerm}`)
        .then((response)=>{
            console.log(response.data)

            setResults(response.data)})
    },[query]) 

    return(
        <div>
            <Navbar/>
            <div className="album-cards mt-4" >
  <div className="container align-items-center pb-5" >
    <div className="row justify-content-center">
            {results.map(product =>
             <ProductDetail
                       key={product._id} 
                       name={product.product_name}
                       image={
                         product.image
                        ? product.image
                        : 'https://www.metrorollerdoors.com.au/wp-content/uploads/2018/02/unavailable-image.jpg'}
                       description={product.description}
                       id={product._id}  
                       price={product.price} /> 
             
               )}
                </div>
               </div>
               </div>
               <Footer/>
                        
        </div>
    )
    
}


