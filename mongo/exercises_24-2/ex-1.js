db.movies.updateOne({"title": "Batman"}, {$push: {"category": "superhero"}});
db.movies.find({"title": "Batman"}).pretty();