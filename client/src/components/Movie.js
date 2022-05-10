import React from 'react';

const Movie = ({movie, selectMovie}) => {
    const IMAGE_PATH = "https://image.tmdb.org/t/p/w342"

    return (
        
        
        <div onClick={() => selectMovie(movie)} className={"movie"}>
            
            <div className="movie-title">
                {movie.poster_path &&
                <img src={IMAGE_PATH + movie.poster_path} alt={movie.title}/>
                }
                <div className={"flex between movie-infos"}>
                    <h5 className={"movie-title"}>{movie.title}</h5>
                    {movie.vote_average ? <span className={"movie-voting"}>{movie.vote_average}</span> : null}
<<<<<<< Updated upstream

                    <h5 className={"release_date"}>{movie.release_date}</h5>
                    {movie.release_date ? <span className={"release_date"}>{movie.release_date}</span> : "-"}



=======
                    <div>

                   <h5 className="release_date">
                    {movie.release_date} </h5>

                    </div>
>>>>>>> Stashed changes
                </div>
            </div>
        </div>
    );
};


export default Movie;