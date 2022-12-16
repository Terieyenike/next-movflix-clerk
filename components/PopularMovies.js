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
      <h1 className='mb-5 text-lg font-bold'>{title}</h1>
      <div className='grid gap-6 md:grid-cols-3 lg:grid-cols-4'>
        {React.Children.toArray(
          movies.results.map((movie) => (
            <Link
              href={{ pathname: `movie/${movie.id}` }}
              className='bg-white shadow-md focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500'
            >
              <div className='overflow-hidden'>
                <Image
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  width={300}
                  height={300}
                  className='w-full transition-transform duration-300 ease-in-out	hover:scale-105'
                />
              </div>
              <div className='p-5 text-base'>
                <p className='pointer-events-none font-bold'>{movie.title}</p>
                <span>{reformatDate(movie.release_date)}</span>
              </div>
            </Link>
          ))
        )}
      </div>
    </section>
  );
};

export default PopularMovies;
