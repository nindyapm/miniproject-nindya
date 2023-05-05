const Alamat = () => {
    return (
        <section className="Alamat">
            <div className="container-fluid">
                <p style={{fontWeight:'bold'}}>Alamat Pengiriman</p>
                <div className="row">
                    <div className="col-5">
                        <label htmlFor="Nama">Nama</label>
                        <input 
                            className="form-control formAlamat"
                            type="text" 
                            id="Nama" 
                            name="Nama"
                        />
                        <label htmlFor="NomorHP" className="NoHP mt-3">Nomor HP</label>
                        <input 
                            className="form-control formAlamat"
                            type="number" 
                            id="NomorHP" 
                            name="NomorHP"
                        />
                        <label htmlFor="Provinsi" className="Provinsi mt-3">Provinsi</label>
                        <input 
                            className="form-control formAlamat"
                            type="text" 
                            id="Provinsi" 
                            name="Provinsi"
                        />
                    </div>
                    <div className="col-7">
                        <div className="col-12">
                            <label htmlFor="AlamatDetail" className="AlamatDetail">Alamat</label>
                            <input 
                                className="form-control formAlamat"
                                type="text" 
                                id="AlamatDetail" 
                                name="AlamatDetail"
                            />
                        </div>
                        <div className="row mt-3">
                            <div className="col-6">
                                <label htmlFor="Kota" className="Kota">Kota</label>
                                <input 
                                    className="form-control formAlamat"
                                    type="text" 
                                    id="Kota" 
                                    name="Kota"
                                /> 
                            </div>
                            <div className="col-6">
                                <label htmlFor="Kecamatan" className="Kecamatan">Kecamatan</label>
                                <input 
                                    className="form-control formAlamat"
                                    type="text" 
                                    id="Kecamatan" 
                                    name="Kecamatan"
                                /> 
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-6">
                                <label htmlFor="Kelurahan" className="Kelurahan">Kelurahan</label>
                                <input 
                                    className="form-control formAlamat"
                                    type="text" 
                                    id="Kelurahan" 
                                    name="Kelurahan"
                                /> 
                            </div>
                            <div className="col-6">
                                <label htmlFor="KodePos" className="KodePos">Kode Pos</label>
                                <input 
                                    className="form-control formAlamat"
                                    type="number" 
                                    id="KodePos" 
                                    name="KodePos"
                                /> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Alamat