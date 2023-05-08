import { GetProduct } from "../get-data/GetCart";
import { useState } from "react"
import {gql, useMutation, useQuery} from "@apollo/client"
import { GetPemesanan } from "../get-data/GetPemesanan"
import uuid from "react-uuid";

const ADD_PRODUCT = gql `
mutation MyMutation($object: Pemesanan_insert_input!) {
    insert_Pemesanan_one(object: $object) {
      idPemesanan
      namaCustomer
      nomorHP
      provinsi
      alamat
      kota
      kecamatan
      kelurahan
      kodePos
      jasaPengiriman
      metodePembayaran
      totalPembayaran
    }
  }  
`

const ProductPengiriman = () => {
    const {data} = useQuery(GetProduct)

    const [insertProduct] = useMutation(ADD_PRODUCT, {
        refetchQueries: [GetPemesanan]
    })

    const [pengiriman, setPengiriman] = useState({
        idPemesanan: uuid(),
        namaCustomer:"",
        nomorHP:"",
        alamat:"",
        provinsi:"",
        kota:"",
        kecamatan:"",
        kelurahan:"",
        kodePos:"",
        jasaPengiriman:"",
        hargaJasaPengiriman:"",
        totalPembayaran:"",
        metodePembayaran:""
    })

    const handleInputData = e => {
        const name = e.target.name;
        let value = e.target.value;

        setPengiriman((prev) => ({
            ...prev,
            [name] : value
        }))
    }

    const handleSubmitData = e => {
        e.preventDefault();
        
        insertProduct({
            variables: {
                object: {
                    idPemesanan: uuid(),
                    namaCustomer:"",
                    nomorHP:"",
                    alamat:"",
                    provinsi:"",
                    kota:"",
                    kecamatan:"",
                    kelurahan:"",
                    kodePos:"",
                    jasaPengiriman:"",
                    totalPembayaran:"",
                    metodePembayaran:""
                }
            }
        })
    }

    return (
        <>
            <section className="productPengiriman">
                <p className="text-content" style={{fontSize:'20px', paddingTop:'15px'}}>Pengiriman</p>
                <div className="container">
                    {
                        data?.Cart.map((item) => (
                            <div className="row" key={item.idCart} item={item}>
                                <div className="col-2" style={{width:'200px'}}>
                                    <img 
                                        className="w-75" 
                                        src={item.gambarTas}
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
                                            <p>: {item.jumlahTas}</p>
                                        </div>
                                    </div>
                                    <div className="row" style={{marginTop:'10px'}}>
                                        <div className="col-auto">
                                            <label htmlFor="motif-product" className="form-label">
                                                Motif
                                            </label>
                                        </div>
                                        <div className="col">
                                            <p style={{marginLeft:'17px'}}>: {item.motifTas}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-auto">
                                    <p className="Harga mt-3" style={{textAlign:'end'}}>Rp.{item.subtotal}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>

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
                            name="namaCustomer"
                            value={pengiriman.namaCustomer}
                            onChange={handleInputData}
                        />
                        <label htmlFor="NomorHP" className="NoHP mt-3">Nomor HP</label>
                        <input 
                            className="form-control formAlamat"
                            type="number" 
                            id="NomorHP" 
                            name="nomorHP"
                            value={pengiriman.nomorHP}
                            onChange={handleInputData}
                        />
                        <label htmlFor="Provinsi" className="Provinsi mt-3">Provinsi</label>
                        <input 
                            className="form-control formAlamat"
                            type="text" 
                            id="Provinsi" 
                            name="provinsi"
                            value={pengiriman.provinsi}
                            onChange={handleInputData}
                        />
                    </div>
                    <div className="col-7">
                        <div className="col-12">
                            <label htmlFor="AlamatDetail" className="AlamatDetail">Alamat</label>
                            <input 
                                className="form-control formAlamat"
                                type="text" 
                                id="AlamatDetail" 
                                name="alamat"
                                value={pengiriman.alamat}
                                onChange={handleInputData}
                            />
                        </div>
                        <div className="row mt-3">
                            <div className="col-6">
                                <label htmlFor="Kota" className="Kota">Kota</label>
                                <input 
                                    className="form-control formAlamat"
                                    type="text" 
                                    id="Kota" 
                                    name="kota"
                                    value={pengiriman.kota}
                                    onChange={handleInputData}
                                /> 
                            </div>
                            <div className="col-6">
                                <label htmlFor="Kecamatan" className="Kecamatan">Kecamatan</label>
                                <input 
                                    className="form-control formAlamat"
                                    type="text" 
                                    id="Kecamatan" 
                                    name="kecamatan"
                                    value={pengiriman.kecamatan}
                                    onChange={handleInputData}
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
                                    name="kelurahan"
                                    value={pengiriman.kelurahan}
                                    onChange={handleInputData}
                                /> 
                            </div>
                            <div className="col-6">
                                <label htmlFor="KodePos" className="KodePos">Kode Pos</label>
                                <input 
                                    className="form-control formAlamat"
                                    type="number" 
                                    id="KodePos" 
                                    name="kodePos"
                                    value={pengiriman.kodePos}
                                    onChange={handleInputData}
                                /> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>

            <section className="SummaryPengiriman">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <p style={{fontWeight:'bold'}}>Jasa Pengiriman</p>
                        <div className="Pengiriman">
                            <div className="form-check">
                                <input
                                    type="radio"
                                    id="jne"
                                    name="jasaPengiriman"
                                    defaultValue="JNE Reguler"
                                    onChange={handleInputData}
                                />
                                <label htmlFor="jne" className="m-2" style={{fontWeight:'bold'}}>JNE Reguler</label>
                            </div>
                            <div className="form-check">
                                <input
                                    type="radio"
                                    id="jnt"
                                    name="jasaPengiriman"
                                    defaultValue="JNT Reguler"
                                    onChange={handleInputData}
                                />
                                <label htmlFor="jnt" className="m-2" style={{fontWeight:'bold'}}>JNT Reguler</label> <br />
                            </div>
                        </div>
                        <p className="teks-metodePembayaran">Metode Pembayaran</p>
                        <div className="row metodePembayaran">
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
                    </div>
                    <div className="col-lg-6 gy-4">
                        <div className="Total">
                            <h6>Semua Pesanan</h6>
                            <hr />
                            <div className="row">
                                <div className="col">
                                    Total Pembelian <br/>
                                </div>
                                <div className="col" style={{textAlign:'end'}}>
                                    Rp.200.000 <br />
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
                                    <button type="button" className="bayar-btn"
                                        onClick={handleSubmitData}
                                    >
                                        BAYAR
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>

        
    )
}

export default ProductPengiriman