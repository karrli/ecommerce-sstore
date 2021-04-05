import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProductDetail = ({id, name, image, price, description}) => {

    return (
     <>
  
        
             <div className="col-md-4" key={id}>
        <div className="card-how-we-work mb-4">
          <img className="card-img-top" src={image}/>
          <div className="card-body bg-white">
            <Link className="product-name disabledCursor" to={`/product/${id}`}>{name}</Link>
            <p className="text" id="price"> Price: ${price} </p>
              <p className="text">{description}</p>
            
            <div className="row d-flex justify-content-center">
              <div className=" col-lg-12">
                  <Link className="font-weight-bold d-flex align-items-center justify-content-center btn btn-lg" id="button-body" to={`/product/${id}`}>Buy Now</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

        </>

    )
  }
  
  ProductDetail.defaultProps = {
    name: 'Article'
  };
  
  ProductDetail.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string,
    price: PropTypes.number,
    description:PropTypes.string
  }

  export default ProductDetail;