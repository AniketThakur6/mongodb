use("test");

// let arr = [];

// for (let i = 1; i <= 100; i++) {
//   arr.push({ value: i });
// }

// db.data.insertMany(arr);

// Cursor Methods

// 1. next() > Next document fetch karta hai.
// 2.
// 3. limit() -> Kitne documents chahiye.
// 4. skip() > Documents skip karta hai.
// 5. sort() > Documents ko sort karta hai.

// hasNext() > Check karta hai aur documents bache hain ya nahi.

// const cursor = db.data.find();

// while (cursor.hasNext()) {
//   console.log(cursor.next());
// }

// db.data.find().sort({value: -1}); // 1 is ascending and -1 is desending
// db.data.find().sort({value:1}) // ascending sort

// db.data.find().limit(5)

// db.data.find().skip(10)

// this used in pagination

// db.data.find().sort({ value: -1 }).skip(5).limit(2) // pagination

// use("test");

// db.data.countDocuments(); // should return 100

db.data.find().sort({value: -1}).skip(5).limit(8);
