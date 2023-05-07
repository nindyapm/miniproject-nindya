import DetailProduct from "../pages/DetailProduct";
import KeranjangPesanan from "../pages/KeranjangPesanan";
import LandingPage from "../pages/LandingPage";
import PembayaranPage from "../pages/PembayaranPage";
import PengirimanPage from "../pages/PengirimanPage";
import ProductPage from "../pages/ProductPage";

const Routers = [
    {
        path: "/",
        element: <LandingPage/>,
    },
    {
        path: "/ProductPage",
        element: <ProductPage/>,
    },
    {
        path: "/LandingPage",
        element: <LandingPage/>,
    },
    {
        path: "/DetailProduct/",
        element: <DetailProduct/>,
    },
    {
        path: "/KeranjangPesanan",
        element: <KeranjangPesanan/>,
    },
    {
        path: "/Pengiriman",
        element: <PengirimanPage/>,
    },
    {
        path: "/Pembayaran",
        element: <PembayaranPage/>,
    },
];

export default Routers