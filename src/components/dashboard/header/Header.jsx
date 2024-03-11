import { UserMenu } from "./UserMenu";
import RegisterButtons from "./RegisterButtons";
import { useAuth } from "../../context/AuthContext";
import styles from './styles/Header.module.css';

const Header = () => {
    const { currentUser } = useAuth()

    return (
        <header className={styles.header}>
            {
                currentUser ? <UserMenu email={currentUser.email} /> : <RegisterButtons />
            }   
        </header>
    )
}

export default Header;