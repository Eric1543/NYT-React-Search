import React from 'react';
import { Button, Row, Col, ListGroupItem, Grid } from 'react-bootstrap';


const Saved = (props) => {
	return(
		<div>
				<Grid  fluid id="saved">
					<Row bsClass="row">
						<Col bsClass="col" md={3}></Col>
						<Col bsClass="col" md={6}>
							<h3 block>Saved Articles</h3>
						</Col>
						<Col bsClass="col" md={3}></Col>  
					</Row><br/>
				</Grid>

		</div>
	);
};

export default Saved;

// App
// Search ---------------->State: searchResult[]
// 	-Make req
//	-Update parent state
//
// Result   <--------------from State: Passes results in as props
//	-Display search results
//
// Saved
//
//