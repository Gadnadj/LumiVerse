import { BiPlayCircle } from 'react-icons/bi';
import banner2 from '../assets/banner2.png';

const Banner2 = () => {
    return (
        <>
            <div className='py-12 sm:py-0 relative'>
                <div className='container min-h-[620px] flex items-center '>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center'>
                        {/* image section */}
                        <div className='order-1 sm:order-2 relative'>
                            <img
                                data-aos='zoom-in'
                                data-aos-delay='500'
                                src={banner2} className='w-full max-w-[400px]' />
                        </div>
                        {/* text content section */}
                        <div className='space-y-5 lg:pr-20 order-2 sm:order-1'>
                            <div className='relative z-10 space-y-5'>
                                <h1
                                    data-aos='fade-up'
                                    data-aos-delay='300'
                                    className='text-4xl font-semibold'>
                                    Get Ready to Discover the Future of VR
                                    <span className='bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'> Gaming on Our Next-Level Platform</span>
                                </h1>
                                <p
                                    data-aos='fade-up'
                                    data-aos-delay='500'
                                    className='text-justify max-w-[520px]'>
                                    Step into the awe-inspiring world of virtual reality. Immerse yourself in a brand-new universe,
                                    where groundbreaking sensory technologies redefine the boundaries of gaming and entertainment,
                                    delivering an experience like no other.
                                </p>
                                <div className='flex items-center gap-6'>
                                    <button
                                        data-aos='fade-up'
                                        data-aos-delay='600'
                                        className='bg-gradient-to-r from-primary to-secondary duration-300 hover:scale-110 rounded-full px-6 py-2'>
                                        Get Started
                                    </button>
                                    <button
                                        data-aos='fade-up'
                                        data-aos-delay='700'
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

export default Banner2;