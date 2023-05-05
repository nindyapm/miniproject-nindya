import Navbar from "../components/navbar/navbar"
import ProductPengiriman from "../components/products/product-pengiriman"
import Alamat from "../components/products/product-alamatpengiriman"
import SummaryPengiriman from "../components/products/product-summarypengiriman"
import Footer from "../components/footer/Footer"
import "../assets/css/Pengiriman.css"

const PengirimanPage = () => {
    return (
        <>
            <Navbar />
            <ProductPengiriman />
            <Alamat />
            <SummaryPengiriman />
            <Footer />
        </>
    )
}

export default PengirimanPage