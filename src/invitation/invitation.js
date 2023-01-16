import React from "react";
import "./invitation.css";
import background from "./invitation-background.jpg";

import Countdown from "./countdown";

const Invitation = (props) => {
	return (
		<>
			<div className="fullPageBackground" style={{ backgroundImage: `url(${background})` }} />
			<div className="postalCard">
				<div className="postalCard__frame">
					<div className="postalCard__content">
						<div className="postalCard__content__one">
							<span>Save the date</span>
						</div>
						<div className="postalCard__content__two">
							<span>Fanny & Nathaniel</span>
						</div>
						<div className="postalCard__content__three">
							<span>Are getting married</span>
						</div>
						<div className="postalCard__content__four">
							<span>June.29.2024</span>
						</div>
						<div className="postalCard__content__five">
							<span>Stockholm, Sweden</span>
						</div>
						<div className="postalCard__content__six">
							<Countdown />
						</div>
						<div className="postalCard__content__seven">
							<span>Formal Invitation to follow</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Invitation;