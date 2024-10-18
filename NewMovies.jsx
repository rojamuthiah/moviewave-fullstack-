import React from 'react'
import GenresList from '../Constant/GenresList'
import MovieList from './MovieList'

function NewMovies() {
  return (
    <div className='bg-black-800'>
        {GenresList.genere.map((item,index)=>index<=30&&(
            <div className='p-8 px-8 md:px-16'>
                <h2 className='text-[20px] text-white 
                font-bold'>{item.name}</h2> 
                <MovieList genreId={item.id} index_={index} />   
            </div>
        ))}

    </div>
  )
}
