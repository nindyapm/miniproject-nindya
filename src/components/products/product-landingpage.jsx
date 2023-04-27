import Card from "../card/Card"

const FavProduct = () => {
    return (
        <section className="favProduct">
            <div>
                <p className="text-content">Produk Favorite</p>                
            </div>
            <div className="row row-cols-1 row-cols-md-3 row-col-sm-3 gy-4">
                <div className="col main-card">
                    <Card />
                </div>
                <div className="col main-card">
                    <Card />
                </div>
                <div className="col main-card">
                    <Card />
                </div>
            </div>
        </section>
    )
}

export default FavProduct