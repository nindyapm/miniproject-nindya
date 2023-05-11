import { gql, useQuery, useMutation } from "@apollo/client";
import { useState } from "react";
import { GetProduct } from "../get-data/GetCart";
import { Link } from "react-router-dom";

export const DELETE_PRODUCTS = gql`
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

const UPDATE_PRODUCT = gql`
mutation MyMutation($idCart: uuid!, $object: Cart_set_input!) {
    update_Cart_by_pk(pk_columns: {idCart: $idCart}, 
        _set: 
          $object
    ) 
        {
            jumlahTas
            motifTas
            total
        }
  }
`
//fungsi menghitung subtotal harga tas
const SubtotalTas = (data) => {
    let subtotal = 0;
    if (data.length > 0) {
        data?.forEach((data) => {
            subtotal += data.total;
        });
    }
    console.log(subtotal);
    return subtotal
}

const Pesanan = () => {
    const { data, loading } = useQuery(GetProduct)

    const [deleteProduct] = useMutation(DELETE_PRODUCTS, {
        refetchQueries: [GetProduct]
    })

    const handleDelete = (idCart) => {
        if (window.confirm('Apakah yakin ingin menghapus data?')) {
            deleteProduct({
                variables: {
                    idCart: idCart
                }
            })
        }
    }

    const [updateProduct] = useMutation(UPDATE_PRODUCT, {
        refetchQueries: [{ query: GetProduct }]
    })

    const [tempData, setTempData] = useState({})

    const handleEdit = (index) => {
        console.log(data.Cart[index].idCart);
        
        if (window.confirm('Apakah yakin ingin mengupdate data?')) {
            updateProduct({
                variables: {
                    idCart: data?.Cart[index].idCart,
                    object: {
                        jumlahTas: tempData.jumlahTas,
                        motifTas: tempData.motifTas,
                        total: tempData.jumlahTas * data.Cart[index].hargaTas,
                    }
                }
            })
        }
    }

    const handleChange = (e, index, tempData) => {
        const idCart = data?.Cart[index].idCart
        const id = tempData?.idCart
        console.log(idCart);
        console.log(id);
        if (idCart === id) {
            const { name, value } = e.target
            setTempData(prev => ({
                ...prev,
                [name]: value,
                index: index
            }))
        }
        console.log(e.target);
        console.log(index);
        console.log(tempData);
    }

    return (
        <section className="Pesanan">
            <p className="text-content" style={{ fontSize: '20px', paddingTop: '15px' }}>Pesanan</p>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-8">
                        {
                            !loading ?
                                data?.Cart.map((item, index) => (
                                    <div className="row" key={item.idCart} item={item}>
                                        <div className="col-3">
                                            <img
                                                className="w-100 detail-foto"
                                                src={item.gambarTas}
                                                alt="Tas Rotan"
                                            />
                                        </div>
                                        <div className="col-4">
                                            <h6 className="NamaTas">{item.namaTas}</h6>
                                            <div className="row">
                                                <div className="col-auto">
                                                    <label htmlFor="jumlah-product" className="form-label">
                                                        Jumlah
                                                    </label>
                                                </div>
                                                <div className="col">
                                                    <p>: {item.jumlahTas} x Rp.{item.hargaTas}</p>
                                                </div>
                                            </div>
                                            <div className="row" style={{ marginTop: '10px' }}>
                                                <div className="col-auto">
                                                    <label htmlFor="motif-product" className="form-label">
                                                        Motif
                                                    </label>
                                                </div>
                                                <div className="col">
                                                    <p style={{ marginLeft: '17px' }}>: {item.motifTas}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-5" style={{ textAlign: "end" }}>
                                            <p className="Harga mt-2">Rp.{item.total}</p>
                                            <form style={{ textAlign: "end", marginLeft: "50px" }}>
                                                <div className="row">
                                                    <div className="col-auto">
                                                        <label htmlFor="jumlah-product" className="form-label">
                                                            Jumlah
                                                        </label>
                                                    </div>
                                                    <div className="col-2">
                                                        <input
                                                            type="number"
                                                            className={'form-control JumlahTas'}
                                                            value={tempData.jumlahTas}
                                                            id="jumlah-product"
                                                            name="jumlahTas"
                                                            onChange={(e) => handleChange(e, index, item)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="row" style={{ marginTop: '10px' }}>
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
                                                            name="motifTas"
                                                            onChange={(e) => handleChange(e, index, item)}
                                                        />
                                                    </div>
                                                </div>
                                            </form>
                                            <div className="btn-group mt-4" role="group" >
                                                <button type="button" className="btn btn-success" style={{ borderRadius: '10px', width: '76px' }}
                                                    onClick={() => handleEdit(index)}
                                                >
                                                    Edit
                                                </button>
                                                <button type="button" className="btn btn-danger" style={{ marginLeft: '5px', borderRadius: '10px', width: '76px', padding: '4px' }}
                                                    onClick={() => handleDelete(item.idCart)}
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )) :
                                <div> <p style={{ textAlign: "center", color: "black" }}>Loading...</p> </div>
                        }

                    </div>

                    <div className="col-lg-4">
                        <div className="SubtotalPesanan">
                            <h6>Semua Pesanan</h6>
                            <hr />
                            <div className="row">
                                <div className="col">
                                    Total Harga Tas
                                </div>
                                <div className="col-auto">
                                    Rp. {data?.Cart?.length > 0 && SubtotalTas(data?.Cart)}
                                </div>
                            </div>

                            <Link to="/Pengiriman" className="btn checkout-btn">
                                CHECKOUT
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pesanan