import React from "react";
import PropTypes from "prop-types";

function About(props) {
  return (
    <div>
      <h1 className="text-6xl mb-4">GitHub Finder</h1>
      <p className="mb-4 text-2xl font-light">
        GitHub-Finder is a website from which you can search any user who has an
        active Github Account. On searching such a user you'll be displayed all
        the possible users with similar names including the user you are looking
        for. On clicking any particular user you'll be shown some current
        repositories, followers, following and a couple of other details. I hope
        you guys enjoy it.
      </p>

      <p className="text-lg text-gray-400">
        Version <span className="text-white">1.0.0</span>{" "}
      </p>
      <p className="text-lg text-gray-400">
        Layout By:
        <a
          href="https://www.linkedin.com/in/gargi-roy-55a74b205/"
          className="text-white"
        >
          Gargi Roy
        </a>
      </p>
    </div>
  );
}

About.propTypes = {};

export default About;
