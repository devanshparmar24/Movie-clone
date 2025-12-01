import MovieCard from '../components/MovieCard.jsx';
import { useState } from 'react';
import '../css/Home.css'

import imgFarewell from '../assets/Adoption-Centre-Farewell.jpeg';
import imgHarit from '../assets/Harit.jpeg';
import imgOgs from '../assets/Adoption-Centre-TheOgs.jpeg';
import imgChads from '../assets/Adoption-Centre-TheChadsunite.jpeg';

function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        { id: 1, title: "Adoption Center- Farewell", release_date: "2022", url: imgFarewell },
        { id: 2, title: "Harit if he keeps talking", release_date: "2025", url: imgHarit },
        { id: 3, title: "Adoption Centre- The Ogs", release_date: "2019", url: imgOgs },
        { id: 4, title: "Adoption Centre- The Chads Unite", release_date: "2024", url: imgChads }
    ];


    const handleSearch = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <form className="search-form" onSubmit={handleSearch}>
                <input type="text" placeholder='Search for movies...' className="search-input" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                <button type="submit" className="search-button">Search</button>
            </form>

            <div className="Home">
                <div className="movies-grid">

                    {movies.map((movie) => movie.title.toLowerCase().startsWith(searchQuery) && (<MovieCard movie={movie} key={movie.id} />))}
                </div>
            </div>
        </>
    );
}

export default Home;