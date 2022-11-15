'use strict';

const fsP = require('fs/promises');

/** Accepts a file path and prints the contents. */
async function convertInputToArray(path) {
  try {
    let contents = await fsP.readFile(path, "utf8");
    return contents.split("\n");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

module.exports = { convertInputToArray };