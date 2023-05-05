import DetailProduct from "../pages/DetailProduct";
import KeranjangPesanan from "../pages/KeranjangPesanan";
import LandingPage from "../pages/LandingPage";
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
        path: "/DetailProduct",
        element: <DetailProduct/>,
    },
    {
        path: "/KeranjangPesanan",
        element: <KeranjangPesanan/>,
    },
];

export default Routers