db.movies.updateMany({}, { $unset: {"budget": "", "estimatedBudget": "" }} );
db.movies.find().pretty();