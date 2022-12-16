import Head from 'next/head';

import PopularMovies from '../components/PopularMovies';

export default function Dashboard({ movies }) {
  return (
    <>
      <Head>
        <title>Movflix dashboard</title>
        <meta name='description' content='Trending movies to watch' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='my-5 flex items-center justify-center'>
        <div className='flex flex-col items-center bg-indigo-900 py-4 px-8 lg:py-10 lg:px-20'>
          <p className='text-lg text-white'>20</p>
          <h3 className='text-base font-bold text-blue-300'>Favourites</h3>
        </div>
        <div className='ml-4 flex flex-col items-center bg-indigo-900 py-4 px-8 lg:py-10 lg:px-20'>
          <p className='text-lg text-white'>2</p>
          <h3 className='text-base font-bold text-blue-300'>Watched</h3>
        </div>
      </div>
      <PopularMovies movies={movies} title='Trending movies' />
    </>
  );
}

export const getServerSideProps = async () => {
  const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.MOVIE_API}&language=en-US&page=1`;
  const res = await fetch(url);
  const movies = await res.json();

  return {
    props: {
      movies,
    },
  };
};
