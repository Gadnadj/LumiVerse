import { FaCameraRetro } from 'react-icons/fa';
import { GiNotebook } from 'react-icons/gi';

const FeaturesData = [
    {
        name: 'Captivating Videos',
        icon: (
            < FaCameraRetro className='text-5xl text-primary group-hover:text-black duration-300' />
        ),
        link: '#',
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
        aosDelay: '0'
    },
    {
        name: 'Safe Transactions',
        icon: (
            < GiNotebook className='text-5xl text-primary group-hover:text-black duration-300' />
        ),
        link: '#',
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
        aosDelay: '500'
    },
    {
        name: 'Experience Reality',
        icon: (
            < GiNotebook className='text-5xl text-primary group-hover:text-black duration-300' />
        ),
        link: '#',
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
        aosDelay: '1000'
    }
];


const Features = () => {
    return (
        <>
            <div className="container py-14 sm:min-h-[600px]">
                <div>
                    <h1 className='text-3xl font-semibold text-center sm:text-4xl mb-12'>Why Choose Us</h1>

                    {/* card section */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>
                        {
                            FeaturesData.map((item, index) => (
                                <div
                                    className='text-center group space-y-3 sm:space-y-6 p-4 sm:py-10 bg-dark
                                hover:bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_40px_#007cfff0]
                                text-white hover:text-black rounded-lg duration-300'
                                    key={index}>
                                    <div className='grid place-items-center'>{item.icon}</div>
                                    <h1 className='text-2xl'>{item.name}</h1>
                                    <p>{item.description}</p>
                                    <a className='inline-block text-lg font-semibold py-3 text-primary group:hover:text-black duration-300' href={item.link}>Learn More</a>
                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>
        </>
    );
};

export default Features;