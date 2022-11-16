'use strict';

const { convertInputToArray } = require("../utils.js");

///////////////////////////////// PART ONE /////////////////////////////////////

/** Finds the number of times the depth increases from the previous. */
function countIncreases(depths) {
  let count = 0;

  for (let i = 0; i < depths.length; i++) {
    if (i === 0) continue;
    if (Number(depths[i]) > Number(depths[i - 1])) count++;

  }
  console.log("Part 1:", count);
}

///////////////////////////////// PART TWO /////////////////////////////////////

/** Finds the number of times the depth increases from the previous using
 * a sliding window of 3. */
 function countIncSlidingWindow(depths, size) {
  let count = 0;
  let previousSum = 0;

  for (let i = 0; i < size; i++) {
    previousSum += +depths[i];
  }

  for (let i = size; i < depths.length; i++) {
    let currentSum = previousSum + Number(depths[i]) - Number(depths[i - size]);

    if (currentSum > previousSum) count++;
    previousSum = currentSum;
  }

  console.log("Part 2:", count);
}

///////////////////////////////// RUN SCRIPT ///////////////////////////////////

/** Conductor function to run script. */
async function runScript() {
  const input = await convertInputToArray("input.txt");
  countIncreases(input);
  countIncSlidingWindow(input,3);
}

runScript();