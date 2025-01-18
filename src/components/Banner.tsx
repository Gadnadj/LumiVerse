import { BiPlayCircle } from 'react-icons/bi';
import banner1 from '../assets/banner1.png';

const Banner = () => {
    return (
        <>
            <div className='py-12 sm:py-0 relative'>
                <div className='container min-h-[620px] flex items-center justify-center'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center'>
                        {/* image section */}
                        <div>
                            <img
                                data-aos='zoom-in'
                                data-aos-delay='500'
                                src={banner1} />
                        </div>

                        {/* text content section */}
                        <div className='space-y-5 lg:pr-20 relative'>
                            <div className='relative z-10 space-y-5'>
                                <h1
                                    data-aos='fade-up'
                                    data-aos-delay='300'
                                    className='text-4xl font-semibold'>
                                    "Prepare to be amazed by the world of VR

                                    <span className='bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'> Games on Our Cutting-Edge Platform</span>
                                </h1>
                                <p
                                    data-aos='fade-up'
                                    data-aos-delay='500'
                                    className='text-justify max-w-[520px]'>
                                    Step into the extraordinary world of virtual reality and explore breathtaking new dimensions.
                                    Dive into a revolutionary universe that will leave you in awe with its cutting-edge
                                    sensory technologies, redefining the way you experience gaming and entertainment.
                                </p>
                                <div className='flex items-center gap-6'>
                                    <button
                                        data-aos='fade-up'
                                        data-aos-delay='500'
                                        className='bg-gradient-to-r from-primary to-secondary duration-300 hover:scale-110 rounded-full px-6 py-2'>
                                        Get Started
                                    </button>
                                    <button
                                        data-aos='fade-up'
                                        data-aos-delay='600'
                                        className='flex items-center gap-2'>
                                        <BiPlayCircle className='text-3xl' />
                                        <span className='text-lg'>See Demo</span>
                                    </button>
                                </div>
                            </div>

                            {/* background color blob */}
                            <div className='h-[300px] w-[300px] bg-gradient-to-r from-primary to-secondary rounded-full absolute bottom-[-50px] left-[300px] blur-3xl opacity-50'>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;