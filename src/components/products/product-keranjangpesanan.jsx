import { gql, useQuery, useMutation} from "@apollo/client";
import { useState } from "react";
import { GetProduct } from "../get-data/GetCart";

const DELETE_PRODUCTS = gql `
mutation MyMutation ($idCart: uuid!){
    delete_Cart_by_pk(idCart: $idCart) {
      idCart
      hargaTas
      gambarTas
      jumlahTas
      motifTas
      namaTas
      total
    }
  }
`

const UPDATE_PRODUCT = gql `
mutation MyMutation($idCart: uuid!) {
    update_Cart_by_pk(pk_columns: {idCart: $idCart}, 
        _set: {
          jumlahTas: $jumlahTas
          motifTas: $motifTas
        }
    ) 
        {
            jumlahTas
            motifTas
        }
  }
`

const Pesanan = () => {
    const {data} = useQuery(GetProduct)

    const [deleteProduct] = useMutation(DELETE_PRODUCTS, {
        refetchQueries: [GetProduct]
    })

    const handleDelete = (idCart) => {
        if(window.confirm('Apakah yakin ingin menghapus data?')){
            deleteProduct({
                variables: {
                   idCart: idCart
                }
            })
        }
    }

    const [updateProduct] = useMutation(UPDATE_PRODUCT, {
        refetchQueries: [{query: GetProduct}]
    })

    const [tempData, setTempData] = useState({})  

    const handleSubmit = () => {
        //e.preventDefault();
        updateProduct({
            variables: {
                idCart : data?.Cart[0]?.idCart,
                object : {
                    jumlahTas: tempData.jumlahTas,
                    motifTas: tempData.motifTas,
                }
            }
        })
    }

    const handleChange = (e) => {
        const {name,value} = e.target
        setTempData(prev => ({
            ...prev,
            [name] : value
        }))
    }

    return (
        <section className="Pesanan">
            <p className="text-content" style={{fontSize:'20px', paddingTop:'15px'}}>Pesanan</p>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-8">
                    {
                        data?.Cart.map((item) => (
                            <div className="row" key={item.idCart} item={item}>
                            <div className="col-3">
                                <img 
                                className="w-100 detail-foto"
                                src={item.gambarTas}
                                alt="Tas Rotan"
                                />
                            </div>
                            <div className="col-6">
                                <h6 className="NamaTas">{item.namaTas}</h6>
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
                                                //value={item.jumlahTas}
                                                value={tempData.jumlahTas}
                                                id="jumlah-product"
                                                name= "jumlahTas"
                                                onChange={handleChange}
                                                //onInput={(e) => setTempData(prev => ({...prev, jumlahTas: e.target.textContent}))}
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
                                                value={tempData.motifTas}
                                                id="motif-product"
                                                name= "motifTas"
                                                onChange={handleChange}
                                                //onInput={(e) => setTempData(prev => ({...prev, motifTas: e.target.textContent}))}
                                            />
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col-auto">
                                <p className="Harga mt-3" style={{textAlign:'end'}}>Rp.{item.total}</p>
                                <div className="btn-group" role="group" >
                                <button type="button" className="btn btn-success" style={{borderRadius:'10px', width:'76px'}}
                                    onClick={() => handleSubmit()}
                                >
                                    Edit
                                </button>
                                <button type="button" className="btn btn-danger" style={{marginLeft:'5px', borderRadius:'10px', width:'76px', padding:'4px'}}
                                    onClick={() =>  handleDelete(item.idCart) } 
                                >
                                    Remove
                                </button>
                                </div>
                            </div>
                        </div>
                        ))
                    }
                        
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
                                   Rp. {/* {item.subtotal} */}
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