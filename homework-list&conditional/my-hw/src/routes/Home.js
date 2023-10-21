import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";


class Home extends React.Component {
    state = {
      isLoading: true,
      movies: [],
    };
  
    getMovies = async () => {
      const {
        data: { results },
      } = await axios.get(
        "https://api.themoviedb.org/3/discover/movie?api_key=91395055b0fe6f191a72009d9da1e21e"
      );
      this.setState({ results, isLoading: false });
    };
    componentDidMount() {
      this.getMovies();
    }
  
    render() {
      const { isLoading, results } = this.state;
      return (
        
        // <section className="section-movies">
        <section className="container">
          {/* {isLoading
            ? "Loading..."
            : results.map((results) => {
                console.log(results);
                return ( */}
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
                  <div className="movies">
                     {results.map((results) => (
                    <Movie
                      key={results.id}
                      id={results.id}
                      title={results.original_title}
                      year={results.release_date}
                      poster={results.poster_path}
                      overview={results.overview}
                     
                    />
                    ))}
          </div>
        )}
      </section>
    );
  }
}
  
  export default Home;