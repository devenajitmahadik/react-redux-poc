import React from 'react';

export default class VacancyAnnouncer extends React.Component {	
	render() {
		var text = (this.props.vacancycount === 0) ? 'No Vacancy' : (this.props.vacancycount + ' Vacancy');
		return (
			<div>{text}</div>
		);
	}
};