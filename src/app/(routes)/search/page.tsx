'use client';

import { FormEventHandler, useState } from 'react';

import { searchTopUsers, getUserDetails } from '@/app/_libs/api';
import Image from 'next/image';

interface UserProps {
    login: string;
    followers: number;
    html_url: string;
    avatar_url: string;
    id: number;
}

export default function Search() {
    const [query, setQuery] = useState('');
    const [userProps, setUserProps] = useState<UserProps[]>([]);

    const handleSearch: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();

        if (query.trim() === '') {
            return;
        }

        const searchResults = await searchTopUsers(query);

        // for each user in searchResults, get user details
        const userResults = await Promise.all(
            searchResults.map((result: any) => getUserDetails(result.login))
        );

        // update userProps state
        setUserProps(
            userResults.map((result) => ({
                login: result.login,
                followers: result.followers,
                html_url: result.html_url,
                avatar_url: result.avatar_url,
                id: result.id,
            }))
        );
    };

    return (
        <div className='container mx-auto px-4 sm:px-12 py-10'>
            <h1 className='text-4xl font-bold mb-6'>Search GitHub Users</h1>
            <form onSubmit={handleSearch} className='mb-10'>
                <input
                    type='text'
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder='Search...'
                    className='bg-gray-200 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent w-full'
                />
            </form>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                {userProps.map((result) => (
                    <div
                        key={result.id}
                        className='bg-slate-900 rounded-lg shadow-md p-6'
                    >
                        <Image
                            src={result.avatar_url}
                            alt='Avatar'
                            width={100}
                            height={100}
                            loader={({ src }) => src}
                            unoptimized={true}
                            className='rounded-full'
                        />

                        <h2 className='text-xl font-bold mb-2'>
                            {result.login}
                        </h2>
                        <p className='text-gray-400 mb-2'>
                            Followers: {result.followers}
                        </p>
                        <a
                            href={result.html_url}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-blue-500 hover:text-blue-700'
                        >
                            View Profile
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

// interface SearchResult {
//     avatar_url: string;
//     events_url: string;
//     followers_url: string;
//     following_url: string;
//     gists_url: string;
//     gravatar_id: string;
//     html_url: string;
//     id: number;
//     login: string;
//     node_id: string;
//     organizations_url: string;
//     received_events_url: string;
//     repos_url: string;
//     score: number;
//     site_admin: boolean;
//     starred_url: string;
//     subscriptions_url: string;
//     type: string;
//     url: string;
// }

// interface UserResult {
//     login: string;
//     id: number;
//     node_id: string;
//     avatar_url: string;
//     gravatar_id: string;
//     url: string;
//     html_url: string;
//     followers_url: string;
//     following_url: string;
//     gists_url: string;
//     starred_url: string;
//     subscriptions_url: string;
//     organizations_url: string;
//     repos_url: string;
//     events_url: string;
//     received_events_url: string;
//     type: string;
//     site_admin: boolean;
//     name: string;
//     company: null;
//     blog: string;
//     location: string;
//     email: null;
//     hireable: null;
//     bio: string;
//     twitter_username: string;
//     public_repos: number;
//     public_gists: number;
//     followers: number;
//     following: number;
//     created_at: string;
//     updated_at: string;
// }
