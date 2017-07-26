import React from 'react';
import Child from './Child';

class Parent extends React.Component{
	constructor(){
		super();

		this.state = {
			topic: '',
			startYr: '',
			endYr: ''
		};
	}

	handleChange = (event) => {
		this.setState({children: this.state.children + 1 });
	};

	render(){
		return(
			<div>
				<h1>Hello World!</h1>
				<h3>I am a parent and I have {this.state.children} children.</h3>
				<Child updateParent={this.handleClick} childCount={this.state.children} name="Joe"/>
				<input
					type="text"
					id="startYr"
				/>

				<button onClick="">
			</div>
		);
	}
};

export default Parent;

// Results stored in parent component
// Define request in parent component
// - Pass request into child component

makeRequest = (topic, startYr, endYr) => {
	//1 get search parameters
	//2 make request to NYT w/ search parameters
	//3 update the state.searchResults with response from NYT
}



