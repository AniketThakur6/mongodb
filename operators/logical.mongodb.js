use("practiceDB");

db.products.find(
  {},
  {
    title: 1,
    category: 1,
    price: 1,
  },
);

// logical operators

// $and
// $or
// $not
// $nor - all conditions must br false

db.products.find(
  // {
  //   $and: [{ category: "beauty" }, { price: { $gt: 12.99 } }],
  // },
  {
    category: 'beauty',  // this is a shortcut for and operator it only work for and 
    price: {$gt: 12.99},
  },
  {
    title: 1,
    category: 1,
    price: 1,
  },
);


db.products.find(
  {
    // $or : [{category: "beauty"},{price:{$not:{$lt:400.99}}}]
    $nor : [{category: "beauty"},{price:{$gt: 10}}]
  },
  {
    title: 1,
    category: 1,
    price: 1,
  },
);