import './port.css';
import './portMobile.css';
import site from './imgs/site.png';
import vector from './imgs/Vector.png'

function PortfolioComp() {
    return (
        <>
            <section id="portfolio">
                <div className="port_container">
                    <div className="port_title">
                        <div>
                            <h3>Recent Projects</h3>
                            <h1>My Portfolio</h1>
                        </div>
                        <div>
                            <button><span><img src={site} alt="" /></span>Visit My Dribbble</button>
                        </div>
                    </div>
                <div className="port_cards">
                    <div className="port_card">
                        <div className="card_img1"></div>
                        <div className="port_card_title">
                            <h1>Ahuse</h1>
                        </div>
                        <div className="port_card_text">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                        </div>
                        <div className="port_card_nextBtn">
                            <button>View In Dribbble <span><img src={vector} alt="" /></span></button>
                        </div>
                    </div>

                    <div className="port_card">
                        <div className="card_img2"></div>
                        <div className="port_card_title">
                            <h1>Ahuse</h1>
                        </div>
                        <div className="port_card_text">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                        </div>
                        <div className="port_card_nextBtn">
                            <button>View In Dribbble <span><img src={vector} alt="" /></span></button>
                        </div>
                    </div>

                    <div className="port_card">
                        <div className="card_img3"></div>
                        <div className="port_card_title">
                            <h1>Ahuse</h1>
                        </div>
                        <div className="port_card_text">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                        </div>
                        <div className="port_card_nextBtn">
                            <button>View In Dribbble <span><img src={vector} alt="" /></span></button>
                        </div>
                    </div>
                </div>
                </div>
            </section>
        </>
    )
}

export default PortfolioComp;