import { Button, styled } from "@mui/material"
import { grey } from "@mui/material/colors"


const FormButton = styled(Button)(({ theme }) => ({
    '&:hover': {
        borderColor: theme.palette.warning.dark,
    },
    '&:disabled': {
        color: grey[700],
        border: `1px solid ${grey[700]}`,
    },
    color: theme.palette.warning.dark,
    borderColor: theme.palette.warning.dark,
}))

export {FormButton}