import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductListing = () => {

    const [products, setProducts] = useState(0);
    console.log(products)

    const route = useNavigate();


    useEffect(() => {
        async function getProducts() {
            const json = await axios.get('https://fakestoreapi.com/products')
            setProducts(json.data)
        }

        getProducts()
    }, [])


    return (
        <>
            <div>Trending Stuffs..</div>
            {products?.length ? <div>{products.map((item, index) => (
                <div key={index} onClick={()=>route(`/productlisting/${item.id}`)}>
                    <img src={item.image} alt="" />
                    <h2>{item.title}</h2>
                    <h4>{item.price}</h4>
                </div>
            ))}</div> : <div>Loading..</div>}

        </>
    )
}

export default ProductListing;

// https://fakestoreapi.com/products


// useefffect use krke apam har page refresh mai data lenge function ki madat se 