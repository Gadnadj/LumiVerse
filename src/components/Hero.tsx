import { FaRegPlayCircle } from 'react-icons/fa';
import HeroPng from '../assets/hero.png';
import { BiPlayCircle } from 'react-icons/bi';

type Props = {}

const Hero = (props: Props) => {
    return (
        <>
            <div className='py-12 sm:py-0 dark:bg-black dark:text-white duration-300 overflow-hidden'>
                <div className='container min-h-[700px] flex relative'>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center relative z-10">

                        {/* hero text section */}
                        <div className='max-sm:order-1 space-y-4 lg:pr-20'>
                            <h1 className='text-4xl font-semibold'>
                                GET READY TO ENJOY VR
                                <span className='bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'> GAMES WITH OUR PLATEFORM</span>
                            </h1>
                            <p>
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

                        {/* img section */}
                        <div lang='order-1 sm:order-2'>
                            <img
                                src={HeroPng}
                                className='max-h-[600px] rounded-3xl'
                            />
                        </div>
                    </div>

                    {/* Animate Blob */}
                    <div className='h-[300px] w-[300px] bg-gradient-to-r from-primary to-secondary rounded-full absolute top-0 left-0 blur-3xl animated-wrapper'>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;