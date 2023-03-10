"use strict";

const fse = require("fs-extra");

const { join } = require("path");

//loads a list of sql queries within a given folder
const loadSqlQueries = async folderName => {
    // determine the file path for the folder
    const filePath = join(__dirname, folderName);

    // get a list of all the files in the folder
    const files = await fse.readdir(filePath);

    // only files that have the .sql extension
    const sqlFiles = files.filter(f => f.endsWith(".sql"));

    // loop over the files and read in their contents
    // creates object with {queryfilename: sqlquery}
    const queries = {};
    for (let i = 0; i < sqlFiles.length; i++) {
        const query = fse.readFileSync(join(filePath, sqlFiles[i]), { encoding: "UTF-8" });
        queries[sqlFiles[i].replace(".sql", "")] = query;
    }
    return queries;
};

module.exports = {
    loadSqlQueries
};