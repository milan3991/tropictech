import '../style.contact.css'

const ContactPart = ({ header, description }) => {
    return (
        <>
            <div className='contact_part'>       
				<h2 className='heading_contact'>{header}</h2>
                <h3>{description}</h3>
            </div>
        </>
    )
};

export default ContactPart;