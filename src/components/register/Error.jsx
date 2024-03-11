import { Alert } from "@mui/material"
import { grey } from "@mui/material/colors"

const Error = ({ children }) => {
    return (
        <>
            <Alert sx={{
                color: grey[300],
                height: 'min-content',
                alignItems: 'center',
                border: 'none',
            }} severity="error" variant="outlined">
                {children}
            </Alert>
        </>
    )
}

export { Error }