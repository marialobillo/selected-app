import React, { Component } from 'react';
import CharacterList from './CharacterList';
import HeroList from './HeroList';
import '../styles/index.css';

class App extends Component{
	render(){
		return (
			<div className="App">
				<div className="row">
					<h2>Super Squad</h2>
					<div className="col-md-6">
						<CharacterList/>
					</div>
					<div className="col-md-6">
						<HeroList />
					</div>
				</div>
			</div>
		);
	}
}



export default App;
