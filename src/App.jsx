import Header from "./assets/components/Header";
import MovieContainer from "./assets/components/MovieContainer";
import Footer from "./assets/components/Footer";
import GenreContainer from "./assets/components/GenreContainer";

const headerObject = {
  title: "Suneetha's Movie Page!!",
  childProp: "The best movie reviews on the net"
};

const genres = ["Action", "Family", "Adventure", "Awesome"];

function App() {
  return (
    <>
      <Header {...headerObject} />
      <MovieContainer />
      {genres.map((movieGenre, index) => <GenreContainer key={index} genre={movieGenre} />)}

      {/* the above code is the same as below code but using map function to avoid repetition*/}
      <Footer />
    </>
  );
}

export default App;

/* another version of the same file 
import Header from "./assets/components/Header";
import MovieContainer from "./assets/components/MovieContainer";
import Footer from "./assets/components/Footer";

const headerObject = {
  title: "Suneetha's Movie Page!!!",
  childProp: "The best movie reviews on the net"
};  

function App() {
  return (
    <>
      <Header title={headerObject.title} childProp={headerObject.childProp} />
      <MovieContainer />
      <GenreContainer genre="Action"/>
      <Footer />
    </>
  );
}
  
export default App;

-----------------------------------------------------------

2. another version of the same file using spread operator





import Header from "./assets/components/Header";
import MovieContainer from "./assets/components/MovieContainer";
import Footer from "./assets/components/Footer";
import GenreContainer from "./assets/components/GenreContainer";

const genres = ["Action", "Family", "Adventure", "Awesome"];

function App() {
  return (
    <>
      <Header
        title="Suneetha's Movie Page!!!"
        childProp="The best movie reviews on the net"
      />
      <MovieContainer />
      {genres.map((movieGenre, index) => <GenreContainer key={index} genre={movieGenre} />)}


      the above code is the same as below code but using map function to avoid repetition [don't write this 4 lines]
      <GenreContainer genre="Action"/>
      <GenreContainer genre="Family"/>
      <GenreContainer genre="Adventure"/>
      <GenreContainer genre="Awesome"/> 
      

      <Footer />
    </>
  );
}

export default App;

*/
