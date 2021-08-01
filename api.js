console.log("Script is loaded!")

//This will retrieve the URI with ID 5//
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))

  //Now check the console and you should see the following script//
//   {
// 	"userId": 1,
// 	"id": 1,
// 	"title": "delectus aut autem",
// 	"completed": false
// }

