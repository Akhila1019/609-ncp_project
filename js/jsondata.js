const fs = require("fs");

var milk_workers;

// Read milk_workers.json file
fs.readFile("./milk_workers.json", function(err, data) {
    
    // Check for errors
    if (err) throw err;

    // Converting to JSON
    milk_workers = JSON.parse(data);
    
    console.log(milk_workers); // Print users 
});

module.exports = milk_workers;