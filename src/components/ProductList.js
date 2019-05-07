import React, {Component} from 'react';
import Product from './Product';
import Title from './Title';
import {storeProducts} from '../data';
import {ProductConsumer} from '../context';

export default class ProductList extends Component {
    state={
        products: storeProducts
    };
    render() {
        console.log(this.state.products);
        return(
            <React.Fragment>
                <div className="py-5">
                    <div class="container">
                    <Title name="our" title="products" />
                        <div class="row">
                            <ProductConsumer>
                                {value => {
                                    console.log(value);
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
                /* <Product /> */
            
        );
    }
}
