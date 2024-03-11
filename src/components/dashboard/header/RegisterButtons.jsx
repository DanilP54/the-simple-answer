import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const RegisterButtons = () => {
    return (
        <>
            <Link style={{ textDecoration: 'none' }} to='/register'>
                <Button
                    color="warning"
                    variant="text"
                >
                    Log In
                </Button>
            </Link>
            <Link style={{ textDecoration: 'none' }} to='/register/signup'>
                <Button
                    color="info"
                    variant="text"
                    sx={{ display: 'block' }}>
                    Sign Up
                </Button>
            </Link>
        </>
    )
}

export default RegisterButtons;