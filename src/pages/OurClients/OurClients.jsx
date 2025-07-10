import talk from '../../assets/talk.svg';
import '../OurClients/components/ClientComponent/style.clients.css';
import ClientsPart from './components/ClientComponent/clientcomponent';


let clients = [
    {
        id: 1,
        image: talk,
        header: `Boris Keser, Wright Co.`,
        description: `Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services.`
    },
    {
        id: 2,
        image: talk,
        header: `Jovo Risovic, Financial`,
        description: `Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services.`

    },
    {
        id: 3,
        image: talk,
        header: `Bojan Vukojevic, Express.`,
        description: `Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services.`


    },
]


const OurClients = () => {
    return (
        <div className='clients_wrapper'>
            <div className='clients_content'>
                <div className='clients'>
                    <h1 className='heading_clients'>Clients Testimonials</h1>
                    <div className='clients_content'>
                        {clients.map((client) => (
                            <ClientsPart
                                key={client.id}
                                header={client.header}
                                image={client.image}
                                description={client.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurClients;
