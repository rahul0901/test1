import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const SingleProduct = () => {

    const { id } = useParams()

    const [singlePro, setPro] = useState(0);

    useEffect(() => {
        const singleProduct = async () => {
            const jsonData = await axios.get(`https://fakestoreapi.com/products/${id}`)
            setPro([jsonData.data])
        }

        singleProduct()
    }, [id])
    return (
        <>
            <div>Single Product Page</div>
            <div>{singlePro?.length ? <div>{singlePro.map((item, index) => (
                <div key={index}>
                    <h2>{item.title}</h2>
                    <img src={item.image} alt="" />
                    <h2>{item.price}</h2>
                </div>
            ))}</div> : <div>Loading</div>}</div>
        </>
    )
}

export default SingleProduct