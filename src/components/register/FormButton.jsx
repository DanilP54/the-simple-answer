import { Button, styled } from "@mui/material"


const FormButton = styled(Button)(({ theme }) => ({
    '&:hover': {
        borderColor: theme.palette.warning.dark,
    },
    color: theme.palette.warning.dark,
    borderColor: theme.palette.warning.dark,
}))

export {FormButton}