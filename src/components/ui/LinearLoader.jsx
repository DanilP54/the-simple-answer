import { LinearProgress } from "@mui/material";


const LinearLoader = () => {
    return (
        <div style = {{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            marginTop: 0
        }}>
            <LinearProgress />
        </div >
    )
}

export { LinearLoader }