import ProtTypes from 'prop-types';
import React from 'react';

// function component : 함수가 실행 -> 결과를 return -> 스크린에 디스플레이
// function App() {
// 	return (
// 		<div className="App">
// 			{fruitILike.map((item) => (
// 				<Fruits
// 					key={item.id}
// 					name={item.name}
// 					picture={item.image}
// 					rating={item.rating}
// 				/>
// 			))}
// 		</div>
// 	);
// }

// class component : react.component 에서 상속 -> 상속된 render method를 자동으로 실행 -> 결과를 return -> 스크린에 디스플레이
class App extends React.Component {
	state = {
		count: 0,
	};

	plus = () => {
		// console.log('add');
		this.setState((current) => ({ count: current.count + 1 }));
	};
	minus = () => {
		// console.log('minus');
		this.setState((current) => ({ count: current.count - 1 }));
	};

	constructor(props) {
		super(props);
		console.log('before render');
	}
	componentDidMount() {
		console.log('component rendered');
	}
	componentDidUpdate() {
		console.log('I just updated');
	}
	componentWillUnmount() {
		console.log('Good Bye');
	}
	render() {
		console.log(`I'm rendering`);
		return (
			<div>
				<h1>The number is {this.state.count}</h1>
				<button onClick={this.plus}>Plus</button>
				<button onClick={this.minus}>Minus</button>
			</div>
		);
	}
}

export default App;
