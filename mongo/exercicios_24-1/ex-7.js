db.movies.updateOne({"title": "Batman"}, { $rename: {"budget": "estimatedBudget" } });
db.movies.find().pretty();