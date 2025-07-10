import './style.clients.css'

const ClientsPart = ({ image, header, description }) => {
    return (
        <>
            <div className='clients_part'>       
				<div className='first_part'>			
					<img src={image} className='clients_image' />
					<h2 className='heading_clients'>{header}</h2>
				</div>
                <h3>{description}</h3>
            </div>
        </>
    )
};

export default ClientsPart;