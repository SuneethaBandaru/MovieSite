import Header from "./assets/components/Header";
import MovieContainer from "./assets/components/MovieContainer";
import Footer from "./assets/components/Footer";

function App() {
  return (
    <>
      <Header
        title="Suneetha's Movie Page!!!"
        childProp="The best movie reviews on the net"
      />
      <MovieContainer />
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

const headerObject = {
  title: "Suneetha's Movie Page!!!",
  childProp: "The best movie reviews on the net"
};

function App() {
  return (
    <>
      <Header {...headerObject} />
      <MovieContainer />
      <Footer />
    </>
  );
}

export default App;

*/
