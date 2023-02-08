import React from "react";
import PropTypes from "prop-types";

function About(props) {
  return (
    <div>
      <h1 className="text-6xl mb-4">GitHub Finder</h1>
      <p className="mb-4 text-2xl font-light">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
        debitis distinctio? Doloremque autem optio molestias non odit veniam
        sapiente sequi dolorum asperiores?
      </p>
      <p className="text-lg text-gray-400">
        Version <span className="text-white">1.0.0</span>{" "}
      </p>
      <p className="text-lg text-gray-400">
        Layout By:
        <a href="'https://twitter.com/hassibmoddasser" className="text-white">
          Hassib Moddasser
        </a>
      </p>
    </div>
  );
}

About.propTypes = {};

export default About;
