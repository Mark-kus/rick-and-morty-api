import './Error.css';
import { NavLink } from 'react-router-dom';

export default function Error() {
	return (
		<div className="background-img">
			<div className="space"></div>
			<div className="wrapper">
				<div className="img-wrapper">
					<span>44</span>
				</div>
				<p>The page you are trying to search has been <br /> moved to another universe.</p>
				<NavLink to='/home'>
					<button type="button">GET ME HOME</button>
				</NavLink>
			</div>
		</div>
	)
}