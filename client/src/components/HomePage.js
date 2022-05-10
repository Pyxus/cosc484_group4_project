import React from "react";
import { Nav, Navbar/* , InputGroup, FormControl, NavDropdown */ } from "react-bootstrap";
import { useEffect, useState } from "react"
import './HomePage.css'
import axios from 'axios'
import Movie from "./Movie"
/* import Youtube from 'react-youtube' */
/* import SearchIcon from '@mui/icons-material/Search'; */

/* import UserProfile from "./UserProfile"; */
/* 
window.onscroll= function(){stickyHeader};
var header = document.getElementById('stickyH');
var sticky = header.offsetTop;
function stickyHeader(){
    if(window.pageXOffset>sticky){
        header.classList.add('sticky');
    }else{
        header.classList.remove('sticky');
    }
} */
export default function HomePage() {
    const MOVIE_API = "https://api.themoviedb.org/3/"
    const SEARCH_API = MOVIE_API + "search/movie"
    const DISCOVER_API = MOVIE_API + "discover/movie"
    const API_KEY = "171a3dc666e62cfa339274566ac65cbe"
    const BACKDROP_PATH = "https://image.tmdb.org/t/p/w1280"

    const [playing, setPlaying] = useState(false)
    const [trailer, setTrailer] = useState(null)
    const [movies, setMovies] = useState([])
    const [searchKey, setSearchKey] = useState("")
    const [movie, setMovie] = useState({ title: "Loading Movies" })

    useEffect(() => {
        fetchMovies()
    }, [])

    const fetchMovies = async (event) => {
        if (event) {
            event.preventDefault()
        }

        const { data } = await axios.get(`${searchKey ? SEARCH_API : DISCOVER_API}`, {
            params: {
                api_key: API_KEY,
                query: searchKey
            }
        })

        console.log(data.results[0])
        setMovies(data.results)
        setMovie(data.results[0])

        if (data.results.length) {
            await fetchMovie(data.results[0].id)
        }
    }

    const fetchMovie = async (id) => {
        const { data } = await axios.get(`${MOVIE_API}movie/${id}`, {
            params: {
                api_key: API_KEY,
                append_to_response: "videos"
            }
        })

        if (data.videos && data.videos.results) {
            const trailer = data.videos.results.find(vid => vid.name === "Official Trailer")
            setTrailer(trailer ? trailer : data.videos.results[0])
        }

        setMovie(data)
    }


    const selectMovie = (movie) => {
        fetchMovie(movie.id)
        setPlaying(false)
        setMovie(movie)
        window.scrollTo(0, 0)
    }

    const renderMovies = () => (
        movies.map(movie => (
            <Movie
                selectMovie={selectMovie}
                key={movie.id}
                movie={movie}
            />
        ))
    )
    console.log(trailer);
    const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
    return (
        <div className="App">
            <header className="center-max-size header">
                {/* CHANGE WEBSITE NAME */}
                <Navbar.Brand className={"brand"}>MovieBits</Navbar.Brand>
                <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
                    <Nav.Item>
                        <Nav.Link eventKey="1" href="#/home">
                            Home
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="2" href="UserProfile.js">
                            Profile
                        </Nav.Link>
                    </Nav.Item>
                    {/* <NavDropdown title="Movies" id="nav-dropdown">
                        <NavDropdown.Item >Action</NavDropdown.Item>
                        <NavDropdown.Item >Comedy</NavDropdown.Item>
                        <NavDropdown.Item >Documentary</NavDropdown.Item>
                        <NavDropdown.Item >Drama</NavDropdown.Item>
                        <NavDropdown.Item >Fiction</NavDropdown.Item>
                        <NavDropdown.Item >Horror</NavDropdown.Item>

                    </NavDropdown>
                    <NavDropdown title="Tv Shows" id="nav-dropdown">
                        <NavDropdown.Item >Action</NavDropdown.Item>
                        <NavDropdown.Item >Comedy</NavDropdown.Item>
                        <NavDropdown.Item >Documentary</NavDropdown.Item>
                        <NavDropdown.Item >Drama</NavDropdown.Item>
                        <NavDropdown.Item >Fiction</NavDropdown.Item>
                        <NavDropdown.Item >Horror</NavDropdown.Item>
                        <NavDropdown.Divider />
            
                    </NavDropdown> */}

                </Nav>




                <form className="form" onSubmit={fetchMovies}>
                    <input className="search" type="text" id="search" placeholder="Search Here"
                        onInput={(event) => setSearchKey(event.target.value)}/>
                    <button className="submit-search" type="submit"><i className="fa fa-search"></i></button>
                </form>
                
            </header>
            {movies.length ?
                <main>
                    {movie ?
                        <div className="poster"
                            style={{ backgroundImage: 
                            `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(${BACKDROP_PATH}${movie.backdrop_path})` }}>
                            {playing ?

                                <>
                                    <iframe
                                        className={"youtube amru"}
                                        src={
                                            `https://www.youtube.com/embed/${trailer.key}`
                                        }
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>

                                    <button onClick={() => setPlaying(false)} className={"button close-video"}>Close
                                    </button>
                                </> :
                                <div className="center-max-size-box">
                                    <div className="poster-content">
                                        {trailer ?
                                            <button className={"button play-video"} onClick={() => setPlaying(true)}
                                                type="button">Play
                                                Trailer</button>
                                            : 'Sorry, no trailer available'}
                                        <h1>{movie.title}</h1>
                                        <p>{movie.overview}</p>
                                    </div>
                                </div>
                            }
                        </div>
                        : null}

                    <div className={"center-max-size container"}>
                        {renderMovies()}
                    </div>
                </main>
                : 'Sorry, no movies found'}
        </div>
    );
}

