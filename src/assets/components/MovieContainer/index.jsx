import Movie from "../Movie";
import styles from "./movie-container.module.css";

const MovieContainer = () => {
  return (
    <div className={styles.movieContainer}>
      <Movie
        movieTitle="Bahubali"
        movieGenre="Family"
        movieDescription="The story centers on the rivalry between brothers Amarendra and Bhallaladeva for the throne, with a narrative that spans generations, focusing on themes of honour, betrayal, and heroism."
        mainActor="Prabhas Raju"
        supportingActor="Rana Daggubati"
      />
      <Movie
        movieTitle="Anand"
        // If you don't pass the movieGenre prop, it will take the default value of "Family Drama" as defined in the Movie component
        movieDescription="An independent woman who calls off her wedding and navigates life, while Anand, the son of the man who caused her parents' death, moves in next door to woo her. Known for its feel-good vibe, the film focuses on emotional healing and self-respect."
        mainActor="Raja"
        supportingActor="Anish Kuruvilla"
      />
      <Movie
        movieTitle="Akhanda"
        movieGenre="Action"
        movieDescription="The film follows Murali Krishna, a nature-loving farmer, and his separated-at-birth twin, Akhanda, an intense Aghora/Shiva devotee. Akhanda returns to save his family from evil forces in a high-octane spectacle."
        mainActor="Balakrishna"
        supportingActor="Jagapathi Babu"
      />
      <Movie
        movieTitle="Gulabi"
        movieGenre="Action"
        movieDescription="Gulabi is an action-packed love story set in the backdrop of human trafficking of young girls to Dubai. It is inspired from a real incident that came in news dailies when police arrested a few Dubai-based businessmen trying to smuggle girls from Hyderabad."
        mainActor="J.D. Chakravarthy"
        supportingActor="Chandra Mohan"
      />
    </div>
  );
};
export default MovieContainer;

/* another version of this same file

import Movie from "../Movie";
import styles from "./movie-container.module.css";

const movie1 = {
  movieTitle: "Bahubali",
  movieGenre: "Family",
  mainActor: "Prabhas Raju",
  supportingActor: "Rana Daggubati",
  movieDescription:
    "The story centers on the rivalry between brothers Amarendra and Bhallaladeva for the throne, with a narrative that spans generations, focusing on themes of honour, betrayal, and heroism.",
};
const movie2 = {
  movieTitle: "Anand",
  movieGenre: "Family Drama",   
  mainActor: "Raja",  
  supportingActor: "Anish Kuruvilla",
  movieDescription:"An independent woman who calls off her wedding and navigates life, while Anand, the son of the man who caused her parents' death, moves in next door to woo her. Known for its feel-good vibe, the film focuses on emotional healing and self-respect."
};
const movie3 = {
  movieTitle: "Akhanda",        
  movieGenre: "Action",
  mainActor: "Balakrishna",
  supportingActor: "Jagapathi Babu",
  movieDescription:"The film follows Murali Krishna, a nature-loving farmer, and his separated-at-birth twin, Akhanda, an intense Aghora/Shiva devotee. Akhanda returns to save his family from evil forces in a high-octane spectacle."
};
const movie4 = {
    movieTitle: "Gulabi",
    movieGenre: "Action",
    mainActor: "J.D. Chakravarthy",
    supportingActor: "Chandra Mohan",
    movieDescription:"Gulabi is an action-packed love story set in the backdrop of human trafficking of young girls to Dubai. It is inspired from a real incident that came in news dailies when police arrested a few Dubai-based businessmen trying to smuggle girls from Hyderabad."
};


const MovieContainer = () => {
  return (
    <div className={styles.movieContainer}>
      <Movie {...movie1} />
      <Movie {...movie2} />
      <Movie {...movie3} /> 
      <Movie {...movie4} />
    </div>
  );
}
    
export default MovieContainer;

---------------------------------------------------------------------------------


2. another version for the same file


import Movie from "../Movie";
import styles from "./movie-container.module.css";
import movies from "../../data/movies.js";

const MovieContainer = () => {
  return (
    <div className={styles.movieContainer}>
      <Movie {...movie[0]} />
      <Movie {...movie[1]} />
      <Movie {...movie[2]} /> 
      <Movie {...movie[3]} />
    </div>
  );
}
    
export default MovieContainer;

*/
