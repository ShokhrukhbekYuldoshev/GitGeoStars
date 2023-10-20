import Link from 'next/link';
import Image from 'next/image';
import GitGeoStarsIcon from '../../../public/gitgeostars.svg';

const Header = () => {
    return (
        <header className='bg-transparent py-2'>
            <div className='container mx-auto pt-6 px-4 sm:px-12 flex flex-col sm:flex-row justify-between items-center z-50'>
                <Link href='/' className='flex'>
                    <Image
                        src={GitGeoStarsIcon}
                        alt='GitGeoStars Icon'
                        width={25}
                        height={25}
                    />
                    <span className='hidden sm:inline text-white font-bold text-2xl ml-2'>
                        Git Geo Stars
                    </span>
                </Link>

                <nav className='flex items-center'>
                    <ul className='flex space-x-4 sm:space-x-8 text-white font-bold'>
                        <li>
                            <Link href='/'>Home</Link>
                        </li>
                        <li>
                            <Link href='/search'>Search</Link>
                        </li>
                        <li>
                            <Link href='/about'>About</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
