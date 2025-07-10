import './style.servicepart.css'

const ServicePart = ({ image, header, description }) => {
    return (
        <>
            <div className='service_part'>
                <img src={image} className='service_image' />
                <h2 className='heading_service'>{header}</h2>
                <h3>{description}</h3>
            </div>
        </>
    )
};

export default ServicePart;