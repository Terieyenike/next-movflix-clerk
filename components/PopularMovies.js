import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const PopularMovies = ({ movies, title }) => {
  function reformatDate(fullDate) {
    const date = new Date(fullDate);

    return date
      .toDateString()
      .split(' ')
      .splice(1, 3)
      .join(' ')
      .replace(/(?<=\d) /, ', ');
  }
  return (
    <section>
      <h1 className='mb-5 font-bold text-lg'>{title}</h1>
      <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {React.Children.toArray(
          movies.results.map((movie) => (
            <div key={movie.id} className='bg-white drop-shadow-md'>
              <Link href={{ pathname: `movie/${movie.id}` }}>
                <Image
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  width={300}
                  height={300}
                  className='w-full'
                />
              </Link>
              <div className='p-5'>
                <p className='font-bold'>{movie.title}</p>
                <span>{reformatDate(movie.release_date)}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default PopularMovies;
