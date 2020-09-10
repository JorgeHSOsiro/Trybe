db.xmen.updateMany({"class": "unknown"}, { $unset: {"class": ""}} );
db.xmen.find({"class": "unknown"}).pretty();
db.xmen.find({"name": "Homem Aranha"}).pretty();