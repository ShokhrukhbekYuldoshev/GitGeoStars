import Link from 'next/link';

export default function Home() {
    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            <h1 className='text-4xl text-center'>
                Rank GitHub users by location
            </h1>
            <p className='text-center'>
                Search for a location and see the top 30 GitHub users in that
                area.
            </p>
            <div className='flex justify-center mt-8'>
                <Link href='/search'>
                    <span className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                        Get Started
                    </span>
                </Link>
            </div>
        </div>
    );
}
