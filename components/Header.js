import Link from 'next/link';

const Header = () => {
  return (
    <header className='max-w-7xl mx-auto w-4/5 my-5'>
      <div className='flex items-center justify-between'>
        <p className='font-bold whitespace-nowrap tracking-wide'>
          <Link href={'/'}>Movflix</Link>
        </p>

        <ul>
          <li className='bg-blue-600 text-gray-50 py-2 px-6 tracking-wide whitespace-nowrap'>
            <Link href={'/dashboard'}>Dashboard</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
