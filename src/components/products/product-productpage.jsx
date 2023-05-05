import Card from "../card/Card"

const AllProduct = () => {
    return (
        <section className="AllProduct">
            <div className="container">
                <p className="text-content">Produk Rotan's</p>
                <div style={{textAlign:"center"}}>
                    <input 
                        type="search"
                        placeholder="Cari nama tas"
                        className="search-tas"
                    />
                    <button type="button" className="seacrh-btn">Cari</button>
                </div>
                <div className="row row-cols-1 row-cols-md-3 row-col-sm-3 gy-4 mt-3">
                    <div className="col main-card">
                        <Card />
                    </div>
                    <div className="col main-card">
                        <Card />
                    </div>
                    <div className="col main-card">
                        <Card />
                    </div>
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
            </div>
        </section>
    )
}

export default AllProduct