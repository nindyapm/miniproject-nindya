import main from "../../assets/img/main.jpg"
import { Link } from "react-router-dom"
import content from "../../assets/img/ikon-landingpage.png"

const Header = () => {
    return (
        <>
            <section className="headers">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 col-lg-6">
                            <div className="text-welcome" style={{fontSize:35, fontWeight:"bold"}}>
                                Penampilan sempurna dengan tas rotan’s
                            </div> 
                            <div className="text-welcome-content">
                                Tas Rotan karya masyarakat lokal asli Kabupaten Barito Timur. 
                                Model tas yang menarik dan modern membuat penampilan anda semakin sempurna. 
                                Melestarikan produk lokal pilihan terbaik.
                            </div>
                            <div className="buttons">
                                <Link to={"/ProductPage"} className="btn">
                                    Beli Sekarang
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6">
                            <img 
                                className="w-50 main-foto"
                                src={main}
                                alt="Tas Rotan"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="content">
            <div className="container">
                <div className="row">
                    <p className="text-content">Kelebihan Tas Rotan’s</p>
                </div>
                <div className="row">
                    <div style= {{ textAlign: "center", paddingTop: "10px"}}>
                        <img 
                            className="w-50 "
                            src={content}
                            alt="Kelebihan Tas Rotan"
                        />
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Header