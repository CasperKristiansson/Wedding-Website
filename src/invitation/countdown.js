import React from "react";

const Countdown = (props) => {
  // Create a date object for the date june 29 2024
  const weddingDate = new Date("June 29, 2024 00:00:00");

  // The countdown should be updated every second
  setInterval(() => {
    // Get the current date and time
    const now = new Date().getTime();

    // Find the distance between now and the wedding date
    const distance = weddingDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update the divs with the id countdown__days__number, countdown__hours__number, countdown__minutes__number, countdown__seconds__number with the correct values
    document.getElementById("countdown__days__number").innerHTML = days;
    document.getElementById("countdown__hours__number").innerHTML = hours;
    document.getElementById("countdown__minutes__number").innerHTML = minutes;
    document.getElementById("countdown__seconds__number").innerHTML = seconds;

  }, 1000);

  return (
    <>
      {/* Create 4 divs, one for days, hours, minute, seconds. The divs should be located beside each other */}
      <div className="countdown__wrapper">
        {/* Display in the format as 365 : 24 : 43 : 48 and under the text "Days, Hours, Minutes, Seconds */}
        <div className="countdown__days">
          <div id="countdown__days__number" className="countdown__time" />
          <span>Days</span>
        </div>
        <div className="countdown__divider"> : </div>
        <div className="countdown__hours">
          <div id="countdown__hours__number" className="countdown__time" />
          <span>Hours</span>
        </div>
        <div className="countdown__divider"> : </div>
        <div className="countdown__minutes">
          <div id="countdown__minutes__number" className="countdown__time" />
          <span>Minutes</span>
        </div>
        <div className="countdown__divider"> : </div>
        <div className="countdown__seconds">
          <div id="countdown__seconds__number" className="countdown__time" />
          <span>Seconds</span>
        </div>
      </div>
    </>
  );
}

export default Countdown;