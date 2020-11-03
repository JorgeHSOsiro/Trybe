db.movies.find({"category": {$all: [ "action" ]}, "imdbRating": { $gt: 7}}).pretty();
db.movies.find().pretty();