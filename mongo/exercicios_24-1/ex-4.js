db.movies.updateOne({"title": "Batman"}, { $inc: {"imdbRating": 2 } });
db.movies.find().pretty();