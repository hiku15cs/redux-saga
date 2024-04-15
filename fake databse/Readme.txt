To create a fake REST API with JSON Server using a specific port number, you can use the --port option when starting JSON Server. Here's how you can do it:

Install JSON Server:
If you haven't installed JSON Server globally yet, you can do so using npm:


$npm install -g json-server


Create a JSON File with Data:
Create a JSON file containing the data you want to serve as your API. For example, create a file named data.json with some sample data.

Start JSON Server with a Specific Port:
Run JSON Server with the --port option followed by the desired port number, and specify the path to your JSON file. For example, to start JSON Server on port 4000 with the data.json file:

$json-server --watch data.json --port 4000


Access Your Fake API:
JSON Server will start the fake REST API on the specified port. You can access it using the base URL with the chosen port number. For example:

$http://localhost:4000

Now you have a fake REST API running on the specified port using JSON Server. You can make HTTP requests to interact with your fake API as needed.





