import logo from '../assets/logo.png';
import { IoIosMoon } from 'react-icons/io';

const NavBar = () => {
    return (
        <div>
            <div className='container py-2 md:py-0'>
                <div className='flex'>
                    {/* logo section */}
                    <div>
                        <img src={logo} className='h-16' />
                    </div>
                    {/* Desktop Menu section */}
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;