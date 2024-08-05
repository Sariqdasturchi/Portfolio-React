import AboutComp from "./components/about/about";
import Contact from "./components/contact/contact";
import FooterComp from "./components/footer/footer";
import HeaderComp from "./components/header/header";
import HomeComp from "./components/home/home";
import PortfolioComp from "./components/portfolio/portfolio";
import Testim from "./components/testim/testim";



function App() {
  return (
    <>
      <HeaderComp />
      <HomeComp />
      <AboutComp />
      <PortfolioComp />
      <Testim />
      <Contact />
      <FooterComp />
    </>
  )
}

export default App;
