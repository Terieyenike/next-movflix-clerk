import Link from 'next/link';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div>
      <footer className='flex items-center justify-center flex-col'>
        <Link href={'/'} className='mb-2'>
          <span className='font-bold whitespace-nowrap tracking-wide'>
            Movflix
          </span>
        </Link>

        <p className='text-xs text-center'>
          Built by Teri. Reach out on Twitter:
          <a
            href='http://twitter.com/terieyenike'
            target='_blank'
            rel='noopener noreferrer'
            className='underline text-blue-500'>
            {' '}
            @terieyenike
          </a>
        </p>

        <address className='text-xs mt-3'>
          <p>Copyright &copy; {year}</p>
        </address>
      </footer>
    </div>
  );
};

export default Footer;
