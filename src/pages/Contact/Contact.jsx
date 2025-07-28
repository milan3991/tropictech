import './style.contact.css'
import GlobalButton from "../../componenets/GlobalButton/GlobalButton";
import laptop from "../../assets/laptop.jpg";
import "../../pages/home.style.css"
import ContactPart from "./componenets/ContactComponent";
import facebook from "../../assets/fb.svg"
import twitter from "../../assets/tw.svg"
import instagram from "../../assets/insta.svg"

const Contact = () => {

    let contacts = [
        {
            id: 1,
            header: `PHONE`,
            description: `123-456-789`
        },
        {
            id: 2,
            header: `EMAIL`,
            description: `hello@tropic.com`

        },
    ]


    return (
        <div className='contact_wrapper'>
            <div className="contact_left_side">
                <h1 className="contactheading">Let's work together!</h1>
                <h3>Book a free consultation.</h3>
                <GlobalButton text="contact us" className='contact_button' />
                <div className='contact_content'>
                    {contacts.map((contact) => (
                        <ContactPart
                            key={contact.id}
                            header={contact.header}
                            description={contact.description}
                        />
                    ))}
                </div>
                <div className="socialnetworks">
                    <h2>SOCIAL</h2>
                    <div className='socialnetworks_img'>
                        <img className="social" src={facebook} alt="facebook" />
                        <img className="social" src={twitter} alt="twitter" />
                        <img className="social" src={instagram} alt="instagram" />
                    </div>
                </div>
            </div>
            <div className="contact_rigth_side">

                <img className="sectiononeimg" src={laptop} alt="Laptop" />
            </div>
        </div>
    )

};

export default Contact;