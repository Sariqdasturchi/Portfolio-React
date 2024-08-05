
import './home.css'

function HomeComp() {
    return (
        <>
            <section id="home">
                <div className="home_container">
                    <div className="home_text">
                        <div>
                            <h4>Hey, I am John</h4>
                        </div>
                        <div>
                            <h3>I create <span>product design</span> and brand experience</h3>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                        </div>
                        <div>
                            <button>Get In Touch</button>
                        </div>
                    </div>
                    <div className="home_user_img"></div>
                </div>
            </section>

            <section id='skills'>
                <div className="skills_container">
                    <div className='empty'></div>
                    <div className="skills_text">
                        <h4>My Skills</h4>
                        <h1>My Expertise</h1>
                    </div>
                    <div className='empty'></div>
                    <div className="skills_cards">
                        <div className="skills_card">
                            <div>
                                <div className="card_icon">
                                    <div className="icon1"></div>
                                </div>
                                <div className="card_title">
                                    <h1>Strategy & Direction</h1>
                                </div>
                                <div className="card_text">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                                </div>
                            </div>
                        </div>
                        <div className="skills_card">
                            <div>
                                <div className="card_icon">
                                    <div className="icon2"></div>
                                </div>
                                <div className="card_title">
                                    <h1>Branding & Logo</h1>
                                </div>
                                <div className="card_text">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                                </div>
                            </div>
                        </div>
                        <div className="skills_card">
                            <div>
                                <div className="card_icon">
                                    <div className="icon3"></div>
                                </div>
                                <div className="card_title">
                                    <h1>UI & UX Design</h1>
                                </div>
                                <div className="card_text">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                                </div>
                            </div>
                        </div>
                        <div className="skills_card">
                            <div>
                                <div className="card_icon">
                                    <div className="icon4"></div>
                                </div>
                                <div className="card_title">
                                    <h1>Webflow Development</h1>
                                </div>
                                <div className="card_text">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='empty'></div>
                </div>
            </section>
        </>
    )
}


export default HomeComp;