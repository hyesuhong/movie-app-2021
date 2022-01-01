import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from '../style/Detail.module.css';

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
	}, []);

	return (
	<div>
		{loading ? <h1>Loading...</h1> 
		: (<div>
				<img src={infos.background_image} alt="" className={styles.bg}/>
				<div className={styles.wrapper}>
					<Link to="/" className={styles.homeBtn}></Link>
					<img src={infos.medium_cover_image} alt=""/>
					<div className={styles.desc_wrap}>
						<h2>{infos.title}</h2>
						<ul>
							<li>{infos.runtime} min</li>
							<li>{infos.rating}</li>
						</ul>
						<ol>
							{/* {infos.genres.map((genre,index) => (<li key={index}>{genre}</li>))} */}
						</ol>
						<p>{infos.description_intro}</p>
					</div>
				</div>
			</div>)
		}
	</div>
	)
}

export default Detail;
