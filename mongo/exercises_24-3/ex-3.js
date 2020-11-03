db.movies.updateOne({"title": "Batman"}, {$push: {"rating": {$each: [85, 100, 102, 105]}} });
db.movies.find({"title": "Batman"}).pretty();

db.movies.updateOne({"title": "Batman"}, {$rename: {"rating": "ratings"} });