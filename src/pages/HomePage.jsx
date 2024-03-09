import Header from "../components/dashboard/header/Header";
import MainFunctional from "../components/dashboard/main_functional/MainFunctional";
import Footer from "../components/dashboard/footer/Footer";


const HomePage = () => {
 
    return (
        <div style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            padding: '1rem',
            
        }}>
            <Header />
            <div style={{
                width: '100%',
                flex: '1 1 0',
            }}>
                <MainFunctional  />
            </div>
            
            <Footer />
        </div>
    )
}


export default HomePage;