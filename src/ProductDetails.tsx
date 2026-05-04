import { useParams } from "react-router-dom";
import { products } from "./products";
import { useEffect, useState } from "react";

function ProductDetails(){
    const {id} = useParams();

    const [product, setProduct] = useState<any>(null);
    
    useEffect(() => {
        const foundProduct = products.find(p => p.id=== id);
        setProduct(foundProduct);
    }, [id]);
    
    if (!product) return <p> Loading items...</p>

    
    return (
        <>
        <header>
            {/* <NavigationBar/> */}
        </header>
        <main>
            <h2> {product?.name}</h2>
            <img src={`/images/${product.image}`} alt={product.name} />

            <h6>Price: {product?.price}</h6>
            <h6>Descriptions: {product?.description}</h6>


        </main>
        </>
    );
}
export default ProductDetails;

// add image
// add dimensions 
