import Card from "../card/Card"
import { gql, useQuery } from '@apollo/client';

const FavProduct = () => {
    const GetProductList = gql`
        query GetProduct {
            Product(limit: 3) {
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

    const {data} = useQuery(GetProductList)

    return (
        <section className="favProduct">
            <div>
                <p className="text-content">Produk Favorite</p>                
            </div>
            <div className="row row-cols-1 row-cols-md-3 row-col-sm-3 gy-4">
                {
                    data?.Product.map((card) => (
                        <div className="col main-card">
                            <Card key={card.namaProduct} card={card} />
                        </div>                            
                    ))
                }
            </div>
        </section>
    )
}

export default FavProduct