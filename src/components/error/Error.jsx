import { Alert } from "@mui/material"
import styles from './Error.module.css';

const Error = ({ children }) => {
    return (
        <>
            <Alert className={styles.error} severity="error" variant="outlined">
                {children}
            </Alert>
        </>
    )
}

export { Error }