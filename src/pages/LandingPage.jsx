import Navbar from "../components/navbar/Navbar"
import Header from "../components/header/Header"
import Content from "../components/content-landingpage/content"
import FavProduct from "../components/products/product-landingpage"
import Footer from "../components/footer/Footer"
import "../assets/css/LandingPage.css"

const LandingPage = () => {
    return (
        <>
            <Navbar />
            <Header />
            <Content />
            <FavProduct />
            <Footer />  
        </>
    )
}

export default LandingPage