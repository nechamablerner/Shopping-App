import { useParams } from "react-router-dom";
import { products } from "./products";
import { useEffect, useState } from "react";
import styles from './Product.module.css';

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
        <main className={styles.container}>
            <div className={styles.imageSelection}>
                <img src={`/images/${product.image}`} alt={product.name} className={styles.img} />
            </div>

            <div className={styles.infoSection}>
                <h1 className={styles.productTitle}> {product?.name}</h1>

                <p className={styles.price}> ${product?.price}</p>
                <p className={styles.description}> {product?.description}</p>
            </div>
        </main>
        </>
    );
}
export default ProductDetails;


