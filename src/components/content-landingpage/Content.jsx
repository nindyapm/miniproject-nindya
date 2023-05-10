import content from "../../assets/img/ikon-landingpage.png"

const Content = () => {
    return (
        <section className="content">
            <div className="container">
                <div className="row">
                    <p className="text-content">Kelebihan Tas Rotan’s</p>
                </div>
                <div className="row">
                    <div style= {{ textAlign: "center", paddingTop: "10px"}}>
                        <img 
                            className="w-50 "
                            src={content}
                            alt="Kelebihan Tas Rotan"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Content