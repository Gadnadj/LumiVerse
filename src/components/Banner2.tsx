import { BiPlayCircle } from 'react-icons/bi';
import banner2 from '../assets/banner2.png';

const Banner2 = () => {
    return (
        <>
            <div className='py-12 sm:py-0 relative'>
                <div className='container min-h-[620px] flex items-center '>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center'>
                        {/* image section */}
                        <div className='order-1 sm:order-2'>
                            <img src={banner2} className='w-full max-w-[400px]' />
                        </div>
                        {/* text content section */}
                        <div className='space-y-5 lg:pr-20 order-2 sm:order-1'>
                            <h1 className='text-4xl font-semibold'>
                                GET READY TO ENJOY VR
                                <span className='bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'> GAMES WITH OUR PLATEFORM</span>
                            </h1>
                            <p className='text-justify max-w-[520px]'>
                                Venez decouvrir le monde incroyable de la realite virtuelle. Plongee dans un tout nouvelle universe complemetement
                                nouveau qui va vous faire retourner la tete avec ses nouvelles technologie de sensitivite
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner2;