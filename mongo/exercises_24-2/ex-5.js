db.movies.updateOne({"title": "Batman"}, {$pop: {"category": 1}});
db.movies.find({"title": "Batman"}).pretty();