import { Stack, Container, Tooltip } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const RegisterPage = () => {

    return (
        <Container
            maxWidth='md'
            sx={{
                minHeight: '100vh',
                display: 'flex',
            }}
        >
            <Stack
                spacing={4}
                sx={{
                    alignItems: 'center',
                    width: '26rem',
                    height: 'min-content',
                    padding: '2rem',
                    margin: 'auto',
                }}
            >
                <div style={{
                    width: '100%',
                }}>
                    <Tooltip title="go home" arrow>
                        <Link style={{
                            textDecoration: 'none',
                        }} to={'/'}>
                            <KeyboardBackspaceIcon color="warning" />
                        </Link>
                    </Tooltip>
                </div>
                <Outlet />
            </Stack>
        </Container>
    )
}

export default RegisterPage;