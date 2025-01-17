import logo from '../../assets/logo.png';
import { IoIosMoon } from 'react-icons/io';


const namesLink = [
    {
        name: 'Home'
    },
    {
        name: 'Products'
    },
    {
        name: 'Pricing'
    },
    {
        name: 'Contact'
    }
];

const NavBar = () => {
    return (
        <div className="container flex justify-between">
            {/* Logo + image */}
            <div className='flex items-center gap-2'>
                <img src={logo} className='size-16 sm:size-24' />
                <h1 className='text-2xl sm:text-4xl font-bold'>LumiVerse</h1>
            </div>

            {/* Right Size */}
            <div className='flex items-center gap-5 text-lg sm:text-2xl'>
                {namesLink.map((item, index) => (
                    <div key={index}>
                        <ul>
                            {item.name}
                        </ul>
                    </div>
                ))}
                <IoIosMoon className='cursor-pointer' />

            </div>

        </div>
    );
};

export default NavBar;