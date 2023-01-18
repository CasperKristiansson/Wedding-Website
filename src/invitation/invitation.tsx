import React from "react";
import "./invitation.css";
import background from "./invitation-background.jpg";

import Countdown from "./countdown";

const Invitation = () => {
	return (
		<>
			<div className="fullPageBackground" style={{ backgroundImage: `url(${background})` }} />
      {/* Create a div with a picture */}
      <div className="invitation-picture" >
        <img src={background} alt="invitation" />
      </div>
			<div className="postalCard">
				<div className="postalCard-frame">
					<div className="postalCard-content">
						<div className="postalCard-content-one">
							<span>Save the date</span>
						</div>
						<div className="postalCard-content-two">
							<span>Fanny & Nathaniel</span>
						</div>
						<div className="postalCard-content-three">
							<span>Are getting married</span>
						</div>
						<div className="postalCard-content-four">
							<span>June.29.2024</span>
						</div>
						<div className="postalCard-content-five">
							<span>Stockholm, Sweden</span>
						</div>
						<div className="postalCard-content-six">
							<Countdown />
						</div>
						<div className="postalCard-content-seven">
							<span>Formal Invitation to follow</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Invitation;