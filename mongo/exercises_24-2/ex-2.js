db.movies.updateOne({"title": "Batman"}, {$push: {"category": { $each: ["villain", "comic-based"]}}});
db.movies.find({"title": "Batman"}).pretty();
