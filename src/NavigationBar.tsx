import  { NavLink} from 'react-router-dom';
import styles from './NavBar.module.css';


export function NavigationBar(){
    return(
        <>
        <nav className={styles.nav}>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
            </ul>
      </nav>
        </>
    );
}

export default NavigationBar;


