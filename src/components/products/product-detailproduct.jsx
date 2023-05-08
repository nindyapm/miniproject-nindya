import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { gql, useMutation} from "@apollo/client";
import uuid from 'react-uuid';

const GetProductList = gql`
        query GetProduct {
            Product{
                idProduct
                namaProduct
                hargaProduct
                deskripsiProduct
                kategoriProduct
                ukuranProduct
                beratProduct
                gambarProduct
            }
        }
`

const ADD_PRODUCT = gql `
    mutation MyQuery($object: Cart_insert_input!) {
        insert_Cart_one(object: $object) {
            idCart
		    namaTas
            jumlahTas
            motifTas
            total
        }
    }
`

const Detail = () => {
    const dataTas = useLocation()
    console.log(dataTas);

    const [insertProduct] = useMutation(ADD_PRODUCT, {
        refetchQueries: [GetProductList]
    })

    const [cart, setCart] = useState({
        idCart: "",
        jumlahTas:"",
        motifTas:"",
        total:"",
    })

    const handleInputData = (e) => {
        const name = e.target.name;
        let value = e.target.value;

        setCart((prev) => ({
            ...prev,
            [name] : value
        }))
    }

    const handleSubmitData = (e) => {
        e.preventDefault();
        const total = dataTas.state.data.hargaProduct * Number(cart.jumlahTas)
        
        console.log(dataTas);

        insertProduct({
            variables: {
                object: {
                    idCart: uuid(),
                    namaTas: dataTas.state.data.namaProduct,
                    gambarTas: dataTas.state.data.gambarProduct,
                    jumlahTas: cart.jumlahTas,
                    motifTas: cart.motifTas,
                    hargaTas: dataTas.state.data.hargaProduct,
                    total: total
                }
            }
        }).then(() => {
            alert(`Product ${dataTas.state.data.namaProduct} berhasil ditambahkan`)
        }).catch((error) => {
            console.log(error)
            alert(`Product ${dataTas.state.data.namaProduct} gagal ditambahkan`)
        })
    }

    return (
        <section className="DetailProduct" key={dataTas.state.data.idProduct}>
            <p className="text-content" style={{fontSize:'20px', paddingTop:'15px'}}>Detail Tas</p>
            <div className="container deskripsi">
                <div className="row mt-4">
                    <div className="col-lg-5">
                        <img 
                            className="w-100 detail-foto"
                            src={dataTas.state.data.gambarProduct}
                            alt="Tas Rotan"
                        />
                    </div>
                    <div className="col-lg-7">
                        <h5 className="NamaTas">{dataTas.state.data.namaProduct}</h5>
                        <p className="Harga mt-3">Rp.{dataTas.state.data.hargaProduct}</p>
                        <p className="Deskripsi">{dataTas.state.data.deskripsiProduct}</p>
                        <div className="row">
                            <div className="col-sm-2">
                                <p>Kategori</p>  
                            </div>
                            <div className="col">
                                <p className="Kategori">: {dataTas.state.data.kategoriProduct}</p>  
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-2">
                                <p>Ukuran</p>
                            </div>
                            <div className="col">
                                <p className="Ukuran">: {dataTas.state.data.ukuranProduct} </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-2">
                                <p>Berat</p>
                            </div>
                            <div className="col">
                             <p className="Berat">: {dataTas.state.data.beratProduct}</p>
                            </div>
                        </div>
                        <p className="Beli">Beli Sekarang</p>
                        <form >
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
                                        value={cart.jumlahTas}
                                        id="jumlah-product"
                                        name= "jumlahTas"
                                        onChange={handleInputData}
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
                                        value={cart.motifTas}
                                        id="motif-product"
                                        name= "motifTas"
                                        onChange={handleInputData}
                                    />
                                </div>
                            </div>
                            <button 
                                type="button" 
                                className="tambah-btn"
                                onClick={handleSubmitData}
                            >
                                Masukkan Ke Keranjang
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Detail