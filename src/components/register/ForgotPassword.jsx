import { Alert, Stack, Typography } from "@mui/material";
import { grey, orange } from "@mui/material/colors";
import { FormButton } from "./FormButton";
import { FormInput } from "./FormInput";
import { useInput } from "../hooks/useInput";
import { Error } from "../error/Error";
import { useRequestAuth } from "../hooks/useFetchAuth";
import { LinearLoader } from "../liner_loader/LinearLoader";
import React from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import styles from './styles/Form.module.css';


const ForgotPassword = () => {

    const { reset_password } = useAuth()
    const [showErrorValidate, setShowErrorValidate] = React.useState(false)
    const { errorResponse, isLoading, sendRequest, successResetPasword } = useRequestAuth()

    const email = useInput('', {
        pattern: /.+@.+\..+/i,
        isEmpty: true
    })

    const handleRequest = () => {
        if (email.validateError) {
            return setShowErrorValidate(true)
        }
        setShowErrorValidate(false)
        sendRequest(reset_password, '/register', email.value)
    }

    if (successResetPasword) {
        return (
            <>
                {isLoading && <LinearLoader />}
                <Alert style={{ color: 'white', alignItems: 'center' }} variant="outlined" severity="success">
                    An email has been sent to reset your password. Please enter your email and new password again
                </Alert>
                <Link style={{ color: grey[400] }} to='/register'>Sign In</Link>
            </>
        )
    }

    return (
        <>
            {isLoading && <LinearLoader />}
            <Typography
                className={styles.title}
                variant="h4"
            >Reset Password</Typography>
            {
                showErrorValidate &&
                <Error error={showErrorValidate}>
                    {'Email must be valid'}
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
                    label='Email'
                    size='small'
                    variant='filled'
                />
                <FormButton
                    onClick={handleRequest}
                    disabled={email.isEmpty}
                    variant='outlined'
                >
                    Reset Password
                </FormButton>
            </Stack>
        </>
    )
}

export default ForgotPassword;