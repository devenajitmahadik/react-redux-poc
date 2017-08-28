import React from 'react';

export default class Comments extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			checked: true,
			editing: false
		}
		this.handleOnChangeForCheckbox = this.handleOnChangeForCheckbox.bind(this);
		this.editComment = this.editComment.bind(this);
		this.saveComment = this.saveComment.bind(this);
		this.removeComment = this.removeComment.bind(this);
	}

	handleOnChangeForCheckbox() {
		this.setState({checked: !this.state.checked});
	}

	editComment() {
		this.setState({editing: true});
	}

	saveComment() {
		var newComment = this.refs.commentArea.value;
		this.props.updateCommentText(newComment, this.props.index);
		this.setState({editing: false});
	}

	removeComment() {
		console.log('Remove Comment!');
		this.props.deleteFromBoard(this.props.index);
	}

	renderNormal(commentText, checkboxText) {
		return(
			<div className="commentsContainer">
				<br />
				<div className="comment">{commentText}</div>
				<button onClick={this.editComment}>Edit</button>
				<button onClick={this.removeComment}>Remove</button>
				<input type="checkbox" onChange={this.handleOnChangeForCheckbox} defaultChecked={this.state.checked} />
				<div>{checkboxText}</div>
				<br />
			</div>
		);
	}

	renderForm(commentText, checkboxText) {
		return(
			<div className="commentsContainer">
				<br />
				<textarea ref="commentArea" defaultValue={commentText}></textarea>
				<button onClick={this.saveComment}>Save</button>
				<input type="checkbox" onChange={this.handleOnChangeForCheckbox} defaultChecked={this.state.checked} />
				<div>{checkboxText}</div>
				<br />
			</div>
		);
	}

	render() {
		var commentText,
			checkboxText;
		if (this.props.comment) {
			commentText = this.props.comment;
		} else if (this.props.children) {
			commentText = this.props.children;
		} else {
			commentText = 'No comment!';
		}

		if (this.state.checked) {
			 checkboxText = "Checked";
		} else {
			checkboxText = "UnChecked";
		}

		if (this.state.editing) {
			return this.renderForm(commentText, checkboxText);
		} else {
			return this.renderNormal(commentText, checkboxText);
		}
	}
}