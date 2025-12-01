import MovieCard from '../components/MovieCard.jsx';
import {useState} from 'react';

function Home () {
    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        {id :1, title: "Genius", release_date: "2022", },
        {id :2, title: "Gadar", release_date: "2023", },
        {id :3, title: "Garam Masala", release_date: "2005", },
        {id :4, title: "Fukrey", release_date: "2014", }
    ];
    
    
    const handleSearch = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <form className="search-form" onSubmit={handleSearch}>
                <input type="text" placeholder='Search for movies...' className="search-input" value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)}/>
                <button type="submit" className="search-button">Search</button>
            </form>
        
            <div className= "Home">
                <div className="movie-grid">

                    {movies.map((movie)=>movie.title.toLowerCase().startsWith(searchQuery) && (<MovieCard movie={movie} key={movie.id}/>))}
                </div>
            </div>
        </div>
    );
}

export default Home;