import React, {useState,useEffect} from 'react'
import axios from 'axios'
import {useParams, useHistory} from 'react-router-dom'
import Navbar from '../components/Navbar'
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
    Row
  } from 'reactstrap';
  
  export default function Product() {
      
    const [product,setProduct] = useState({})
    const params = useParams()
    console.log(params.id)

    const [token, setToken] = useState(window.localStorage.getItem('token'))

    useEffect(()=>{
         setToken(window.localStorage.getItem('token'))
    },[token])
 

    const history = useHistory()
   
    useEffect(()=>{
        axios.get(`https://ecomerce-master.herokuapp.com/api/v1/item/${params.id}`)
        .then((response)=>{
            setProduct(response.data)
        })
    },[])

    return (
        <div>
            <Navbar />
            <Row className="d-flex justify-content-center">

            <Card className="mt-5" style={{ width: '250px' }}>
          <CardImg top width="100%" src={ product.image } alt="Product Image" />
          <CardBody>
            <CardTitle tag="h5">{ product.product_name }</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Price: ${ product.price } ONLY!</CardSubtitle>
            <CardText>{ product.description }</CardText>
            <Button color="danger"
            onClick={()=>{
                {token?history.push('/'):history.push('/signup')}
                }}>Buy Now!
            </Button>
          </CardBody>
        </Card> 
        </Row>
            
    
    
              
        </div>
    )
}
