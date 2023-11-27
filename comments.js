// Create a web server
// Use the file system to read a file
// Send the contents of the file to the client
// Set the content type of the response
// Set the status code of the response

// Create a web server
const http = require('http');
const server = http.createServer((request, response) => {
  // Use the file system to read a file
  const fs = require('fs');
  fs.readFile('index.html', 'utf8', (errors, contents) => {
    // Send the contents of the file to the client
    response.writeHead(200, {'Content-Type': 'text/html'}); // Set the content type of the response
    response.write(contents); // Send the response body
    response.end(); // Finished!
  });
});

server.listen(6789); // Set the status code of the response
console.log("Running in localhost at port 6789");