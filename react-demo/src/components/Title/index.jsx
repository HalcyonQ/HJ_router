import React, { Component } from "react";

class View extends Component {
	render() {
		return (
			<div className='ht-title flex'>
				<span>{this.props.title}</span>
				<a href='#'>更多&gt;</a>
			</div>
		);
	}
}

export default View;
