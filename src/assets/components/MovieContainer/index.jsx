import Movie from "../Movie";
import styles from "./movie-container.module.css";
import movies from "../../../data/movies.js";
/*import image0 from "../../../assets/totoro.jpg";
import image1 from "../../../assets/spirited.jpg";

const images = [image0, image1];*/


const MovieContainer = () => {
  return (
    <div className={styles.movieContainer}>
      {movies.map((movie, index) => (
          <Movie key={index} {...movie}  />))}
        {/*<Movie key={index} {...movie} image={images[index]} />*/}
      
    </div>
  );
}
    
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


------------------------------------------------------------------------------------

3. another version for the same file


import Movie from "../Movie";
import styles from "./movie-container.module.css";
import image0 from "../../../assets/totoro.jpg";
import image1 from "../../../assets/spirited.jpg";

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
      <Movie
        movieTitle="Pokiri"
        movieGenre="Action"
        movieDescription="The story follows an undercover cop who infiltrates a notorious crime syndicate, navigating a dangerous world of deception and violence to bring justice to the city."
        mainActor="Mahesh Babu"
        supportingActor="Prakash Raj"
      />
      <Movie
        movieTitle="Porco Rosso"
        movieGenre="Awesome"
        movieDescription="An anthropomorphic pig, who is a former World War I fighter ace, now works as a freelance bounty hunter, hunting down air pirates in the Adriatic Sea. The film combines action, romance, and comedy with stunning animation and a memorable soundtrack."
        mainActor="Michael Keaton"
        supportingActor="cary Elwes"
      />
      <Movie
        movieTitle="Howls Moving Castle"
        movieGenre="Awesome"
        movieDescription="A which places a curse on a girl, which leads her to encounter a wizard and his moving castle, embarking on a journey of self-discovery and love."
        mainActor="Christian Bale"
        supportingActor="Billy Crystal"
      />
      <Movie
        movieTitle="Laputa"
        movieGenre="Awesome"
        movieDescription="A young girl discovers a floating island in the sky and embarks on an adventure to find it, encountering pirates, robots, and a mysterious  boy who can control the island's power."
        mainActor="Emily Blunt"
        supportingActor="Tom Hanks"
      />  
      <Movie
        movieTitle="The Incredibles"
        movieGenre="Awesome"
        movieDescription="A family of superheroes faces challenges while trying to live a normal life, ultimately coming together to save the world from a villain."
        mainActor="Brad Pitt"
        supportingActor="Julia Louis-Dreyfus"
      />
      <Movie
        movieTitle="My Neighbour Totoro" 
        movieGenre="Adventure"
        movieDescription="A young girl discovers a floating island in the sky and embarks on an adventure to find it, encountering pirates, robots, and a mysterious  boy who can control the island's power."
        mainActor="Emily Blunt"
        supportingActor="Tom Hanks"
      />  
      <Movie
        movieTitle="Spirited Away"
        movieGenre="Action"
        movieDescription="Academy Award-winning film about a young girl who becomes trapped in a mysterious and magical world, where she must navigate through various challenges to save her parents and find her way back home."
        mainActor="Daviegh smith"
        supportingActor="Johnny Depp"
      />
      <Movie
        movieTitle="The Dark Knight"
        movieGenre="Action"
        movieDescription="A superhero film that follows Batman as he faces off against the Joker, a criminal mastermind who seeks to create chaos in Gotham City. The film explores themes of heroism, morality, and the consequences of vigilantism."
        mainActor="Christian Bale"
        supportingActor="Heath Ledger"
      />  

    </div>
  );
}
   
export default MovieContainer;

*/
