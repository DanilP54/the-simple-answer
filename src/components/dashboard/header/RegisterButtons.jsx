import { Link } from "react-router-dom";
import styles from './styles/RegisterButton.module.css';

const RegisterButtons = () => {
    return (
        <>
            <Link className={styles.register__button_links} to='/register'>
                <button>
                    Log In
                </button>
            </Link>
            <Link className={styles.register__button_links} to='/register/signup'>
                <button>
                    Sign Up
                </button>
            </Link>
        </>
    )
}

export default RegisterButtons;