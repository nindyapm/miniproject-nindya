import { Link, Navigate, useLocation } from 'react-router-dom';
import { GetProduct } from "../get-data/GetCart";
import { GetPemesanan } from '../get-data/GetPemesanan';
import {gql, useMutation, useQuery} from "@apollo/client"
import uuid from 'react-uuid';
import { useNavigate } from 'react-router-dom';

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
      namaTas
      jumlahTas
      motifTas
    }
  }  
`
const DELETE_PRODUCTS = gql `
mutation MyMutation {
    delete_Cart(where: {}) {
      returning {
        idCart
        namaTas
        motifTas
      }
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

const Pembayaran = () => {
    const navigate = useNavigate();

    const [insertProduct] = useMutation(ADD_PRODUCT, {
        refetchQueries: [GetPemesanan]
    })

    const [deleteProduct] = useMutation(DELETE_PRODUCTS, {
        refetchQueries: [GetProduct]
    })

    // const handleDelete = (idCart) => {
    //         deleteProduct({
    //             variables: {
    //                 idCart: idCart
    //             }
    //         })
    // }

    //get data dari state pengiriman
    const {state} = useLocation()

    const {data} = useQuery(GetProduct)

    const handleSubmitData = e => {
        e.preventDefault();
        
        insertProduct({
            variables: {
                object: {
                    idPemesanan: uuid(),
                    namaCustomer: state.namaCustomer,
                    nomorHP: state.nomorHP,
                    alamat: state.alamat,
                    provinsi: state.provinsi,
                    kota:state.kota,
                    kecamatan:state.kecamatan,
                    kelurahan:state.kelurahan,
                    kodePos:state.kodePos,
                    jasaPengiriman:state.jasaPengiriman,
                    totalPembayaran: SubtotalTas(data.Cart),
                    metodePembayaran:state.metodePembayaran,
                    idCart: data.Cart[0].idCart,
                    namaTas: data.Cart[0].namaTas,
                    jumlahTas: data.Cart[0].jumlahTas,
                    motifTas: data.Cart[0].motifTas
                }
            }
        }).then(() => {
            deleteProduct();
           navigate('/LandingPage');
        }).catch((error) => {
            console.log(error)
            alert(`Pemesanan gagal ditambahkan`)
        })
    }



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
                            <p>{state.namaCustomer} {state.nomorHP}</p>
                            <p>{state.alamat}</p>
                            <p>{state.kelurahan}, {state.kecamatan}, {state.kota}</p>
                            <p>{state.provinsi} {state.kodePos}</p>  
                        </div>
                    </div>
                    {/* Jasa Pengiriman */}
                    <div className="row">
                        <div className="col">
                            <p className="jasaPengiriman">Pengiriman</p>
                        </div>
                        <div className="col">
                            <p className="JasaPengiriman">
                               {state.jasaPengiriman}
                            </p>
                        </div>
                    </div>
                    {/* Metode Pembayaran*/}
                    <div className="row">
                        <div className="col">
                            <p className="metodePembayaran">Metode Pembayaran</p>
                        </div>
                        <div className="col">
                            <p className="MetodePembayaran">
                               {state.metodePembayaran}
                            </p>
                        </div>
                    </div>
                    {/* Produk yang dibeli */}
                    {
                        data?.Cart.map((item) => (
                            <>
                                <div className="row">
                                    <div className="col">
                                        <p className="namaTas">{item.namaTas}</p>
                                        <p>Jumlah: {item.jumlahTas} | Motif: {item.motifTas}</p>
                                    </div>
                                    <div className="col">
                                        <p className="hargaTas">
                                            Rp.{item.total}
                                        </p>
                                    </div>
                                </div>
                            </>
                        ))
                    }
                    {/* Total Harga Tas */}
                    <div className="row">
                        <div className="col">
                            <p className="teks-TotalHargaTas">Total Harga Tas</p>
                        </div>
                        <div className="col">
                              <p className="TotalHargaTas">
                                Rp.  {data?.Cart?.length > 0 && SubtotalTas(data?.Cart)}
                             </p>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col teks-totalPembayaran">
                            TOTAL   
                        </div>
                        <div className="col totalPembayaran">
                            Rp. {data?.Cart?.length > 0 && SubtotalTas(data?.Cart)}
                        </div>
                    </div>
                    {/* Button Pembayaran */}
                    <div style={{textAlign:'center'}}>
                            <button 
                                onClick={handleSubmitData}
                                className="btn pembayaran-btn" 
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
                    tabIndex={10}
                    aria-labelledby="pembayaranModalLabel"
                >
                    <div className="modal-dialog">
                        <h6 className="text-pembayaranBerhasil">Pembayaran Berhasil</h6>
                        <div style={{textAlign:'center'}}>
                            <i className="fa fa-check-circle fa-3x mt-4" aria-hidden="true"/>
                        </div>
                        <button className="btn ok-btn">
                            OK
                        </button>
                    </div>
                </div>
            </>
        </section>     
    )  
}

export default Pembayaran