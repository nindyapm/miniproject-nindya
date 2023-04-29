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
                            <p>JNE Reguler</p>
                        </div>
                        <div className="col">
                            <p className="HargaJasaPengiriman">
                                Rp.20.000
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
                    <div className="row">
                        <p className="teks-metodePembayaran">Metode Pembayaran</p>
                        <div className="form-check">
                            <input
                                type="radio"
                                id="virtualAcc"
                                name="metodePembayaran"
                                defaultValue="VIRTUAL ACCOUNT"
                            />
                            <label htmlFor="virtualAcc" className="m-2" style={{fontWeight:'bold'}}>
                                VIRTUAL ACCOUNT
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                type="radio"
                                id="dana"
                                name="metodePembayaran"
                                defaultValue="DANA"
                            />
                            <label htmlFor="dana" className="m-2" style={{fontWeight:'bold'}}>
                                DANA
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                type="radio"
                                id="linkaja"
                                name="metodePembayaran"
                                defaultValue="LINK AJA"
                            />
                            <label htmlFor="linkaja" className="m-2" style={{fontWeight:'bold'}}>
                                LINK AJA
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                type="radio"
                                id="gopay"
                                name="metodePembayaran"
                                defaultValue="GOPAY"
                            />
                            <label htmlFor="gopay" className="m-2" style={{fontWeight:'bold'}}>
                                GOPAY
                            </label>
                        </div>  
                        <div className="form-check">
                            <input
                                type="radio"
                                id="ovo"
                                name="metodePembayaran"
                                defaultValue="OVO"
                            />
                            <label htmlFor="ovo" className="m-2" style={{fontWeight:'bold'}}>
                                OVO
                            </label>
                        </div>                 
                    </div>
                    {/* Button Pembayaran */}
                    <div style={{textAlign:'center'}}>
                        <button type="button" className="pembayaran-btn">PROSES PEMBAYARAN</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pembayaran