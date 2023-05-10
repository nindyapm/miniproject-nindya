import Navbar from "../components/navbar/Navbar"
import AllProduct from "../components/products/product-productpage"
import Footer from "../components/footer/Footer"
import "../assets/css/ProductPage.css"

const ProductPage = () => {
    return (
        <>
            <Navbar />
            <AllProduct />
            <Footer />
        </>
    )
}

export default ProductPage