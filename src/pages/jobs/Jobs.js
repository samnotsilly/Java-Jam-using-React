import React from "react";
import "./Jobs.css";

const Jobs = () => {
  return (
    <>
      <div id="herojobs"></div>
      <h2>Jobs at JavaJam</h2>
      <p>
        Want to work at JavaJam? Fill out the form below to start your
        application. All information is required.
      </p>
      <form
        method="post"
        action="https://webdevbasics.net/scripts/javajam8.php"
      >
        <label htmlFor="name">Name:</label>
        <input type="text" name="myName" id="name" required />
        <label htmlFor="email">E-mail:</label>
        <input type="email" name="myEmail" id="email" required />
        <label htmlFor="startDate">Start Date:</label>
        <input type="date" name="myStart" id="startDate" required />
        <label htmlFor="experience">Experience:</label>
        <textarea
          name="myStart"
          id="experience"
          required
          rows="2"
          cols="20"
        ></textarea>
        <input type="submit" value="Apply Now" id="mySubmit" />
      </form>
    </>
  );
};

export default Jobs;
