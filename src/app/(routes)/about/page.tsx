import Link from 'next/link';

export default function About() {
    return (
        <div className='container mx-auto px-4 sm:px-12 py-10'>
            <h1 className='text-4xl font-bold mb-6'>About Git Geo Stars</h1>
            <p className='text-gray-300 mb-6'>
                Git Geo Stars is a web application that allows you to find the
                top GitHub users by location. You can search for users in a
                specific location and see their details such as their login
                name, avatar, and followers count.
            </p>
            <p className='text-gray-300 mb-6'>
                This application uses the GitHub REST API to fetch the top users
                by location. The users are sorted by the number of followers in
                descending order.
            </p>
            <p className='text-gray-300 mb-6'>
                If you have any questions or suggestions, please feel free to
                contact us.
            </p>
            <h2 className='text-2xl font-bold mb-6'>Source Code</h2>
            <p className='text-gray-300 mb-6'>
                <Link
                    href='https://github.com/ShokhrukhbekYuldoshev/GitGeoStars'
                    className='text-blue-500 hover:text-blue-700'
                    target='_blank'
                >
                    Git Geo Stars
                </Link>
            </p>
        </div>
    );
}
