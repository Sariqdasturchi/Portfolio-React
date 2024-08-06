import './footer.css';
import './footerMobile.css';
import instagram from './imgs/Instagram.png';
import twitter from './imgs/Twitter.png';
import linkedin from './imgs/LinkedIn.png';

function FooterComp() {
    return(
        <>
        <section id="footer">
            <div className="footer_container">
                <div className="footer_top">
                    <div className="footer_logo"></div>
                    <div className="footer_menu">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Portfolio</a></li>
                            <li><a href="#">About me </a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Testimonials</a></li>
                            <li><a href="#">Portfolio</a></li>
                        </ul>
                    </div>
                    <div className="footer_message">
                        <ul>
                            <li><img src={instagram} alt="" /></li>
                            <li><img src={twitter} alt="" /></li>
                            <li><img src={linkedin} alt="" /></li>
                        </ul>
                    </div>
                </div>
                <div className="footer_bottom">
                    <div className="bottom_left_text">
                        <h3>Made with 💖 by Airdokan</h3>
                    </div>
                    <div className="bottom_right_text">
                        <ul>
                            <li>Privacy Policy</li>
                            <li>Terms of Service</li>
                            <li>Cookies Settings</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default FooterComp;