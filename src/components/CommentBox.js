import React, { Component } from 'react';

class CommentBox extends Component {
	state = { comment: '' };

	handleChange = (e) => {
		this.setState({ comment: e.target.value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
    // call an action creator

    // and clear the textarea 
		this.setState({ comment: '' });
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<h4>Add a comment</h4>
				<textarea
					name=''
					id=''
					cols='30'
					rows='10'
					value={this.state.comment}
					onChange={this.handleChange}
				/>

				<div>
					<button>Add Comment</button>
				</div>
			</form>
		);
	}
}

export default CommentBox;
