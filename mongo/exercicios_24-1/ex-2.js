db.movies.find().pretty();
db.movies.updateOne({"title": "Godzilla"}, { $set: {"budget": 1 } });