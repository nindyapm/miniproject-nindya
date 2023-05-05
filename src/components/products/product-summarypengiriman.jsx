const SummaryPengiriman = () => {
    return (
        <section className="SummaryPengiriman">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <p style={{fontWeight:'bold'}}>Jasa Pengiriman</p>
                        <div className="JasaPengiriman">
                            <div className="form-check">
                                <input
                                    type="radio"
                                    id="jne"
                                    name="jasaPengiriman"
                                    defaultValue="JNE Reguler"
                                />
                                <label htmlFor="jne" className="m-2" style={{fontWeight:'bold'}}>JNE Reguler (Rp.20.000)</label>
                            </div>
                            <div className="form-check">
                                <input
                                    type="radio"
                                    id="jnt"
                                    name="jasaPengiriman"
                                    defaultValue="JNT Reguler"
                                />
                                <label htmlFor="jnt" className="m-2" style={{fontWeight:'bold'}}>JNT Reguler (Rp.25.000)</label> <br />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 gy-4">
                        <div className="Total">
                            <h6>Semua Pesanan</h6>
                            <hr />
                            <div className="row">
                                <div className="col">
                                    Total Pembelian <br/>
                                    Pengiriman
                                </div>
                                <div className="col" style={{textAlign:'end'}}>
                                    Rp.200.000 <br />
                                    Rp.20.000
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col" style={{fontWeight:'bold'}}>
                                    TOTAL   
                                </div>
                                <div className="col" style={{textAlign:'end', fontWeight:'bold'}}>
                                    Rp.220.000
                                </div>
                            </div>
                            <div style={{textAlign:'right'}}>
                                <a href="/Pembayaran">
                                    <button type="button" className="bayar-btn">BAYAR</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SummaryPengiriman