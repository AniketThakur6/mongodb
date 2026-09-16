use("practiceDB");

// db.students.insertMany([
//   {
//     name: "Rahul",
//     skills: ["HTML", "CSS", "JavaScript"],
//     marks: [70, 80, 90],
//   },
//   {
//     name: "Priya",
//     skills: ["Python", "Java"],
//     marks: [60, 75],
//   },
//   {
//     name: "Amit",
//     skills: ["JavaScript", "NodeJS", "MongoDB"],
//     marks: [85, 88, 92],
//   },
// ]);

// $all -> Match arrays containing all elements

// $size -> Match arrays with specific length

// $elemMatch -> Match documents inside arrays

// $in -> Check if array contains any value

// $nin -> Opposite of $in

// db.students.find({
//   skills: { $all : ['HTML','CSS'] }  // both includes
// });

// db.students.find({
//   skills: { $size: 3 }, // matchs the length of array
// });

// db.students.find({
//   skills: {$in: ["HTML","Java"]} //  html or java present in array
// })

// db.students.find({
//   skills: { $nin: ['JavaScript','NodeJS'] } //  both should not present in array
// })

// db.products.insertMany([
//   {
//     name: "Laptop",
//     reviews: [
//       { user: "Rahul", rating: 4 },
//       { user: "Amit", rating: 5 },
//     ],
//   },
//   {
//     name: "Mobile",
//     reviews: [
//       { user: "Priya", rating: 3 },
//       { user: "Ankit", rating: 4 },
//       { user: "Rahul", rating: 5 },
//     ],
//   },
// ]);

// wrong approach
// db.products.find({
//   'reviews.user': "Rahul",   // it work like or for array
//   'reviews.rating' : 5
// })

// db.products.find({
//   reviews:{
//     $elemMatch:{
//       user:"Rahul",
//       rating: 5
//     }
//   }
// })