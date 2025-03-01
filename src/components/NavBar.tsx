import { HiMenuAlt1, HiMenuAlt3 } from 'react-icons/hi';
import logo from '../assets/logo.png';
import { useState } from 'react';
import DarkMode from './DarkMode';

const NavLinks = [
    {
        id: 1,
        name: 'Home',
        link: '#'
    },
    {
        id: 2,
        name: 'Products',
        link: '#'
    },
    {
        id: 3,
        name: 'Pricing',
        link: '#'
    },
    {
        id: 4,
        name: 'Contact',
        link: '#'
    }

];

const NavBar = () => {
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const toogleMenu = () => setShowMenu(!showMenu);

    return (
        <div className='relative z-[9999] text-black dark:text-white duration-300'>
            <div className='container py-1 md:py-0'>
                <div className='flex justify-between'>
                    {/* logo section */}
                    <div className='flex items-center gap-3'>
                        <img src={logo} className='h-16' />
                        <p className='text-3xl'>Lumi<span className='font-bold'>Verse</span></p>
                    </div>

                    {/* Desktop Menu section */}

                    <nav className='hidden md:block'>
                        <ul className='flex items-center gap-8'>
                            {NavLinks.map((item) => {
                                return (
                                    <li key={item.id} className='py-4'>
                                        <a className='text-xl font-semibold hover:text-primary py-2 hover:border-b-2 hover:border-secondary transition-colors duration-500'
                                            href={item.link}>
                                            {item.name}
                                        </a>
                                    </li>
                                );
                            })}

                            {/* Darkmode feature  */}
                            <DarkMode />
                        </ul>
                    </nav>

                    {/* Mobile View SideBar */}
                    <div className=' md:hidden flex items-center gap-2'>
                        <DarkMode />

                        {
                            showMenu ? <HiMenuAlt1 onClick={toogleMenu} className='cursor-pointer' size={30} /> : <HiMenuAlt3 onClick={toogleMenu} className='cursor-pointer' size={30} />
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;