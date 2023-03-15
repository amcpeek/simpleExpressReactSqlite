# simpleExpressReactSqlite


# To Set Up the SQLite db

sqlite3 dev.db

CREATE TABLE coffee (
   id INTEGER PRIMARY KEY,
   name TEXT NOT NULL,
   description TEXT NOT NULL
);

INSERT INTO coffee (name, description) VALUES
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
  ;
