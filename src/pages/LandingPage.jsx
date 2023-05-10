import Navbar from "../components/navbar/Navbar"
import Header from "../components/header/Header"
import FavProduct from "../components/products/product-landingpage"
import Footer from "../components/footer/Footer"
import "../assets/css/LandingPage.css"

const LandingPage = () => {
    return (
        <>
            <Navbar />
            <Header />
            <FavProduct />
            <Footer />  
        </>
    )
}

export default LandingPage