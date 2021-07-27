import ProtTypes from 'prop-types';

function Fruits({ name, picture, rating }) {
	return (
		<div>
			<h3>I Like {name}</h3>
			<h5>{rating} / 5.0</h5>
			<img src={picture} alt={name} />
		</div>
	);
}

const fruitILike = [
	{
		id: 0,
		name: 'Lemon',
		image:
			'https://images.unsplash.com/photo-1587496679742-bad502958fbf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
		rating: 4,
	},
	{
		id: 1,
		name: 'Peach',
		image:
			'https://images.unsplash.com/photo-1595124245030-41448b199d6d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
		rating: 5,
	},
	{
		id: 2,
		name: 'Orange',
		image:
			'https://images.unsplash.com/photo-1547514701-42782101795e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8b3JhbmdlJTIwZnJ1aXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
		rating: 4,
	},
	{
		id: 3,
		name: 'Strawberry',
		image:
			'https://images.unsplash.com/photo-1589723933517-a08e544063cf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c3RyYXdiZXJyeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
		rating: 3.5,
	},
];

// to check props inside component
Fruits.propTypes = {
	name: ProtTypes.string.isRequired,
	picture: ProtTypes.string.isRequired,
	rating: ProtTypes.number,
};

function App() {
	return (
		<div className="App">
			{fruitILike.map((item) => (
				<Fruits
					key={item.id}
					name={item.name}
					picture={item.image}
					rating={item.rating}
				/>
			))}
		</div>
	);
}

export default App;
