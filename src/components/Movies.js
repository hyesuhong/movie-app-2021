import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../style/Movies.css';

function Movie({ id, title, summary, poster, year, genres }) {
	return (
		<div className="movies__movie">
			<Link to={`/movie/${id}`}>
				<div className="movie__poster">
					<img src={poster} alt={title} title={title} />
				</div>
				<div className="movie__data">
					<h3 className="movie__title">{title}</h3>
					<h5 className="movie__year">{year}</h5>
					<ul className="genres">
						{genres.map((genre, index) => {
							if (index > 2) {
								return '';
							} else {
								return (
									<li className="genres__genre" key={index}>
										{genre}
									</li>
								);
							}
						})}
					</ul>
					<p className="movie__summary">{summary.slice(0, 140)}...</p>
				</div>
			</Link>
		</div>
	);
}

Movie.propTypes = {
	id: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	summary: PropTypes.string.isRequired,
	poster: PropTypes.string.isRequired,
	year: PropTypes.number.isRequired,
	genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
