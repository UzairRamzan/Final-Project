import React, { useState } from 'react'
//import product from '../components/Product'
import data from '../data'
import Rating from '../components/Rating'
import { Link } from 'react-router-dom';

export default function ProductScreen(props) {
    const product = data.products.find((x) => x._id === props.match.params.id);//what user passes//matchin with products array
    const [qty,setQty]= useState(1);
    if (!product) {
        return <div>Product not available</div>
    }
    const addtoCarthandler=()=>{
props.history.push(`/cart/${product._id}?qty=${qty}`);
    }
    return (

        <div>
            <Link to='/'>--Back--</Link>
            <div className='row top'>
                <div className='col-2'>
                    <img className="large" src={product.image} alt={product.name}></img>
                </div>

                <div className='col-1'>
                    <ul>
                        <li>
                            <h1>{product.name}</h1>
                        </li>
                        <li>
                            <Rating rating={product.rating} numReviews={product.numReviews}></Rating>
                        </li>
                        <li>
                            Price: Rs.{product.price}
                        </li>
                        <li>
                            Description:<p> {product.description}</p>
                        </li>
                    </ul>
                </div>
                <div className='col-1'>
                    <div className='card card-body'>
                        <ul>
                            <li>
                                <div className='row'>
                                    <div>Price</div>
                                    <div className='price'>Rs.{product.price}</div>
                                </div>
                            </li>
                            <li>
                                <div className='row'>
                                    <div>Status</div>
                                    <div >
                                        {product.countInStock > 0 ? (<span className='success'>In Stock</span>) : (
                                            <span className='error'>Unavailable</span>)}</div>
                                </div>
                            </li>
                            {product.countInStock > 0 && (
                    <>
                      <li>
                        <div className="row">
                          <div>Qty</div>
                          <div>
                            <select
                              value={qty}
                              onChange={(e) => setQty(e.target.value)}
                            >
                              {[...Array(product.countInStock).keys()].map(
                                (x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                )
                              )}
                            </select>
                          </div>
                        </div>
                      </li>
                      <li>
                        <button
                          onClick={addtoCarthandler}
                          className="primary block"
                        >
                          Add to Cart
                        </button>
                      </li>
                    </>
                  )}

                                    </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
