import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const RegisterButtons = () => {
    return (
        <div style={{ display: 'flex', columnGap: '10px' }}>
            <Link style={{ textDecoration: 'none', marginLeft: 'auto' }} to='/register'>
                <Button
                    color="warning"
                    variant="outlined"
                >
                    Log In
                </Button>
            </Link>
            <Link style={{ textDecoration: 'none' }} to='/register/signup'>
                <Button
                    color="info"
                    variant="outlined"
                    sx={{ display: 'block' }}>
                    Sign Up
                </Button>
            </Link>
        </div>
    )
}

export default RegisterButtons;