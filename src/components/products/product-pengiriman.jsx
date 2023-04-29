import main from "../../assets/img/main.jpg"
import "../../assets/css/Pengiriman.css"
const ProductPengiriman = () => {
    return (
        <section className="productPengiriman">
            <p className="text-content" style={{fontSize:'20px', paddingTop:'15px'}}>Pengiriman</p>
            <div className="container">
                <div className="row">
                    <div className="col-2" style={{width:'200px'}}>
                        <img 
                            className="w-75" 
                            src={main}
                            alt="Tas Rotan"
                        />
                    </div>
                    <div className="col-5">
                        <h6 className="NamaTas">Tas Rotan</h6>        
                        <div className="row">
                            <div className="col-auto">
                                <label htmlFor="jumlah-product" className="form-label">
                                    Jumlah
                                </label>
                            </div>
                            <div className="col">
                                <p>: 1</p>
                            </div>
                        </div>
                        <div className="row" style={{marginTop:'10px'}}>
                            <div className="col-auto">
                                <label htmlFor="motif-product" className="form-label">
                                    Motif
                                </label>
                            </div>
                            <div className="col">
                                <p style={{marginLeft:'17px'}}>: 2</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-auto">
                        <p className="Harga mt-3" style={{textAlign:'end'}}>Rp.200.000</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductPengiriman