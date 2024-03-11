import { TextField, styled, alpha } from "@mui/material";

import { lime, yellow, grey, indigo, blue } from "@mui/material/colors";

const FormInput = styled((props) => (
    <TextField InputProps={{ disableUnderline: true }} {...props} />
))(({ theme }) => ({
    '& .MuiFilledInput-root': {
        overflow: 'hidden',
        backgroundColor: 'transparent',
        boxShadow: `${alpha(lime[200], 0.07)} 0 0 0 5px`,
        color: lime[200],
        transition: theme.transitions.create([
            'background-color',
            'box-shadow',
        ]),
        
        '&:hover': {
            backgroundColor: 'transparent',
        },
        '&.Mui-focused': {
            backgroundColor: 'transparent',
            boxShadow: `${alpha(blue[900], 0.25)} 0 0 0 5px`,
            borderColor: theme.palette.success.main,
            borderLeftWidth: 4,
        },
    },
    '& label': {
        color: grey[800]
    },
    '& label.Mui-focused': {
        color: yellow[900]
    },
}));


export { FormInput }