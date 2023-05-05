const Card = ({card}) => {
    return (
        <div className="card h-100" style={{ width: "15rem" }}>
            <img className="card-img-top" 
                src={card.gambarProduct} alt="Card image" 
            />
            <div className="card-body">
                <div className="row" style= {{ textAlign: "left"}}>
                    <div className="col-md-7">
                        <h6 className="card-title">{card.namaProduct}</h6>
                        <p className="card-text">
                           Rp.{card.hargaProduct}
                        </p>
                    </div>
                    <div className="col-md-5">
                        <a href="#" className="btn btn-outline-secondary">
                            Detail
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card