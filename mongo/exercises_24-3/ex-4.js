db.movies.updateOne({"title": "Godzilla"}, {$push: { "ratings": {$each:[78, 52, 95, 102] }}});
db.movies.find({"title": "Godzilla"}).pretty();