import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const IndividualProduct = () =>{

    const [singlepdp, setSinglePdp] = useState(0);
    const {id} = useParams();

    useEffect(()=>{
        const getSingleProducts = async () => {
            const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
            setSinglePdp(response.data)
        }

            getSingleProducts();

    }, [id])
    return(
        <>
            <div>Single PDP ${id}</div>
        </>
    )
}

export default IndividualProduct;