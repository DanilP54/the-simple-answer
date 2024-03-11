import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const RegisterButtons = () => {
    return (
        <>
            <Link style={{ textDecoration: 'none' }} to='/register'>
                <Button
                    color="warning"
                    variant="outlined"
                    sx={{
                        fontFamily: "Honk, system-ui",
                        fontSize: '1rem'
                    }}
                >
                    Log In
                </Button>
            </Link>
            <Link style={{ textDecoration: 'none' }} to='/register/signup'>
                <Button
                    color="info"
                    variant="outlined"
                    sx={{
                        display: 'block',
                        fontFamily: "Honk, system-ui",
                        fontSize: '1rem'
                    }}>
                    Sign Up
                </Button>
            </Link>
        </>
    )
}

export default RegisterButtons;