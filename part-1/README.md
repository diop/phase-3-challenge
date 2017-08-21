## Part 1: Simple web app

Build a very basic web API which conforms to the routes listed below.

Use Express. You don't need to use an HTML templater like EJS or Pug, just respond with plain text. (You can use `curl` or `Postman` to check whether the routes work)

The web server should provide the following routes:

```
GET /api/days/:day
POST /api/array/concat
```

#### Route 1: GET /api/days/:day
Your application should define an object called `daysOfWeek`
```javascript
daysOfWeek = {monday: 1, tuesday:2, wednesday: 3, thursday: 4, friday: 5, saturday: 6, sunday: 7}
```
The response is determined by looking up the url param passed into the route `:day` from the `daysOfWeek` object. An example will make this clearer -
```
request: GET /api/days/wednesday
response: 3
status: 200

request: GET /api/days/friday
response: 5
status: 200

request: GET /api/days/holiday
response: `'holiday' is not a valid day!`
status: 400
```

#### Route 2: POST /api/array/concat
Example requests
```
request: POST /api/array/concat
request body params: {"array1": [1,3],
                      "array2": [5,6]}
request content type: application/json
response: {"result": [1,3,5,6]}
response content type: application/json

request: POST /api/array/concat
request body params: {"array1": "abcd",
                      "array2": [5,6]}
request content type: application/json
response status code: 400
response: {"error": "Input data should be of type Array."}
response content type: application/json
```

### Requirements

- [ ] __10:__ All files are stored under the `part-1/` folder
- [ ] __10:__ All dependencies are specified in a `package.json` file
- [ ] __10:__ Web server can be started with `npm start` command
- [ ] __20:__ GET requests to the `/api/days/:day` route responds with  content type `text/plain`, as described in the example above
- [ ] __80:__ POST requests to the `/api/array/concat`, concatenates the two arrays provided in the request body and responds with the result. An invalid array should return a 400 response.