import {useNavigate } from "react-router-dom";
import styles from './BackButton.module.css';

const BackButton = () => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate("/")
    };

    return(
        <button className={styles.button} onClick={goBack}>
            Go Back
        </button>
    );

}
  

export default BackButton;

  