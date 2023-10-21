import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import router from "react-router-dom";
import { HashRouter, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
// import Movie from"./components/Movie";
import Detail from "./components/Detail";
import Home from "./routes/Home";
import About from "./routes/About";
import "./App.css";

function App() {
  return (
    <>
      <HashRouter>
        <Navigation />
        {/* <Route path="/" exact={true} component={Home} /> */}
        {/* <Route path="/about" component={About} /> */}
        {/* <Route path="/results/:id" component={Detail} /> */}
      </HashRouter>

      <About />
      {/* <Detail/> */}

      <Home />
    </>
  );
}

export default App;

// import React from "react";
// import PropTypes from "prop-types";
// import axios from "axios";
// import Navigation from "./components/Navigation";
// import Movie from "./components/Movie";
// import "./components/Movie.css";

// import Home from "./routes/Home";
// import About from "./routes/About";
// import Detail from "./components/Detail";
// import "./App.css";

// class App extends React.Component {
//   state = {
//     isLoading: true,
//     movies: [],
//   };

//   getMovies = async () => {
//     const {
//       data: { results },
//     } = await axios.get(
//       "https://api.themoviedb.org/3/discover/movie?api_key=91395055b0fe6f191a72009d9da1e21e"
//     );
//     this.setState({ results, isLoading: false });
//   };
//   componentDidMount() {
//     this.getMovies();
//   }

//   render() {
//     const { isLoading, results } = this.state;
//     return (

//       <section className="section-movies">
//         {isLoading
//           ? "Loading..."
//           : results.map((results) => {
//               console.log(results);
//               return (
//                 <div className="movies">
//                   <Movie
//                     key={results.id}
//                     id={results.id}
//                     title={results.original_title}
//                     year={results.release_date}
//                     poster={results.poster_path}
//                     overview={results.overview}

//                   />
//                 </div>
//               );
//             })}
//       </section>
//     );
//   }
// }

// export default App;

// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import './Custom.scss';

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const MovieList = () => {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=49391560')
//       .then(response => {
//         setMovies(response.data);
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>Список фильмов</h1>
//       <ul>
//         {movies.map(movie => (
//           <li key={movie.id}>{movie.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default MovieList;

// import user1 from './pictures/user1.png';
// import user2 from './pictures/user2.png';
// import user3 from './pictures/photos-13323vsWmKApDZJIh 1.png';

// const reviews =[
//   { id: 1, name: 'Nick Name',photo: user1},
//   { id: 2, name: 'Alex Pringles',photo : user2},
//   { id: 3, name: 'John Signa',photo: user3 },
// ];

// const users = [
//   { id: 1, name: 'Nick Name',photo: user1},
//   { id: 2, name: 'Alex Pringles',photo : user2},
//   { id: 3, name: 'John Signa',photo: user3 },
//   { id: 1, name: 'Nick Name',photo: user1},
//   { id: 2, name: 'Alex Pringles',photo : user2},
//   { id: 3, name: 'John Signa',photo: user3 },
//   { id: 1, name: 'Nick Name',photo: user1},
//   { id: 2, name: 'Alex Pringles',photo : user2},
//   { id: 3, name: 'John Signa',photo: user3 },

// ];

// const NewCustomers = () => {
//   return (
//     <div className='pictures'>
//       <h1>NewCustomers</h1>
//       <ul>
//         {users.map((user) => (
//           <li key={user.id}>
//             <img src={user.photo} alt='' />
//             {user.name}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// // export default NewCustomers;

// function App() {
//   return (
//     <div className="main-customers">
//       <h1>hello world</h1>
//     </div>
//   );
// }
// export default App;
