use("practiceDB");

// db.employees.createIndex({name:1}); // this is single field indexing
// db.employees.getIndexes();
// db.employees.dropIndex({name:1});

// db.employees.find({ name: "Rahul" }).explain("executionStats");

// db.employees.createIndex({name:1, salary:1}); // this is compound indexing

// multikey index is applied on array field

// db.products.createIndex({tags:1});
// db.products.getIndexes()

// text indexing is used in searching functionality and this is created only once for a collection compound or single field

// db.articles.insertMany([
//     {
//         title: "Learn MongoDB Indexing",
//         content: "MongoDB indexing improves query performance and speed",
//         tags: ["mongodb", "database", "index"],
//         author: "Manas Kumar",
//         language: "english"
//     },
//     {
//         title: "Advanced MongoDB Text Search",
//         content: "Text index in MongoDB supports full text search with ranking",
//         tags: ["mongodb", "text search"],
//         author: "Amit Sharma",
//         language: "english"
//     },
//     {
//         title: "JavaScript for Beginners",
//         content: "JavaScript is a powerful language for web development",
//         tags: ["javascript", "web"],
//         author: "Rohit Kumar",
//         language: "english"
//     },
//     {
//         title: "Learn Database Design",
//         content: "Database design includes normalization and indexing concepts",
//         tags: ["database", "design"],
//         author: "Suresh Yadav",
//         language: "english"
//     },
//     {
//         title: "MongoDB Atlas Search Guide",
//         content: "Atlas search provides advanced search like autocomplete and fuzzy matching",
//         tags: ["mongodb", "atlas"],
//         author: "Neha Singh",
//         language: "english"
//     },
//     {
//         title: "Aprendiendo MongoDB",
//         content: "MongoDB es una base de datos muy poderosa",
//         tags: ["mongodb", "spanish"],
//         author: "Carlos",
//         language: "spanish"
//     },
//     {
//         title: "Full Stack Development",
//         content: "Full stack development includes frontend and backend technologies",
//         tags: ["development", "web"],
//         author: "Priya Verma",
//         language: "english"
//     }
// ])

// db.articles.find();
// db.articles.createIndex({ title: "text" });

// db.articles.find(
//   {
//     $text: {$search: "beginners"}
//   }
// )

// db.articles.getIndexes();
// db.articles.dropIndex('title_text')

// db.articles.createIndex({
//   title:"text",
//   content:"text",
//   tags:"text",
// })

// db.articles
//   .find(
//     { $text: { $search: "beginners database web backend" } },
//     { myScore: { $meta: "textScore" } },
//   )
//   .sort({ myScore: { $meta: "textScore" } });

// db.articles.getIndexes();

// db.articles.dropIndex('title_text_content_text_tags_text');

// db.articles.createIndex(
//   {title:"text",content:"text",tags:"text"},
//   {weights:{
//     title:1,
//     content:5,
//     tags:100

//   }}
// )

db.articles.find(
  {$text:{$search:"database"}},
  {myScore:{$meta:"textScore"}}
)