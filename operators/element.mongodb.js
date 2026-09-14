use("practiceDB")

db.products.find({},{
  title:1,
  category:1,
  price:1,
})

// element operator 

// $exists -- checks if fields exists 
// $type -- checks the data type of a field

db.products.find({price: {$type: number}})
db.products.find({age: {$exists: true}})