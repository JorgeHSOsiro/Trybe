db.movies.updateOne({"title": "Batman"}, { $mul: {"imdbRating": 4 } });
db.movies.find().pretty();