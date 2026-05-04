
import ProductDetails from "../ProductDetails";
import NavigationBar from "../NavigationBar";

export function ProductPage(){

    return (
        <>
        <header>
            <NavigationBar/>
            <h2> Product:</h2>
            
        </header>
        <main> 
            <ProductDetails/>
        </main>
        </>
        
    );

}
