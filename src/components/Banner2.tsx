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
                            <img src={banner2} className='w-full max-w-[400px]' />
                        </div>
                        {/* text content section */}
                        <div className='space-y-5 lg:pr-20 order-2 sm:order-1'>
                            <div className='relative z-10 space-y-5'>
                                <h1 className='text-4xl font-semibold'>
                                    GET READY TO ENJOY VR
                                    <span className='bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'> GAMES WITH OUR PLATEFORM</span>
                                </h1>
                                <p className='text-justify max-w-[520px]'>
                                    Venez decouvrir le monde incroyable de la realite virtuelle. Plongee dans un tout nouvelle universe complemetement
                                    nouveau qui va vous faire retourner la tete avec ses nouvelles technologie de sensitivite
                                </p>
                                <div className='flex items-center gap-6'>
                                    <button className='bg-gradient-to-r from-primary to-secondary duration-300 hover:scale-110 rounded-full px-6 py-2'>
                                        Get Started
                                    </button>
                                    <button className='flex items-center gap-2'>
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