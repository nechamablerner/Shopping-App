import { products } from "../products";
import { useNavigate } from "react-router-dom";
import styles from '../ProductList.module.css';
import NavigationBar from "../NavigationBar";

export function HomePage(){
    const navigateTo = useNavigate();
    const navigateToPage = (productId: string) => {
        navigateTo(`/products/${productId}`)
    }

    return (
        <>
        <header>
            <NavigationBar/>
            <h2>Shopping App</h2>
        </header>
        <main>
            {products.map((product) => (
            <div key={product.id} className="product-card">
            <button key={product.id} onClick={() => navigateToPage(product.id)}>{product.name +  product.price + product.image } </button>
            <img src={`/images/${product.image}`} alt={product.name} className={styles.productImage} />
            </div>
            ))}
            
        </main>
        </>
    );
}