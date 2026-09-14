use("practiceDB");

db.products.find(
  {},
  {
    title: 1,
    category: 1,
    price: 1,
  },
);

// second arg is called projection to get only required fields 0-false and 1-true

// comparison operators

// $eq -- Equal to
// $ne -- not Equal
// $gt -- greater than
// $lt -- less than
// $lte -- less than eqaul
// $gte -- greater than eqaul

db.products.find(
  {
    price: { $gte: 1899.99 },
  },
  {
    title: 1,
    category: 1,
    price: 1,
  },
);
