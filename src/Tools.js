import React from "react";
import Icons from "./Icons";

export default function Tools(props) {

	return (
		<div className='content'>

			<h1>{Icons.FLIGHTDECK_H1} FlightDeck</h1>

			<p>
				Welcome to the FlightDeck, your personal destination for UAV management,
				flight logging and pilot data. Built on modern cloud and web technology,
				FlightDeck is your one stop for all your UAV pilot needs.
			</p>

			<div>
				<a href='https://flightdeck.desertskyrangers.org/register'>
					<button className='action-button'>Create an Account</button>
				</a>
				<a href='https://flightdeck.desertskyrangers.org/login'>
					<button className='action-button'>Login</button>
				</a>
			</div>

			<p>
				Features include:
			</p>
			<ul>
				<li>Aircraft asset management</li>
				<li>Battery asset management</li>
				<li>Flight logging</li>
				<li>Flight timing</li>
				<li>Pilot metrics</li>
				<li>...new features released regularly</li>
			</ul>

			<h2>Project Participation</h2>
			<p>
				Visit the <a href='https://github.com/desertskyrangers/flightdeck/'>FlightDeck project page</a> for information
				about <a href='https://github.com/desertskyrangers/flightdeck/milestones'>upcoming versions and features</a>,
				or to <a href='https://github.com/desertskyrangers/flightdeck/issues'>view or report issues and enhancement requests</a>.
			</p>

		</div>
	)
}
