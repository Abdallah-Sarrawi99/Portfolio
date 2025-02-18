import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: ["Frontend Web Developer"],
        autoStart: true,
        loop: false,
        deleteSpeed: 100000000000000000000,
      }}
    />
  );
}

export default Type;
