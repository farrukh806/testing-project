import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class CommentBox extends Component {
	state = { comment: '' };

	handleChange = (e) => {
		this.setState({ comment: e.target.value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		// call an action creator
		this.props.saveComment(this.state.comment);
		// and clear the textarea
		this.setState({ comment: '' });
	};

	render() {
		return (
			<div>
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
				<div>
					<button onClick={this.props.fetchComments}>
						Fetch Comments
					</button>
				</div>
			</div>
		);
	}
}

export default connect(null, actions)(CommentBox);
