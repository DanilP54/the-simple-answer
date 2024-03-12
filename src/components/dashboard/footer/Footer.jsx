import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useRequestQuestions } from "../../hooks/useRequestQuestions";
import styles from './Footer.module.css';


const Footer = () => {
    const { currentUser } = useAuth()
    const { isError } = useRequestQuestions()

    return (
        <>
            {
                !currentUser && !isError &&
                <footer className={styles.footer}>
                    <Typography sx={{
                        fontSize: 'clamp(14px, 1.7vw, 16px)',
                        fontFamily: "Poiret One, sans-serif",
                    }} fontSize={'none'} className={styles.footer__link}>
                        <Link to='/register' >
                            Sign up
                        </Link>
                        , if you want to ask your question
                    </Typography>
                </footer>
            }
        </>

    )
}

export default Footer;