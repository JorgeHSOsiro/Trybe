db.movies.updateMany({}, { $set: {"sequels": 0 }} );
db.movies.find().pretty();