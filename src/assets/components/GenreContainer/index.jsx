import styles from "./genre.module.css";
import movies from "../../../data/movies.js";
import Movie from "../Movie";

//let x = movies.filter(movie => movie.movieGenre === "Action");
//console.log(x);

const GenreContainer = ({genre}) => {
  return (
    <div className={styles.genre}>
        <h3 className={styles.genreTitle}>{genre}</h3>
        {movies.filter(movie => movie.movieGenre === genre)
               .map((movie, index) => <Movie key={index} {...movie} />)}

        {/* use filter and map to only show the movie in the genre */}
        </div>
    );
}

export default GenreContainer;