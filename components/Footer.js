import Link from 'next/link';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='align-self-end mt-auto flex flex-col items-center border-t border-gray-100 p-8'>
      <Link
        href={'/'}
        className='mb-2 whitespace-nowrap font-bold tracking-wide focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
      >
        Movflix
      </Link>
      <p className='text-center text-xs'>
        Built by Teri. Reach out on Twitter:
        <a
          href='http://twitter.com/terieyenike'
          target='_blank'
          rel='noopener noreferrer'
          className='text-blue-500 underline hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
        >
          {' '}
          @terieyenike
        </a>
      </p>
      <address className='mt-3 text-xs'>
        <p>Copyright &copy; {year}</p>
      </address>
    </footer>
  );
};

export default Footer;
