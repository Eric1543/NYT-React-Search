import React from 'react';
import Search from './Search';
import Saved from './Saved';
import { Button, Row, Col, ListGroupItem, Grid, Jumbotron } from 'react-bootstrap';
import helpers from '../utils/helpers';
var axios = require("axios");

class Main extends React.Component{
	constructor(){
		super();

		this.state = {
			results: []
		};
	}

	makeRequest = (topic, startYr, endYr) => {
		console.log("Making Request");

    // Axios call
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=" + startYr + "&end_date=" + endYr + "&query=" + topic + "&api-key=b779cd17ea10424083116446ded0f34b";
    return axios.get(queryURL).then(function(response) {
      // If get get a result, return that result's formatted address property
      // if (response.data.results[0]) {
      //   return response.data.results[0].formatted;
      // }
      console.log(response);
      console.log(response.data.response.docs[0].headline);
      // If we don't get any results, return an empty string
      return "";
    });
	}
/*	const wellStyles = {maxWidth: 400, margin: '0 auto 10px'}; */

	render(){
		return(
			<div>
				<h1 bsClass="jumbotron">NYT Article Search</h1>
				<Search makeRequest={this.makeRequest} />
				
				<Grid  fluid id="results">
					<Row bsClass="row">
						<Col bsClass="col" md={3}></Col>
						<Col bsClass="col" md={6}>
							<h3 block>Results</h3>
								<div>{this.state.results}
								</div>
						</Col>
						<Col bsClass="col" md={3}></Col>  
					</Row><br/>
				</Grid>

				<Saved />
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



