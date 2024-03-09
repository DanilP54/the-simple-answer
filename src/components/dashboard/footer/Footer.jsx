import { Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";


const Footer = () => {
    const {currentUser} = useAuth()
    return (
        <footer>
            {
                !currentUser && <Typography fontSize={'13px'} sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    color: grey[300]
                }}
                >
                    <Link style={{color: grey[300]}} to='/register' >
                        Зерегестрируйся
                    </Link>
                    , если хочешь задать свой вопрос.
                </Typography>    
            }        
        </footer>
    )
}

export default Footer;