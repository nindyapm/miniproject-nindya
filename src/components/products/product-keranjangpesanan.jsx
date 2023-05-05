import main from "../../assets/img/main.jpg"

const Pesanan = () => {
    return (
        <section className="Pesanan">
            <p className="text-content" style={{fontSize:'20px', paddingTop:'15px'}}>Pesanan</p>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="row">
                            <div className="col-3">
                                <img 
                                className="w-100 detail-foto"
                                src={main}
                                alt="Tas Rotan"
                                />
                            </div>
                            <div className="col-6">
                                <h6 className="NamaTas">Tas Rotan</h6>
                                <form action="">
                                    <div className="row">
                                        <div className="col-auto">
                                            <label htmlFor="jumlah-product" className="form-label">
                                                Jumlah
                                            </label>
                                        </div>
                                        <div className="col">
                                            <input
                                                type="number"
                                                className={'form-control JumlahTas'}
                                                //value={}
                                                id="jumlah-product"
                                                name= "JumlahProduct"
                                                //onChange={}
                                            />
                                        </div>
                                    </div>
                                    <div className="row" style={{marginTop:'10px'}}>
                                        <div className="col-auto">
                                            <label htmlFor="motif-product" className="form-label">
                                                Motif
                                            </label>
                                        </div>
                                        <div className="col">
                                            <input
                                                type="text"
                                                className={'form-control MotifTas'}
                                                //value={}
                                                id="motif-product"
                                                name= "MotifProduct"
                                                //onChange={}
                                            />
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col-auto">
                                <p className="Harga mt-3" style={{textAlign:'end'}}>Rp.200.000</p>
                                <div className="btn-group" role="group" >
                                <button type="button" className="btn btn-success" style={{borderRadius:'10px', width:'76px'}}>Edit</button>
                                <button type="button" className="btn btn-danger" style={{marginLeft:'5px', borderRadius:'10px', width:'76px', padding:'4px'}}>Remove</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="SubtotalPesanan">
                            <h6>Semua Pesanan</h6>
                            <hr />
                            <div className="row">
                                <div className="col">
                                    Subtotal
                                </div>
                                <div className="col-auto">
                                    Rp.200.000
                                </div>
                            </div>
                            <a href="/Pengiriman">
                                <button type="button" className="checkout-btn">CHECKOUT</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pesanan