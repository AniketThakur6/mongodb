use("practiceDB");

// MongoDB Update Operators:

// $set    → Updates or sets a field value
// $unset  → Removes a field
// $inc    → Increases or decreases a numeric value
// $mul    → Multiplies a numeric value
// $rename  → Changes the field name
// $min    → Updates the field if the new value is smaller
// $max    → Updates the field if the new value is larger

// Array Update Operators:

// $push      → Adds an element to an array
// $addToSet  → Adds an element to an array without allowing duplicates
// $pull      → Removes matching elements from an array
// $pop       → Removes the first or last element from an array

db.products.find({}, { tags: 1 });

// db.products.updateMany(
//   {},
//   {
//     $set: { price: 0 },
//   },
// );

// db.products.updateMany(
//   {},
//   {
//     $unset: { title: "" },
//   },
// );

// db.products.updateMany(
//   {},
//   {
//     $inc : {stock: 5}
//   }
// )

// db.products.updateMany(
//   {},
//   {
//     $mul : { stock: 1.1 } // mul -- multiply
//   }
// )

// db.products.updateMany(
//   {},
//   {
//     $rename: {satock: "stock"}
//   }
// )

// db.products.updateMany(
//   {},
//   {
//     $min : {stock: 100} // set minimum value means value lower than this ok but id value is greater then set the value with min value
//   }
// )

// db.products.updateMany(
//   {},
//   {
//     $max: { stock: 100}
//   }
// )

//for Array

// db.products.updateMany(
//   {},
//   {
//     $push : {tags: "Aniket"}
//   }
// )

// db.products.updateMany(
//   {},
//   {
//     $pull: {tags:"lipstick"}
//   }
// )

// db.products.updateMany(
//   {},
//   {
//     $addToSet: { tags: "lipstick" }, // only add if tags don't exists (don't allow duplicate in array)
//   },
// );

// db.products.updateMany(
//   {},
//   {
//     $pop :{tags:1}
//   }
// )
