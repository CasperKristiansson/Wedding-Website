import React from "react";
import "./invitation.css";

import background from "./invitation-background.jpg";

const Invitation = (props) => {
	return (
		<>
			<div className="fullPageBackground" style={{ backgroundImage: `url(${background})` }} />		
			<div className="invitation">
				<h1>Invitation</h1>
			</div>
		</>
	);
}

export default Invitation;