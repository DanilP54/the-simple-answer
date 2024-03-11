import { AccountMenu } from "./AccountMenu";
import RegisterButtons from "./RegisterButtons";
import { useAuth } from "../../context/AuthContext";
import styles from './styles/Header.module.css';

const Header = () => {
    const { currentUser } = useAuth()

    return (
        <header className={styles.header}>
            {
                currentUser ? <AccountMenu email={currentUser.email} /> : <RegisterButtons />
            }   
        </header>
    )
}

export default Header;