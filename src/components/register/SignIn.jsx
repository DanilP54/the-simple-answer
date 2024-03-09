import React from "react";
import { Stack, Typography, Alert } from "@mui/material";
import { grey, yellow } from "@mui/material/colors";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FormButton } from "./ui/FormButton";
import { FormInput } from "./ui/FormInput";
import { LinearLoader } from "../ui/LinearLoader";
import { useInput } from "../hooks/useInput";
import { Error } from "./Error";
import { useRequest } from "../hooks/useRequest";




const SignIn = () => {

    const { sign_in } = useAuth()
    const [showErrorValidate, setShowErrorValidate] = React.useState(false)
    const { isLoading, errorResponse, sendRequest } = useRequest()


    const email = useInput('', {
        pattern: /.+@.+\..+/i,
        isEmpty: true
    })
    const password = useInput('', {
        pattern: /.{5,}/,
        isEmpty: true
    })



    const handleRequest = () => {
        if (email.validateError || password.validateError) {
            return setShowErrorValidate(true)
        }
        setShowErrorValidate(false)
        sendRequest(sign_in, '/', email.value, password.value)

    }

    return (
        <>
            {
                isLoading && <LinearLoader />
            }
            <Typography variant="h4" sx={{
                fontSize: '2.5rem',
                color: yellow[900],

            }}>Log In</Typography>
            {
                showErrorValidate &&
                <Error error={showErrorValidate}>
                    {'Email must be valid and password must be at least 5 characters long'}
                </Error>
            }
            {
                !!errorResponse &&
                <Error error={!!errorResponse}>
                    {errorResponse}
                </Error>
            }
            <Stack
                component='form'
                noValidate
                spacing={4}
                width='100%'
            >
                <FormInput
                    onChange={email.onChange}
                    value={email.value}
                    type='email'
                    label='Email adress'
                    variant="filled"
                />
                <FormInput
                    onChange={password.onChange}
                    value={password.value}
                    type='password'
                    label='Password'
                    variant='filled'
                />
                <FormButton
                    onClick={handleRequest}
                    disabled={email.isEmpty || password.isEmpty}
                    variant='outlined'
                >
                    Sign In
                </FormButton>
            </Stack>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                rowGap: '10px'
            }}>
                <Link style={{
                    color: grey[500],
                    textDecoration: 'none'
                }} to='/register/forgotpassword'>Forgot Password?</Link>
                <Typography sx={{ color: grey[500] }} variant="span">
                    Need an account?<Link style={{ color: grey[500], textDecoration: 'none' }} to='/register/signup'> Sign Up</Link>
                </Typography>

            </div>
        </>
    )
}

export default SignIn;