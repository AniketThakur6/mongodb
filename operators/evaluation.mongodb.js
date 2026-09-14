use("practiceDB");

db.employees.find();

// db.employees.insertMany([
//   { name: "Rahul", salary: 50000, bonus: 10000 },
//   { name: "Priya", salary: 60000, bonus: 5000 },
//   { name: "Amit", salary: 45000, bonus: 15000 },
//   { name: "Neha", salary: 70000, bonus: 2000 },
// ]);

// evaluation operators

// $regex -- pattern matching for string
// $expr -- Use aggregation expressions in queries
// $mod -- modulo operation

// $expr

// 1. Find employees jahan salary bonus se zyada hai

// db.employees.find({
//   $expr: {
//     $lte: ["$salary", "$bonus"],
//   },
// });

// 2. Find employees jahan salary + bonus > 60000

// db.employees.find({
//   $expr: {
//     $gt: [{ $add: ["$salary", "$bonus"] }, 60000],
//   },
// });

// db.product.insertMany([
//   { name: "Laptop", price: 60000, discountPrice: 55000 },
//   { name: "Phone", price: 30000, discountPrice: 31000 },
//   { name: "Tablet", price: 20000, discountPrice: 18000 },
//   { name: "Headphones", price: 5000, discountPrice: 4500 },
// ]);

// 1. Find products jahan price discountPrice se zyada hai

// db.product.find({
//   $expr:{
//     $lt : ['$price', '$discountPrice']
//   }
// })

// db.orders.insertMany([
//   { product: "Mouse", stock: 50, sold: 30 },
//   { product: "Keyboard", stock: 40, sold: 45 },
//   { product: "Monitor", stock: 20, sold: 10 },
//   { product: "Printer", stock: 15, sold: 15 },
// ]);

// 1. Find products jahan stock sold se zyada hai

// db.orders.find({
//   $expr:{
//     $gt: ['$stock','$sold']
//   }
// })

// db.students.insertMany([
//   { name: "Ravi", maths: 80, science: 70 },
//   { name: "Anita", maths: 60, science: 75 },
//   { name: "Karan", maths: 90, science: 85 },
//   { name: "Pooja", maths: 50, science: 65 },
// ]);

// 1. Find students jahan maths marks science se zyada hain

// db.students.find({
//   $expr: {
//     $gt: ["$maths", "$science"],
//   },
// });

// $regex

// db.students.find({
//   name: { $regex: "^r", $options: "i" }, // last letter a "a$"
// });

// db.students.find({
//   name: /^R/i, // last letter a "a$"
// });

// $mod

// db.numbers.insertMany([
//   { value: 10 },
//   { value: 2 },
//   { value: 5 },
//   { value: 3 },
//   { value: 13 },
//   { value: 200 },
//   { value: 215 },
// ]);

// db.numbers.find({ 
//   value: { $mod:[2,0] }  // even number 
// });

// db.numbers.find({ 
//   value: { $mod:[2,1] }  // odd number 
// });

// db.numbers.find({ 
//   value: { $mod:[10,0] }  // divisble by 10  
// });