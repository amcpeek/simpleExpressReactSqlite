# simpleExpressReactSqlite


## Set Up Instructions

* install express in a backend folder
* https://expressjs.com/en/starter/hello-world.html

* install the create react app in a frontend folder (remember to remove .git)
* https://reactjs.org/tutorial/tutorial.html
* Not sure these links were helpful:
* https://rapidapi.com/blog/create-react-app-express/
* https://www.freecodecamp.org/news/create-a-react-frontend-a-node-express-backend-and-connect-them-together-c5798926047c/

* Simple set up of a fetch directly from a component
* https://dev.to/salarc123/how-to-connect-a-react-frontend-with-a-nodejs-express-backend-50i9
* https://codedamn.com/news/reactjs/how-to-connect-react-with-node-js

* Must set up cores:
* https://www.robinwieruch.de/node-js-express-tutorial/

* Do not need all these headers, but do need the content type application json:
* https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe

* use sqlite3 to set up the database
* I looked here first, but I don't think it had what I needed:
* https://geshan.com.np/blog/2021/10/nodejs-sqlite/
* Better Sqlite3 helped me query the database directly:
* https://www.npmjs.com/package/better-sqlite3
* sql create and insert format reminders:
* https://www.sqlitetutorial.net/sqlite-insert/
* More sql prepare examples
* https://www.tabnine.com/code/javascript/functions/sqlite3/Database/prepare
* https://valadoc.org/sqlite3/Sqlite.Database.prepare.html

* Body parser needed to parse JSON on the backend (must use JSON.stringify(value) on the frontend)
* https://developerhowto.com/2018/12/29/build-a-rest-api-with-node-js-and-express-js/


* do not use squelize, just create the table and seed data through the command line
* type into the command line:
* sqlite3 dev.db


* `CREATE TABLE coffee (
   id INTEGER PRIMARY KEY,
   name TEXT NOT NULL,
   description TEXT NOT NULL
);`

* `INSERT INTO coffee (name, description) VALUES
  ("Espresso", "A strong and concentrated coffee, usually served in small shots."),
  ("Cappuccino", "An espresso-based drink topped with frothed milk and a sprinkle of cocoa powder."),
  ("Latte", "A milky coffee made with espresso and steamed milk."),
  ("Americano", "A diluted espresso, usually served in a larger cup."),
  ("Mocha", "A latte with added chocolate syrup or powder."),
  ("Macchiato", "An espresso with a small amount of frothed milk on top."),
  ("Iced coffee", "A cold coffee drink, usually served with ice and milk."),
  ("French press", "A coffee-making method where coffee grounds are steeped in hot water and then filtered."),
  ("Pour over", "A coffee-making method where hot water is slowly poured over coffee grounds in a filter."),
  ("Turkish coffee", "A coffee-making method where finely ground coffee is boiled in a pot with water and sugar.")
  ;`

  * use nodemon to start the backend
  * use npm start to start the frontend
  * in the browser at localhost:3000 you can create menu items, delete them, and view them
