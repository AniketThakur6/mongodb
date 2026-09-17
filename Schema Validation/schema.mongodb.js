// db.users2.drop();

db.createCollection("users2", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "age", "isAdmin", "products"],
      additionalProperties: false,
      properties: {
        _id: {},
        name: {
          bsonType: "string",
          description: "name must be string",
        },
        age: {
          bsonType: "int",
          minimum: 18,
          maximum: 60,
          description: "age must be integer",
        },
        isAdmin: {
          bsonType: "bool",
          description: "is should be true and false",
        },
        products: {
          bsonType: "array",
          description: "products must be an array and required",
          items: {
            bsonType: "object",
            description: "must be an object ",
            required: ["productName", "price"],
            additionalProperties: false,
            properties: {
              productName: {
                bsonType: "string",
                description: "product name must be string",
              },
              price: {
                bsonType: "double",
                description: "price must be integer",
              },
            },
          },
        },
      },
    },
  },
  validationAction: "error",
});

db.users2.insertOne({
  name: "Aniket",
  age: 19,
  isAdmin: true,
  products:[
    {
      productName: "samsung",
      price: 299.99
    }
  ]
});

// db.users2.insertOne({
//   name: "Aniket",
//   age: "11",
// });
