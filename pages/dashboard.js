import Head from 'next/head';
import PopularMovies from '../components/PopularMovies';

export default function Dashboard({ movies }) {
  return (
    <div>
      <Head>
        <title>Movflix dashboard</title>
        <meta name='description' content='Trending movies to watch' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='flex justify-center items-center my-5'>
        <div className='bg-indigo-900 py-4 px-8 items-center flex flex-col lg:py-10 lg:px-20'>
          <p className='text-white text-lg'>20</p>
          <h3 className='text-blue-300 font-bold'>Favourites</h3>
        </div>
        <div className='bg-indigo-900 py-4 px-8 items-center flex flex-col ml-4 lg:py-10 lg:px-20'>
          <p className='text-white text-lg'>2</p>
          <h3 className='text-blue-300 font-bold'>Watched</h3>
        </div>
      </div>

      <PopularMovies movies={movies} title='Trending movies' />
    </div>
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
