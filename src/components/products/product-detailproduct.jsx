import { useState } from 'react';
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
    mutation MyQuery($object: Product_insert_input!) {
        insert_Cart_one(object: $object) {
            idCart
            jumlahTas
            motifTas
            subtotal
        }
    }
`

const Detail = () => {
    const card = useLocation()
    console.log(card);

    const [insertProduct] = useMutation(ADD_PRODUCT, {
        refetchQueries: [GetProductList]
    })

    const [cart,setCart] = useState({
        idCart: "",
        jumlahTas:"",
        motifTas:"",
        subtotal:"",
    })

    const handleInputData = e => {
        const name = e.target.name;
        let value = e.target.value;

        setCart((prev) => ({
            ...prev,
            [name] : value
        }))
    }

    const handleSubmitData = e => {
        e.preventDefault();
        
        insertProduct({
            variables: {
                object: {
                    idCart: uuid(),
                    jumlahTas: cart.jumlahTas,
                    motifTas: cart.motifTas,
                    subtotal: cart.subtotal
                }
            }
        })


    }

    return (
        <section className="DetailProduct" key={card.state.data.idProduct}>
            <p className="text-content" style={{fontSize:'20px', paddingTop:'15px'}}>Detail Tas</p>
            <div className="container deskripsi">
                <div className="row mt-4">
                    <div className="col-lg-5">
                        <img 
                            className="w-100 detail-foto"
                            src={card.state.data.gambarProduct}
                            alt="Tas Rotan"
                        />
                    </div>
                    <div className="col-lg-7">
                        <h5 className="NamaTas">{card.state.data.namaProduct}</h5>
                        <p className="Harga mt-3">Rp.{card.state.data.hargaProduct}</p>
                        <p className="Deskripsi">{card.state.data.deskripsiProduct}</p>
                        <div className="row">
                            <div className="col-sm-2">
                                <p>Kategori</p>  
                            </div>
                            <div className="col">
                                <p className="Kategori">: {card.state.data.kategoriProduct}</p>  
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-2">
                                <p>Ukuran</p>
                            </div>
                            <div className="col">
                                <p className="Ukuran">: {card.state.data.ukuranProduct} </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-2">
                                <p>Berat</p>
                            </div>
                            <div className="col">
                             <p className="Berat">: {card.state.data.beratProduct}</p>
                            </div>
                        </div>
                        <p className="Beli">Beli Sekarang</p>
                        <form>
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
                                        name= "JumlahProduct"
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
                                        name= "MotifProduct"
                                        onChange={handleInputData}
                                    />
                                </div>
                            </div>
                            <button 
                                type="button" 
                                className="tambah-btn"
                                onSubmit={handleSubmitData}
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