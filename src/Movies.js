import React from 'react';
import PropTypes from 'prop-types';
import 'Movies.css';

function Movie({ id, title, summary, poster, year }) {
	return (
		<div class="movies__movie">
			<img src={poster} alt={title} />
			<div class="movie__data">
				<h3 class="movie__title">{title}</h3>
				<h5 class="movie__year">{year}</h5>
				<p class="movie__summary">{summary}</p>
			</div>
		</div>
	);
}

Movie.propTypes = {
	id: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	summary: PropTypes.string.isRequired,
	poster: PropTypes.string.isRequired,
	year: PropTypes.number.isRequired,
};

export default Movie;
