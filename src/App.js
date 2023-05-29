import "./App.css";
import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";
import Row from "./Components/Row";
import requests from "./Components/requets";

function App() {
  return (
    <div className="App">
      {/* NavBar */}
      <Navbar />

      {/* Banner */}
      <Banner />

      <Row
        title={"Netflix Originals"}
        fethUrl={requests.fetchNetflixOriginals}
        isLargeRow // This will return true
      />
      <Row title={"Trending Now"} fethUrl={requests.fetchTrending} />
      <Row title={"Top Rated"} fethUrl={requests.fetchTopRated} />
      <Row title={"Action Movies"} fethUrl={requests.fetchActionMovies} />
      <Row title={"Comedy Movies"} fethUrl={requests.fetchComedyMovies} />
      <Row title={"Horror Movies"} fethUrl={requests.fetchHorrorMovies} />
      <Row title={"Romance Movies"} fethUrl={requests.fetchRomanceMovies} />
      <Row title={"Documentaries"} fethUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
