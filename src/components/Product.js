import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';

export default class Product extends Component {
  render() {
    const {id, title, img, price, inCart} = this.props.product;
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <div className="img-container p-5" onClick={() => console.log('You clicked on the image container')}>
            <Link to="/details">
            <img src={img} alt="product" className="card-img-top"></img>
            </Link>
            <button className="cart-byn" disabled={inCart?true: false} onClick={()=>{console.log('added to the cart')} }>
              {inCart?(<p className="text-capitalize mb-0" disabled>in Cart</p>):(<i className="fas fa-cart" />)}
            </button>
          </div>
        </div>
      </ProductWrapper>
    )
  }
}

const ProductWrapper = styled.div`

`;