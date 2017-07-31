import React from 'react';
import { Button, Row, Col, ListGroupItem, Grid } from 'react-bootstrap';
import helpers from '../utils/helpers';


class Search extends React.Component {
	constructor(){
		super()

		this.state = {
			topic: '',
			startYr: '',
			endYr: ''
		}
	}

	handleChange = event => {
		this.setState({
			[event.target.id]: event.target.value
		})
	}

	handleSubmit = event => {
		event.preventDefault()
		alert('HandleSubmit');
		this.props.makeRequest(
			this.state.topic,
			this.state.startYr,
			this.state.endYr
		)
	}

	render(){
		return(
			<div>	
				<Grid  fluid id="searchBox">

						<Row bsClass="row">
							<Col bsClass="col" md={3}></Col>
							<Col bsClass="col" md={6}>
								<h3 block>Enter details to search</h3>
							</Col>
							<Col bsClass="col" md={3}></Col>  
						</Row><br/>

						<Row bsClass="row">
								<Col bsClass="col" md={3}></Col>
								<Col bsClass="col" mdOffset={2} md={4}>
									<label for="topic">Search Term</label>
										<br/>
									<input type="text" id="topic" value={this.state.topic} onChange={this.handleChange}/>
								</Col>
								<Col bsClass="col" md={3}></Col>   
						</Row><br/>
								
						<Row bsClass="row">
								<Col bsClass="col" md={3}></Col>
								<Col bsClass="col" mdOffset={2} md={4}>
									<label for="startYr">Start Date as: YYYYMMDD</label>
										<br/>
									<input type="text" id="startYr" value={this.state.startYr} onChange={this.handleChange}/>
								</Col>
								<Col bsClass="col" md={3}></Col>   
						</Row><br/>
								
						<Row bsClass="row">
								<Col bsClass="col" md={3}></Col>
								<Col bsClass="col" mdOffset={2} md={4}>
									<label for="endYr">End Date as: YYYYMMDD</label>
										<br/>
									<input type="number" id="endYr" value={this.state.endYr} onChange={this.handleChange}/>
								</Col>
								<Col bsClass="col" md={3}></Col>   
						</Row><br/>
							
						<Row bsClass="row">
							<Col bsClass="col" md={3}></Col>
							<Col bsClass="col" md={6}>
								<Button onClick={this.handleSubmit} bsStyle="primary" bsSize="large" block>Search</Button>
							</Col>
							<Col bsClass="col" md={3}></Col>   
						</Row>
					</Grid>

				{/*<button onClick={props.updateParent}> Add Children </button>*/}

			</div>

	);
	}
};

export default Search;

// Results stored in parent component
// Define request in parent component
// - Pass request into child component

// makeRequest = (topic, startYr, endYr) => {
// 	//1 get search parameters
// 	//2 make request to NYT w/ search parameters
// 	//3 update the state.searchResults with response from NYT
// }



