import global from '../../assets/global.svg';
import calendar from '../../assets/calendar.svg';
import pc from '../../assets/pc.svg';
import '../OurWorks/components/WorkComponent/style.works.css';
import WorksPart from './components/WorkComponent/workcomponent';


let works = [
    {
        id: 1,
        image: global,
        header: `We are global.`,
        description: `No matter where you are, we've got you covered.`
    },
    {
        id: 2,
        image: calendar,
        header: `We value our clients.`,
        description: 'Virtual assistance.Talk to us about any concerns, 24/7.'

    },
    {
        id: 3,
        image: pc,
        header: `We use top rate systems.`,
        description: 'Easy peasy UI. Our interface is simple and easy to use.'


    },
]


const OurWorks = () => {
    return (
        <div className='works_wrapper'>
            <div className='works_content'>
                <div className='works'>
                    <h1 className='heading_works'>Why choose us</h1>
                    <div className='works_content'>
                        {works.map((work) => (
                            <WorksPart
                                key={work.id}
                                header={work.header}
                                image={work.image}
                                description={work.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurWorks;
