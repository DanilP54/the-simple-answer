import { Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useRequestQuestions } from "../../hooks/useRequestQuestions";


const Footer = () => {
    const { currentUser } = useAuth()
    const { isError } = useRequestQuestions()

    return (
        <>
            {
                !currentUser && !isError &&
                <footer style={{
                    padding: '10px',
                }}>
                    <Typography fontSize={'13px'} sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        color: grey[300],
                        fontSize: 'clamp(11px, 1.5vw, 13px)',
                    }}
                    >
                        <Link style={{ color: grey[300] }} to='/register' >
                            Зерегестрируйся
                        </Link>
                        , если хочешь задать свой вопрос.
                    </Typography>

                </footer>
            }
        </>

    )
}

export default Footer;