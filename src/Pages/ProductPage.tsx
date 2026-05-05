
import ProductDetails from "../ProductDetails";
import NavigationBar from "../NavigationBar";
import headerStyles from '../Header.module.css';
import BackButton from "../BackButton";


export function ProductPage(){

    return (
        <>
        <header className={headerStyles.header}>
            <NavigationBar/>
            <h2> Shopping App</h2>
        </header>
        <div>
            <BackButton/>
        </div>
        <main> 
            <ProductDetails/>
        </main>
        </>
        
    );

}
