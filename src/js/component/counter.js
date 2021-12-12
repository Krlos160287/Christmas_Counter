import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import moment from "moment";

export const Counter = (props) => {
	if (count > 0) {
		return (
			<div className="container1">
				<div className="center1">Hasta Nochebuena quedan...</div>
				<div className="container">
					<div className="clock">
						<div className="center"></div>
						<i className="fas fa-clock fa-5x"></i>
					</div>
					<div className="clock">
						<div className="center">{props.days} Días</div>
					</div>
					<div className="clock">
						<div className="center">{props.hours % 24} Horas</div>
					</div>
					<div className="clock">
						<div className="center">
							{props.minutes % 60} Minutos
						</div>
					</div>
					<div className="clock">
						<div className="center">
							{props.seconds % 60} Segundos
						</div>
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<div className="container1">
				<div className="center1">¡¡¡Llegó Nochebuena!!!</div>
				<div className="container">
					<div className="clock">
						<div className="center"></div>
						<i className="fas fa-clock fa-5x"></i>
					</div>
					<div className="clock">
						<div className="center">{props.days} Días</div>
					</div>
					<div className="clock">
						<div className="center">{props.hours % 24} Horas</div>
					</div>
					<div className="clock">
						<div className="center">
							{props.minutes % 60} Minutos
						</div>
					</div>
					<div className="clock">
						<div className="center">
							{props.seconds % 60} Segundos
						</div>
					</div>
				</div>
			</div>
		);
	}
};

Counter.propTypes = {
	days: PropTypes.number,
	hours: PropTypes.number,
	minutes: PropTypes.number,
	seconds: PropTypes.number,
};

var a = moment([2021, 11, 24, 0, 0, 0]);
var b = moment([]);
var duration = moment.duration(a.diff(b, "second"));
console.log(duration);

var count = duration;
if (count > 0) {
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
} else {
	setInterval(function () {
		const two = 0;
		const three = 0;
		const four = 0;
		const five = 0;

		count--;
		ReactDOM.render(
			<Counter seconds={five} minutes={four} hours={three} days={two} />,
			document.querySelector("#app")
		);
	}, 1000);
}
