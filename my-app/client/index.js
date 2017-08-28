import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import VacancyAnnouncer from './components/VacancyAnnouncer.jsx';
import Board from './components/Board.jsx';

ReactDOM.render(<div><App /></div>, document.getElementById('root'));
ReactDOM.render(<VacancyAnnouncer vacancycount={0}/>, document.getElementById('show-vacancy'));
// ReactDOM.render(<div>
// 					<Comments>It is comment using the children prop</Comments>
// 					<Comments comment="This comment using comment prop"/>
// 					<Comments />
// 				</div>,document.getElementById('comments-container'));

ReactDOM.render(<Board />,document.getElementById('comments-container'));
