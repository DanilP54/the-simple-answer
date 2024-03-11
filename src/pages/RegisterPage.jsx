import { Container, Tooltip } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import styles from './styles/RegisterPage.module.css';

const RegisterPage = () => {

    return (
        <>
            <Container className={styles.register__container} maxWidth='md'>
                <div className={styles.register__box}>
                    <div className={styles.register__box__link}>
                        <Tooltip title="go home" arrow>
                            <Link to={'/'}><KeyboardBackspaceIcon color="warning" /></Link>
                        </Tooltip>
                    </div>
                    <Outlet />
                </div>
            </Container>
        </>
    )
}

export default RegisterPage;