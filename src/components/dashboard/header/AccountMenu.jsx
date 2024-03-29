import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, ListItemButton, alpha } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useAuth } from '../../context/AuthContext';
import { blue, grey, orange } from '@mui/material/colors';
import dasktopMenu from '../../../assets/svg/account_menu.svg';
import styles from './styles/AccountMenu.module.css';


const SimpleDialog = ({ email, open, onClose }) => {

    const { log_out } = useAuth()

    const handleClose = () => {
        onClose();
    };

    const handleLogOut = () => {
        log_out()
        onClose();
    };

    return (
        <Dialog onClose={handleClose} open={open}
            sx={{
                '& .MuiPaper-root': {
                    backgroundColor: alpha(blue[900], .4),
                    backdropFilter: 'blur(10px)',
                    height: '8rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    '& .MuiList-root': {
                        width: '100%',
                        height: '100%',
                    }
                }

            }}>
            <DialogTitle sx={{
                display: 'flex',
                alignItems: 'center',
                columnGap: '10px',
                color: orange[600],
            }}>
                <AccountCircleIcon />
                {email}
            </DialogTitle>
            <List sx={{
                pt: 0,
                backgroundColor: 'transparent',
                padding: 0,
            }}>

                <ListItem sx={{
                    padding: 0,
                    height: '100%'
                }} disableGutters>
                    <ListItemButton
                        autoFocus
                        onClick={() => handleLogOut()}
                        sx={{
                            margin: 'auto',
                            fontWeight: '600',
                            color: grey[400],
                            width: '100%',
                            height: '100%',
                            padding: 0,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                        disableRipple>
                        <LogoutIcon sx={{
                            marginRight: '10px'
                        }} />
                        Log out
                    </ListItemButton>
                </ListItem>
            </List>
        </Dialog>
    );
}

const AccountMenu = ({ email }) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (

        <div>
            <IconButton variant="outlined" onClick={handleClickOpen}>
                <div className={styles.dasktop__menu}>
                    <img src={dasktopMenu} alt="icon menu" />
                </div>
                <div className={styles.mobile__menu} >
                    <MenuIcon color='warning' />
                </div>
            </IconButton >
            <SimpleDialog
                email={email}
                open={open}
                onClose={handleClose}
            />
        </div >

    );
}

export { AccountMenu }