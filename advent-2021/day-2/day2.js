'use strict';

const { convertInputToArray } = require("../utils.js");

///////////////////////////////// PART ONE /////////////////////////////////////

/** Calculate product final horizontal position and final depth. */
function depthTimesHorzPosition(positionChanges) {
  let horizontalPos = 0;
  let depth = 0;

  for (let i = 0; i < positionChanges.length; i++) {
    const [direction, units] = positionChanges[i].split(" ");

    if (direction === "forward") {
      horizontalPos += Number(units);
    } else if (direction === "down") {
      depth += Number(units);
    } else if (direction === "up") {
      depth -= Number(units);
    }
  }

  console.log("Part 1:", horizontalPos * depth);
}

///////////////////////////////// PART TWO /////////////////////////////////////

/** Calculate product final horizontal position and final depth with new aim value. */
function depthTimesHorzPositionWithAim(positionChanges) {
  let horizontalPos = 0;
  let aim = 0;
  let depth = 0;

  for (let i = 0; i < positionChanges.length; i++) {
    const [direction, units] = positionChanges[i].split(" ");

    if (direction === "forward") {
      horizontalPos += Number(units);
      depth += aim * Number(units);
    } else if (direction === "down") {
      aim += Number(units);
    } else if (direction === "up") {
      aim -= Number(units);
    }
  }

  console.log("Part 2:", horizontalPos * depth);
}

///////////////////////////////// RUN SCRIPT ///////////////////////////////////

/** Conductor function to run script. */
async function runScript() {
  const input = await convertInputToArray("input.txt");
  console.log(input[1].split(" "));
  depthTimesHorzPosition(input);
  depthTimesHorzPositionWithAim(input);
}

runScript();