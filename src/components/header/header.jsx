import './header.css';
import './headerMobile.css';

function HeaderComp() {
    return(
        <>
            <header>
                <nav>
                    <div className="logo">
                        <a href="#">
                            <div></div>
                        </a>
                    </div>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#about">About me</a></li>
                        <li><a href="#test">Testimonials</a></li>
                    </ul>
                    <div className="navBtn">
                        <button>Contact Me</button>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default HeaderComp;