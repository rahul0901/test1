import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ProductsPage = () => {

    const [products, seProducts] = useState(0);

    const route = useNavigate();

    useEffect(() => {
        async function getProduct() {
            const jsonData = await axios.get('https://fakestoreapi.com/products');
            seProducts(jsonData.data)
            // console.log(jsonData.data)
        }

        getProduct()
    }, [])
    return (
        <>
            <div>Product Page</div>
            <div>{products?.length ? <div>{products.map((item, index) => (
                <div key={index} onClick={()=> route(`/products/${item.id}`)}>
                    <h2>{item.title}</h2>
                    <img src={item.image} alt="" />
                    <h2>{item.price}</h2>
                </div>
            ))}</div> : <div>Loading</div>}</div>
        </>
    )
}

export default ProductsPage;