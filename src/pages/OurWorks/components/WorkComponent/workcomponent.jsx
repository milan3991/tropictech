import './style.works.css'

const WorksPart = ({ image, header, description }) => {
    return (
        <>
            <div className='works_part'>
                <h2 className='heading_works'>{header}</h2>
                <img src={image} className='works_image' />
                <h3>{description}</h3>
            </div>
        </>
    )
};

export default WorksPart;