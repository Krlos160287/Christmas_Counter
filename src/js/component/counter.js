import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

export const Counter = (props) => {
	return (
		<div className="container">
			<div className="first">
				<div className="center"></div>
				<i className="fas fa-clock fa-5x"></i>
			</div>
			<div className="fourth">
				<div className="center">{props.days}</div>
			</div>
			<div className="fifth">
				<div className="center">{props.hours % 24}</div>
			</div>
			<div className="sixth">
				<div className="center">{props.minutes % 60}</div>
			</div>
			<div className="seventh">
				<div className="center">{props.seconds % 60}</div>
			</div>
		</div>
	);
};

Counter.propTypes = {
	days: PropTypes.number,
	hours: PropTypes.number,
	minutes: PropTypes.number,
	seconds: PropTypes.number,
};

var count = 17800;
setInterval(function () {
	const two = Math.floor(count / 24 / 60 / 60);
	const three = Math.floor(count / 60 / 60);
	const four = Math.floor(count / 60);
	const five = Math.floor(count / 1);

	count--;
	ReactDOM.render(
		<Counter seconds={five} minutes={four} hours={three} days={two} />,
		document.querySelector("#app")
	);
}, 1000);
