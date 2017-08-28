import React from 'react';
import Comments from './Comments.jsx';

export default class Board extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			comments: []
		}
		this.eachComment = this.eachComment.bind(this);
		this.addNewComment = this.addNewComment.bind(this);
		this.updateComment = this.updateComment.bind(this);
		this.removeComment = this.removeComment.bind(this);
	}

	addNewComment() {
		var commentArr = this.state.comments;
		commentArr.push('Default text');
		this.setState({comments: commentArr});
	}

	updateComment(newText, i) {
		var commentArr = this.state.comments;
		commentArr[i] = newText;
		this.setState({comments: commentArr});
	}

	removeComment(i) {
		var commentArr = this.state.comments;
		commentArr.splice(i, 1);
		this.setState({comments: commentArr});
	}

	eachComment(text, i){
		return (
				<Comments key={i} index={i} updateCommentText={this.updateComment} deleteFromBoard={this.removeComment}>
					{text}
				</Comments>
				);
	}

	render() {
		return(
			<div className="Boards">
				<button className="button-info" onClick={this.addNewComment}>Add New Comment</button>
				{this.state.comments.map(this.eachComment)}
			</div>
		);
	}
}