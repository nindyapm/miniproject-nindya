import { gql } from "@apollo/client"

export const GetPemesanan = gql `
query MyQuery {
    Pemesanan(where: {}) {
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
    }
  }
`