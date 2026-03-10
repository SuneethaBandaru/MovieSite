import styles from "./movie.module.css";
import Cast from "../Cast";
//import Loading from "../../../assets/loading.jpg";
import {getImageURL} from "../../../utils/functions.js";

/*const displayImage = imageParameter => { 
  if (imageParameter) {
  return <img className={styles.movieImage} src={imageParameter} />
}
 return <img className={styles.movieImage} src={Loading} />
};*/

const Movie = ({
  movieTitle,
  movieGenre = "Family Drama",
  movieDescription,
  mainActor,
  supportingActor,
  movieImage
}) => {
  return (
    <div className={styles.movie}>
      <h3 className={styles.movieTitle}>{movieTitle}</h3>
      {/* displayImage(movieImage) */}
        {movieImage ?
          <img className={styles.movieImage} src={getImageURL(movieImage)} />
          : <img className={styles.movieImage} src={getImageURL('loading.jpg')}
        />}

      {
      /*{movieImage &&     
       <img className={styles.movieImage} src={movieImage} />
      }

      */}

      {/*
      {movieImage ?     
       <img className={styles.movieImage} src={movieImage} />
       : <p>No image was found</p>
      }
      */}

      <p className={styles.movieGenre}>Genre: {movieGenre}</p>
      <Cast mainCast={mainActor} supportingCast={supportingActor} />
      <p className={styles.movieDescription}> {movieDescription}</p>
    </div>
  );
};

export default Movie;

/* another version 

1.import styles from './movie.module.css';

const Movie = (props) => {
  return (
    <div className={styles.movie}>
      <h3 className={styles.movieTitle}>{props.movieTitle}</h3>
      <p className={styles.movieGenre}>Genre: {props.movieGenre}</p>
      <p className={styles.movieDescription}>
        Movie Description Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book.
      </p>
    </div>
  );
};

export default Movie;

*/
