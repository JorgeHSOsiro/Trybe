db.xmen.updateMany({"class":{ $in: ["omega", "gama"]}}, { $max: {"power": 500 }});
db.xmen.find().pretty();