db.movies.updateOne({"title": "Batman"}, {$addToSet: {"category": "action"}});
db.movies.find({"title": "Batman"}).pretty();