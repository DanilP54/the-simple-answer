import Header from "../components/dashboard/header/Header";
import Main from "../components/dashboard/main/Main";
import Footer from "../components/dashboard/footer/Footer";
import styles from './styles/HomePage.module.css';


const HomePage = () => {
 
    return (
        <div className={styles.home__container}>
            <Header />
            <div className={styles.main__container}>
                <Main />
            </div>
            <Footer />
        </div>
    )
}


export default HomePage;