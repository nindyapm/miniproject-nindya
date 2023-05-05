import { useState } from "react"
import Card from "../card/Card"
import { useQuery, gql } from "@apollo/client";

const AllProduct = () => {

    const [search, setSearch] = useState('');

    const SEARCH_PRODUCT_QUERY = gql`
		query SEARCH_PRODUCT_QUERY($namaProduct: String) {
			Product(where: { namaProduct: { _ilike: $namaProduct } }) {
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
    const { data } = useQuery(SEARCH_PRODUCT_QUERY, {
        variables: {
            namaProduct: `%${search}%`,
        },
    });

    const handleSearch = (e) => {
        setSearch(e.target.value);
    }
    
    return (
        <section className="AllProduct">
            <div className="container">
                <p className="text-content">Produk Rotan's</p>
                <div style={{textAlign:"center"}}>
                    <input 
                        type="search"
                        placeholder="Cari nama tas"
                        className="search-tas"
                        value={search}
                        onChange={handleSearch}
                    />
                </div>
                <div className="row row-cols-1 row-cols-md-3 row-col-sm-3 gy-4 mt-3">
                        {
                            data?.Product.map((card) => (
                                <div className="col main-card">
                                    <Card key={card.namaProduct} card={card} />
                                </div>
                            ))
                        }
                </div>
            </div>
        </section>
    )
}

export default AllProduct