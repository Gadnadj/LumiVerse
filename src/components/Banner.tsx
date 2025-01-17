import banner1 from '../assets/banner1.png';

type Props = {}

const Banner = (props: Props) => {
    return (
        <>
            <div className='container pt-9 pb-9'>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                    <div>
                        <img src={banner1} />
                    </div>

                    <div>
                        <div>
                            <h1 className='text-4xl font-semibold py-10'>
                                GET READY TO ENJOY VR
                                <span className='bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'> GAMES WITH OUR PLATEFORM</span>
                            </h1>
                        </div>
                        <p className='max-w-[560px] text-justify'>Venez decouvrir le monde incroyable de la realite virtuelle. Plongee dans un tout nouvelle
                            universe complemetement nouveau qui va vous faire retourner la tete avec ses nouvelles
                            technologie de sensitivite</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;