import { products } from "../products";
import { useNavigate } from "react-router-dom";
import styles from '../ProductList.module.css';
import NavigationBar from "../NavigationBar";
import headerStyles from '../Header.module.css';

export function HomePage(){
    const navigateTo = useNavigate();
    const navigateToPage = (productId: string) => {
        navigateTo(`/products/${productId}`)
    }

    return (
        <>
        <header className={headerStyles.header}>
            <NavigationBar/>
            <h2>Shopping App</h2>
        </header>

        <main className={styles.container}>
            {products.map((product) => (
            <div key={product.id} className={styles.item}>
            <img src={`images/${product.image}`} alt={product.name} className={styles.productImage} />
            
            <div className={styles.text}>
                <h3 className={styles.itemName}>{product.name}</h3>
                <p className={styles.itemPrice}>${product.price}</p>
            </div>
            <button  className={styles.button}
                onClick ={() => navigateToPage(product.id)}> View Details
            </button>
            </div>
            ))}
        </main>
        </>
    );
}