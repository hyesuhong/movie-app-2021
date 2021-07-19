function Fruits({ name }) {
	return <h3>I love {name}</h3>;
}

function App() {
	return (
		<div className="App">
			<h1>Hello!!</h1>
			<Fruits name="Lemon🍋" />
			<Fruits name="Peach🍑" />
			<Fruits name="Orange🍊" />
			<Fruits name="Strawberry🍓" />
		</div>
	);
}

export default App;
