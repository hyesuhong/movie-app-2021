import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Detail() {
	const { id } = useParams();
	const [loading, setLoading] = useState(true);
	const [infos, setInfos] = useState([]);

	const getMovieInfo = async () => {
		const json = await (
			await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
		).json();
		setLoading(false);
		setInfos(json.data.movie);
	}
	console.log(infos);

	useEffect(() => {
		getMovieInfo();
	}, [id]);

	return <div>{loading ? <h1>Loading...</h1> : <h1>{infos.title}</h1>}</div>
	// return <div>{loading ? <h1>loading...</h1> : null}</div>
}

export default Detail;
