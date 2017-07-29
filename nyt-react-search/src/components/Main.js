import React from 'react';
import Search from './Search';
import Saved from './Saved';
import { Button, Row, Col, ListGroupItem, Grid } from 'react-bootstrap';

class Main extends React.Component{
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

/*	const wellStyles = {maxWidth: 400, margin: '0 auto 10px'}; */

	render(){
		return(
			<div>
				<h1>NYT Article Search</h1>
				<h3>Enter details to search.</h3>
				<Search />
				
			</div>
		);
	}
};
// {this.state.children}
export default Main;

// Results stored in parent component
// Define request in parent component
// - Pass request into child component

// makeRequest = (topic, startYr, endYr) => {
// 	//1 get search parameters
// 	//2 make request to NYT w/ search parameters
// 	//3 update the state.searchResults with response from NYT
// }



