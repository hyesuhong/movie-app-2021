import { useState, useEffect } from 'react';
import Movie from '../components/Movies';
import '../style/Home.css';

function Home() {
	const [loading, setLoading] = useState(true);
	const [movies, setMovies] = useState([]);
	const getMovies = async() => {
		const json = await (
			await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year')
		).json();
		setLoading(false);
		setMovies(json.data.movies);
	}

	useEffect(()=>{
		getMovies();
	},[]);

	return(
		<section className="container">
			{loading ? (
				<div className="loader">
					<h1>Loading...</h1>
				</div>
			) : (
				<div className="movies">
					{movies.map((movie) => (
						<Movie
							key={movie.id}
							id={movie.id}
							year={movie.year}
							title={movie.title}
							summary={movie.summary}
							poster={movie.medium_cover_image}
							genres={movie.genres}
						/>
					))}
				</div>
			)}
		</section>
	)
}

export default Home;
