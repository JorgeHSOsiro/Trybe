db.movies.updateOne({"title": "Batman"}, {$pull: {"category": "action"}});
db.movies.find({"title": "Batman"}).pretty();
