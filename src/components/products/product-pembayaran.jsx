const Pembayaran = () => {
    return (
        <section className="Pembayaran">
            <p className="text-content" style={{fontSize:'20px', paddingTop:'15px'}}>Pembayaran</p>
            <div className="container">
                <div className="main-bayar">
                    <p className="ringkasan">Ringkasan Pembelian</p>
                    {/* Alamat Pengiriman */}
                    <div className="row">
                        <div className="col">
                            <p className="teks-alamat">Alamat Pengiriman</p>
                            <p>Nindya Putri Maharani (085247839986)</p>
                            <p>Jl.Babarsari No.10C</p>
                            <p>Catur Tunggal, Depok, Sleman</p>
                            <p>Yogyakarta 55670</p>  
                        </div>
                        <div className="col-auto ms-auto">
                            <a href="/Pengiriman" className="icon-edit">
                                <i class="fa fa-pencil" />
                            </a>
                        </div>
                    </div>
                    {/* Produk yang dibeli */}
                    <div className="row">
                        <div className="col">
                            <p className="namaTas">Tas Rotan Amel</p>
                            <p>Jumlah: 1 | Motif: 4</p>
                        </div>
                        <div className="col">
                            <p className="hargaTas">
                                Rp.200.000
                            </p>
                        </div>
                    </div>
                    {/* Total Harga Tas */}
                    <div className="row">
                        <div className="col">
                            <p className="teks-TotalHargaTas">Total Harga Tas</p>
                        </div>
                        <div className="col">
                            <p className="TotalHargaTas">
                                Rp.200.000
                            </p>
                        </div>
                    </div>
                    {/* Jasa Pengiriman */}
                    <div className="row">
                        <div className="col">
                            <p className="jasaPengiriman">Pengiriman</p>
                        </div>
                        <div className="col">
                            <p className="JasaPengiriman">
                               JNE Reguler
                            </p>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col teks-totalPembayaran">
                            TOTAL   
                        </div>
                        <div className="col totalPembayaran">
                           Rp.220.000
                        </div>
                    </div>
                    {/* Metode Pembayaran */}
                    
                    {/* Button Pembayaran */}
                    <div style={{textAlign:'center'}}>
                        <button 
                            type="button" 
                            className="pembayaran-btn" 
                            data-bs-toggle="modal" 
                            data-bs-target="#pembayaranModal"
                        >
                            PROSES PEMBAYARAN
                        </button>
                    </div>
                </div>
            </div>
            <>
                {/* Modal */}
                <div
                    className="modal fade"
                    id="pembayaranModal"
                    tabIndex={-1}
                    aria-labelledby="pembayaranModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog">
                        <h6 className="text-pembayaranBerhasil">Pembayaran Berhasil</h6>
                        <div style={{textAlign:'center'}}>
                            <i className="fa fa-check-circle fa-3x mt-4" aria-hidden="true"/>
                        </div>
                        <a href="/LandingPage">
                            <button type="button" className="ok-btn">OK</button>
                        </a>
                    </div>
                </div>
            </>
        </section>     
    )  
}

export default Pembayaran