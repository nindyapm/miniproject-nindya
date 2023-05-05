import main from "../../assets/img/main.jpg"

const Detail = () => {
    return (
        <section className="DetailProduct">
            <p className="text-content" style={{fontSize:'20px', paddingTop:'15px'}}>Detail Tas</p>
            <div className="container deskripsi">
                <div className="row mt-4">
                    <div className="col-lg-5">
                        <img 
                            className="w-100 detail-foto"
                            src={main}
                            alt="Tas Rotan"
                        />
                    </div>
                    <div className="col-lg-7">
                        <h5 className="NamaTas">Tas Rotan</h5>
                        <p className="Harga mt-3">Rp.200.000</p>
                        <p className="Deskripsi">Tas rotan motif dayak, dianyam manual menggunakan tangan dan proses yang tradisional. Kuat dan tahan lama, bisa dibawa kemana saja serta digunakan diacara formal maupun travelling.</p>
                        <div className="row">
                            <div className="col-sm-2">
                                <p>Kategori</p>  
                            </div>
                            <div className="col">
                                <p className="Kategori">: Tote Bags</p>  
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-2">
                                <p>Ukuran</p>
                            </div>
                            <div className="col">
                                <p className="Ukuran">: Lebar 30cm, Tinggi 20cm </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-2">
                                <p>Berat</p>
                            </div>
                            <div className="col">
                             <p className="Berat">: 650 gram</p>
                            </div>
                        </div>
                        <p className="Beli">Beli Sekarang</p>
                        <form action="">
                            <div className="row">
                                <div className="col-auto">
                                    <label htmlFor="jumlah-product" className="form-label">
                                        Jumlah
                                    </label>
                                </div>
                                <div className="col-auto">
                                    <input
                                        type="number"
                                        className={'form-control jumlahTas'}
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
                                <div className="col-auto">
                                    <input
                                        type="text"
                                        className={'form-control motifTas'}
                                        //value={}
                                        id="motif-product"
                                        name= "MotifProduct"
                                        //onChange={}
                                    />
                                </div>
                            </div>
                            <button type="button" className="tambah-btn">Masukkan Ke Keranjang</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Detail