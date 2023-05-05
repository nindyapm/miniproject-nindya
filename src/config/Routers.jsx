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
];

export default Routers