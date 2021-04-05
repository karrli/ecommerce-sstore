import React, {useEffect,useState} from 'react'
import axios from 'axios'
import './Home.scss'
import ProductDetail from '../components/ProductDetail/ProductDetail';

const categories = [
    "Books",
    "Movies",
    "Music",
    "Games",
    "Electronics",
    "Computers",
    "Home",
    "Garden",
    "Tools",
    "Grocery",
    "Health",
    "Beauty",
    "Toys",
    "Kids",
    "Baby",
    "Clothing",
    "Shoes",
    "Jewelery",
    "Sports",
    "Outdoors",
    "Automotive",
    "Industrial"
]

export default function Products() {

      const [products, setProducts] = useState([])
      const [category,setCategory] = useState('')
  
      const getProduct = async () => {
          try{
              let response = await axios.get(`https://ecomerce-master.herokuapp.com/api/v1/item?category=${category}`);
              setProducts(response.data);
              console.log(response.data)
          }catch(error){
              alert(error.response.data.message);
          }
      }
     
      useEffect(() => {
        setTimeout(getProduct,500)
      },[category]);

    return (
        <div style={{paddingTop:'60px'}}>
            <form className="container d-flex justify-content-center mt-5">
                <select className="form-control form-control-product" 
                onChange={e => {
                    setCategory(e.target.value)
                }}>
                    <option>Categories</option>
                    {categories.map(categoryObject =>  
                        (<option value={categoryObject} key={category.id}>{categoryObject}</option>))
                }
                </select>
            </form>
        <div className="album-cards mt-4" >
  <div className="container align-items-center pb-5" >
    <div className="row justify-content-center">
            {products.map(product =>
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

            
        </div>
    )
}


