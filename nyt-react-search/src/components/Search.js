import React from 'react';
import { Button, Row, Col, ListGroupItem, Grid } from 'react-bootstrap';


const Search = (props) => {
	return(
		<div>
			<Grid  fluid id="header">
					<Row bsClass="row">
							<Col bsClass="col" md={3}>
							</Col>
							<Col bsClass="col" mdOffset={2} md={4}>
								<label for="searchTerm">Search Term</label>
									<br/>
								<input type="text" id="searchTerm" />
							</Col>
							<Col bsClass="col" md={3}>
							</Col>   
					</Row>
							<br/>
					<Row bsClass="row">
							<Col bsClass="col" md={3}>
							</Col>
							<Col bsClass="col" mdOffset={2} md={4}>
								<label for="startYr">Start Year</label>
									<br/>
								<input type="text" id="startYr" />
							</Col>
							<Col bsClass="col" md={3}>
							</Col>   
					</Row>
							<br/>
					<Row bsClass="row">
							<Col bsClass="col" md={3}>
							</Col>
							<Col bsClass="col" mdOffset={2} md={4}>
								<label for="endYr">End Year</label>
									<br/>
								<input type="text" id="endYr" />
							</Col>
							<Col bsClass="col" md={3}>
							</Col>   
					</Row>
							<br/>
					<Row bsClass="row">
						<Col bsClass="col" md={3}>
						</Col>
						<Col bsClass="col" md={6}>
							<Button onClick={this.handleChange} bsStyle="primary" bsSize="large" block>Search</Button>
						</Col>
						<Col bsClass="col" md={3}>
						</Col>   
					</Row>
				</Grid>
			{/*<button onClick={props.updateParent}> Add Children </button>*/}

		</div>
	);
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



