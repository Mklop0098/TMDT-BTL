import './style.css'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../api/product'
import { formatter } from '../../ultil'

export const ProductPage = () => {
    const match = useParams({id: Number})
    const product = getProductById(match.id)
    console.log(product)
    return (
        <div class="container">
            <div class="row wrapper">
                <div class="col-md-7 content">
                    <div class="main-content">
                        <div class="col-md-6 col-sm-12">
                            <img src={product && `https://hcmut-e-commerce.herokuapp.com/${product.product_image01}`} alt="" class="main-img" />
                            <div class="sub-img">
                                <div class="col-md-6">
                                    <img src={product && `https://hcmut-e-commerce.herokuapp.com/${product.product_image01}`} alt="" class="main-img" />
                                </div>
                                <div class="col-md-6">
                                    <img src={product && `https://hcmut-e-commerce.herokuapp.com/${product.product_image01}`} alt="" class="main-img" />
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-12">
                            <h2>{product && product.product_name}</h2>
                            <p>{product && product.product_description}</p>
                            <div className="product-detail__line3">
                        
                                {
                                    product && product.product_present_price && 
                                    <p className="product-detail__line3-current">
                                        {formatter.format(product.product_present_price)}
                                    </p>
                                }
                                <p className="product-detail__line3-discount">{formatter.format(product && product.product_old_price)}</p>
                            </div>
                            <div class="main-btn"><button class="btn btn-primary ">Mua ngay</button></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}