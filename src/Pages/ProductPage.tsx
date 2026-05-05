
import ProductDetails from "../ProductDetails";
import NavigationBar from "../NavigationBar";
import headerStyles from '../Header.module.css';


export function ProductPage(){

    return (
        <>
        <header className={headerStyles.header}>
            <NavigationBar/>
            <h2> Shopping App</h2>
            
        </header>
        <main> 
            <ProductDetails/>
        </main>
        </>
        
    );

}
