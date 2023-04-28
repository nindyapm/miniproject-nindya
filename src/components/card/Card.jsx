import tas from "../../assets/img/tas.jpg"

const Card = () => {
    return (
        <div className="card h-100" style={{ width: "15rem" }}>
            <img className="card-img-top" 
                src={tas} alt="Card image" 
            />
            <div className="card-body">
                <div className="row" style= {{ textAlign: "left"}}>
                    <div className="col-md-7">
                        <h6 className="card-title">Tas Rotan</h6>
                        <p className="card-text">
                            Rp.200.000
                        </p>
                    </div>
                    <div className="col-md-5">
                        <a href="/DetailProduct" className="btn btn-outline-secondary">
                            Detail
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card