import { UserMenu } from "./UserMenu";
import RegisterButtons from "./RegisterButtons";
import { useAuth } from "../../context/AuthContext";

const Header = () => {
    const { currentUser } = useAuth()

    return (
        <header style={{padding: '10px'}}>
            {
                currentUser ? <UserMenu email={currentUser.email} /> : <RegisterButtons />
            }   
        </header>
    )
}

export default Header;