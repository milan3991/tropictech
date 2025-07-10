import service from '../../assets/services.jpg';
import security from '../../assets/security.jpg';
import consalting from '../../assets/consalting.jpg';
import ServicePart from './components/ServicePart/ServicePart';
import '../OurServices/components/ServicePart/style.servicepart.css';


let services = [
    {
        id: 1,
        image: service,
        header: `Managed IT Services`,
        description: 'Give a detailed description of the service being provided here'
    },
    {
        id: 2,
        image: security,
        header: `IT Security`,
        description: 'Give a detailed description of the service being provided here'

    },
    {
        id: 3,
        image: consalting,
        header: `IT Consulting `,
        description: 'Give a detailed description of the service being provided here'


    },
]


const OurServices = () => {
    return (
        <div className='services_wrapper'>
            <div className='services_content'>
                <div className='services'>
                    <h1 className='heading_services'>Our services</h1>
                    <div className='services_content'>
                        {services.map((service) => (
                            <ServicePart
                                key={service.id}
                                header={service.header}
                                image={service.image}
                                description={service.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurServices;
