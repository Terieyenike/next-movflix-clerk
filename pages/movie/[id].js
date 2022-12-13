import Image from 'next/image';

const Movie = ({ movie }) => {
  return (
    <div className='min-h-screen'>
      <h2 className='font-bold text-lg mb-5'>Watch sizzling movies</h2>

      <div className='md:flex lg:mt-10'>
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          width='250'
          height='250'
          className='md:w-3/5 w-full lg:w-1/4'
        />
        <div className='md:w-3/5 md:ml-4 mt-5 md:m-0'>
          <h2 className='font-bold text-2xl md:text-5xl'>{movie.title}</h2>
          <p className='text-gray-500 mb-2'>{movie.tagline}</p>

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
