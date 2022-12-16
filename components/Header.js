import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Link from 'next/link';

const Header = () => {
  return (
    <header className='sticky top-0 z-10 border-b border-gray-100 bg-gray-50 py-5'>
      <div className='mx-auto flex w-4/5 max-w-7xl items-center justify-between '>
        <Link
          href={'/'}
          className='whitespace-nowrap font-bold tracking-wide focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
        >
          Movflix
        </Link>
        <SignedIn>
          <div className='ml-auto flex items-center space-x-8'>
            <Link
              href={'/dashboard'}
              className='whitespace-nowrap bg-blue-600 py-2 px-6 tracking-wide text-gray-50 hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
            >
              Dashboard
            </Link>
            <UserButton />
          </div>
        </SignedIn>
        <SignedOut>
          <Link
            href={'/sign-in'}
            className='whitespace-nowrap bg-blue-600 py-2 px-6 tracking-wide text-gray-50 hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
          >
            Sign in
          </Link>
        </SignedOut>
      </div>
    </header>
  );
};

export default Header;
