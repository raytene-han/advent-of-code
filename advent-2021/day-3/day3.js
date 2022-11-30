'use strict';

const { convertInputToArray } = require("../utils.js");

///////////////////////////////// PART ONE /////////////////////////////////////

function findGammaBit(input) {
  const length = input[0].length;
  let gammaBit = "";

  for (let i = 0; i < length; i++) {
    let sum0s = 0;
    for (let j = 0; j < input.length; j++) {
      if (input[j][i] === '0') sum0s++;
    }
    const bit = sum0s > input.length / 2 ? '0' : '1';
    gammaBit += bit;
  }

  return gammaBit;
}

function findEpsilonBit(gamma) {
  let epsilonBit = "";

  for (let bit of gamma) {
    if (bit === '0') {
      epsilonBit += '1';
    } else {
      epsilonBit += '0';
    }
  }

  return epsilonBit;
}

function convertBinaryToDecimal(bit) {
  let sum = 0;

  for (let i = 0; i < bit.length; i++) {
    const val = +bit[i] * 2 ** (bit.length - 1 - i);
    sum += val;
  }

  return sum;
}

///////////////////////////////// PART TWO /////////////////////////////////////

function frequency(nums, idx) {
  let freq = {};

  for (let num of nums) {
    freq[num[idx]] = (freq[num[idx]] || 0) + 1;
  }

  return freq;
}

function findOxygenRating(input) {
  let pointer = 0;
  let list = input;

  while (pointer < list[0].length && list.length > 1) {
    const freq = frequency(list, pointer);
    const mostCommon = freq['1'] >= freq['0'] ? '1' : '0';

    let temp = [];

    for (let i = 0; i < list.length; i++) {
      if (list[i][pointer] === mostCommon) {
        temp.push(list[i]);
      }
    }

    list = temp;
    pointer++;
  }

  return list[0];
}

function findCO2Rating(input) {
  let pointer = 0;
  let list = input;

  while (pointer < list[0].length && list.length > 1) {
    const freq = frequency(list, pointer);
    const leastCommon = freq['1'] < freq['0'] ? '1' : '0';

    let temp = [];

    for (let i = 0; i < list.length; i++) {
      if (list[i][pointer] === leastCommon) {
        temp.push(list[i]);
      }
    }

    list = temp;
    pointer++;
  }

  return list[0];
}
///////////////////////////////// RUN SCRIPT ///////////////////////////////////

/** Conductor function to run script. */
async function runScript() {
  const input = await convertInputToArray("input.txt");
  const gammaBit = findGammaBit(input);
  const epsilonBit = findEpsilonBit(gammaBit);

  console.log(convertBinaryToDecimal(gammaBit) * convertBinaryToDecimal(epsilonBit));
  console.log(convertBinaryToDecimal(findOxygenRating(input)) * convertBinaryToDecimal(findCO2Rating(input)));

}

runScript();