import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt } from 'react-icons/fa';
const FooterLinks = [
    {
        id: 1,
        title: 'Home',
        link: '/#'
    },
    {
        id: 2,
        title: 'About',
        link: '/#about'
    },
    {
        id: 3,
        title: 'Contact',
        link: '/#contact'
    },
    {
        id: 4,
        title: 'Blog',
        link: '/#blog'
    }
];


const Footer = () => {
    return (
        <>
            <div className='bg-gray-100 dark:bg-dark mt-14 rounded-t-3xl'>
                <div
                    data-aos='fade'
                    className='container'>
                    <div className='grid md:grid-cols-3 py-4'>
                        {/* company details */}
                        <div className='py-8 px-4'>
                            <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3 font-serif'>LumiVerse</h1>
                            <p className='text-sm'>Explore new dimensions with LumiVerse, your gateway to innovative virtual experiences. Join us and embrace the future today.</p>
                            <br />

                            {/* contac section */}
                            <div>
                                <div className='flex items-center gap-3'>
                                    <FaLocationArrow />
                                    <p>Haifa, Israel</p>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <FaMobileAlt />
                                    <p>+972586305529</p>
                                </div>
                            </div>

                            {/* social handle */}
                            <div className='flex items-center gap-3 mt-6'>
                                <a href='https://www.linkedin.com/in/gad-nadjar/' target='_blank' rel='noopener noreferrer'>
                                    <FaLinkedin className='text-3xl hover:text-primary duration-300' />
                                </a>
                                <a href='https://www.facebook.com/gad.nadjar' target='_blank' rel='noopener noreferrer'>
                                    <FaFacebook className='text-3xl hover:text-primary duration-300' />
                                </a>
                                <a href='https://www.instagram.com/gadnadj/' target='_blank' rel='noopener noreferrer'>
                                    <FaInstagram className='text-3xl hover:text-secondary duration-300' />
                                </a>
                            </div>
                        </div>

                        {/* Footer Links section */}
                        <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
                            <div>
                                <div className='py-8 px-4'>
                                    <h1 className='text-xl font-bold mb-3'>Quick Links</h1>
                                    <ul className='space-y-3'>
                                        {
                                            FooterLinks.map((item, index) => (
                                                <li className='cursor-pointer hover:translate-x-1 duration-300 hover:text-primary' key={index}>
                                                    <a href={item.link}></a>
                                                    {item.title}
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <div className='py-8 px-4'>
                                    <h1 className='text-xl font-bold mb-3'>Location</h1>
                                    <ul className='space-y-3'>
                                        {
                                            FooterLinks.map((item, index) => (
                                                <li className='cursor-pointer hover:translate-x-1 duration-300 hover:text-primary' key={index}>
                                                    <a href={item.link}></a>
                                                    {item.title}
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <div className='hidden sm:block py-8 px-4'>
                                    <h1 className='text-xl font-bold mb-3'>Quick Links</h1>
                                    <ul className='space-y-3'>
                                        {
                                            FooterLinks.map((item, index) => (
                                                <li className='cursor-pointer hover:translate-x-1 duration-300 hover:text-primary' key={index}>
                                                    <a href={item.link}></a>
                                                    {item.title}
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
};

export default Footer;