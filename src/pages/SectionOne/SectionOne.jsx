import GlobalButton from "../../componenets/GlobalButton/GlobalButton";
import logo from "../../assets/logo.svg";
import laptop from "../../assets/laptop.jpg";
import "../../pages/home.style.css"

const SectionOne = () => {
    return (
        <div className='sectionone_wrapper'>
            <div className="left_side">
                <div className="logo">
                    <img className="logoimg" src={logo} alt="Logo" />
                    <h1 className="logoheading">TROPIC TECH SOLUTION</h1>
                </div>
                <h1 className="sectiononeheading">IT Solutions that transform your business</h1>
                <GlobalButton text="learn more" className='home_button' />
            </div>
            <div className="rigth_side">
                <img className="sectiononeimg" src={laptop} alt="Laptop" />
            </div>
        </div>
    )

};

export default SectionOne;