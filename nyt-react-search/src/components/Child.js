import React from 'react';

const Child = (props) => {
	return(
		<div>
			<h1>Hello I'm a child component! My name is {props.name}</h1>
			<h3>Child Count: {props.childCount}</h3>

			<button onClick={props.updateParent}> Add Children </button>

		</div>
	);
};

export default Child;

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