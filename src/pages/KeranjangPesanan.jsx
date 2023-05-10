import Navbar from "../components/navbar/Navbar"
import Pesanan from "../components/products/product-keranjangpesanan"
import Footer from "../components/footer/Footer"
import "../assets/css/KeranjangPesanan.css"

const KeranjangPesanan = () => {
    return (
        <>
            <Navbar />
            <Pesanan />
            <Footer />
        </>
    )
}

export default KeranjangPesanan