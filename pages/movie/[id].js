import Image from 'next/image';

const Movie = ({ movie }) => {
  return (
    <div className='min-h-screen'>
      <h2 className='mb-5 text-lg font-bold'>Watch sizzling movies</h2>
      <div className='md:flex lg:mt-10'>
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          width='250'
          height='250'
          className='w-full md:w-3/5 lg:w-1/4'
        />
        <div className='mt-5 md:m-0 md:ml-4 md:w-3/5'>
          <h2 className='text-2xl font-bold md:text-5xl'>{movie.title}</h2>
          <p className='mb-2 text-gray-500'>{movie.tagline}</p>

          <p>{movie.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default Movie;

export async function getServerSideProps({ params }) {
  const { id } = params;

  const res =
    await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.MOVIE_API}&language=en-US
  `);

  const data = await res.json();

  return {
    props: {
      movie: data,
    },
  };
}
