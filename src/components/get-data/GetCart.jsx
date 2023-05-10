import { gql } from "@apollo/client"

export const GetProduct = gql`
query MyQuery {
    Cart {
      gambarTas
      hargaTas
      idCart
      jumlahTas
      motifTas
      namaTas
      total
    }
  }  
`