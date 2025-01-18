import AppStorePng from '../assets/app_store.png';
import PlayStorePng from '../assets/play_store.png';
const AppStore = () => {
    return (
        <>
            <div className="container py-10 sm:min-h-[400px] sm:grid sm:place-items-center">
                <div className='space-y-6 max-w-xl mx-auto'>
                    <h1 className='text-2xl sm:text-4xl text-center font-semibold'>Get Started with our app</h1>
                    <p className='text-center sm:px-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique magnam hardum accusantium odit?</p>
                    <div className='flex flex-wrap items-center justify-center gap-4'>
                        <a href="#">
                            <img className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]' src={AppStorePng} alt="" />
                        </a>
                        <a href="#">
                            <img className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]' src={PlayStorePng} alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AppStore;