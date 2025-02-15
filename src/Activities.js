import React from 'react';
import Icons from "./Icons";

export default class Activities extends React.Component {

	render() {
		return (
			<div className='content'>

				<h2>{Icons.RALLY} Feb 2022 Ranger Rally</h2>
				<p>
					We held the Feb 2022 Ranger Rally on Saturday, Feb 12th
					at <a href="https://goo.gl/maps/WfuVVZqe4Qv32PX27">{Icons.LOCATION} Wardle Fields Regional Park</a>.
					This time we chose to fly in the afternoon which turned out to be
					a great choice because the wind calmed down and the temperatures
					came up to give us fantastic flying weather. Micah brought his dad
					out to fly with us along with a beautiful modified Piper Cub.
					Hudson put in several more flights on his Bixler II and had great
					landings. Noah flew his Bixler and Arrow. Unfortunately the Arrow
					had a spectacular nose-in landing so he will be working on a new
					build soon. Glen brought out several new aircraft. His biplane
					struggled to get off the ground due to the long grass, and even
					then, the flights were nothing more than a hop. His Cronos I had
					its maiden flight and after putting in a 4S battery flew nicely.
					Last, but not least, Holden got one launch with his new rocket.
					We're not sure how high it went but we were glad the parachute did
					not fully deploy so it came down nearby. Apparently we were having
					so much fun flying, we didn't get many photos. All in all, a good
					day!
				</p>

				<h2>{Icons.RALLY} Jan 2022 Ranger Rally</h2>
				<p>
					We held the Jan 2022 Ranger Rally on Saturday, Jan 29th
					at <a href="https://goo.gl/maps/WfuVVZqe4Qv32PX27">{Icons.LOCATION} Wardle Fields Regional Park</a>.
					It was a cold morning with temperatures just above freezing. Several of us
					got to try out new equipment and aircraft that we received over the
					holidays. Hudson was able to maiden his new Bixler 2. Noah flew his
					rebuilt FliteTest Arrow successfully and we all got a birdseye view from
					Mark's new FPV setup on his Typhoon III. Blaine also joined the fun
					with his Bixler and giant Volantex Ranger 2000.
					<div className='hbox-wrappable'>
						<figure>
							<img className='photo' src='/photos/2022-01-29-hudson-bixler-1.jpeg' alt='DRS Ranger Rally'/>
							<figcaption>Hudson's new Bixler 2.</figcaption>
						</figure>
						<figure>
							<img className='photo' src='/photos/2022-01-29-noah-arrow-1.jpg' alt='DRS Ranger Rally'/>
							<figcaption>Noah preparing his Arrow.</figcaption>
						</figure>
						<figure>
							<img className='photo' src='/photos/2022-01-29-mark-typhoon-1.jpg' alt='DRS Ranger Rally'/>
							<figcaption>Mark and Blaine FPV preflight check.</figcaption>
						</figure>
						<figure>
							<img className='photo' src='/photos/2022-01-29-mark-typhoon-2.jpg' alt='DRS Ranger Rally'/>
							<figcaption>FPV flyby.</figcaption>
						</figure>
						<figure>
							<img className='photo' src='/photos/2022-01-29-blaine-ranger-1.jpg' alt='DRS Ranger Rally'/>
							<figcaption>Blaine's graceful Ranger.</figcaption>
						</figure>
						<figure>
							<img className='photo' src='/photos/2022-01-29-mark-bixler-1.jpg' alt='DRS Ranger Rally'/>
							<figcaption>Mark getting in some inverted flight practice.</figcaption>
						</figure>
					</div>
				</p>

				<h2>{Icons.RALLY} Nov 2021 Ranger Rally</h2>
				<p>
					We held an impromptu Ranger Rally on Saturday, Nov 20th. For the first time we had all members
					of the club available for <a href='/about'>group photo</a> and had a chilly morning of
					flying. Despite the cool weather we had a great time getting together, increasing our flight
					times and sharing stories.
				</p>
				<div className='hbox-wrappable'>
					<figure>
						<img className='photo' src='/photos/dsr-ranger-rally-2021-11-20.jpg' alt='DRS Ranger Rally'/>
						<figcaption>Hudson at the controls, Mark and Percy looking on.</figcaption>
					</figure>
				</div>

			</div>
		)
	}

}
