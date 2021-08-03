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
		isLoading: true,
		movies: [],
	};
	componentDidMount() {
		// fetch data
		setTimeout(() => {
			this.setState({ isLoading: false });
		}, 6000);
	}
	render() {
		const { isLoading } = this.state;
		return <div>{isLoading ? 'Loading' : 'We are Ready'}</div>;
	}
}

export default App;
