db.movies.find({"category": {$all:["action", "adventure"]}});
db.movies.find().pretty();