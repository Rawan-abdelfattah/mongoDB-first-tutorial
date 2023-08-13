const mongodb = require("mongodb");
const databaseURL = "mongodb://127.0.0.1:27017";
const mongoClient = mongodb.MongoClient;
const dbName = "task4";

mongoClient.connect(databaseURL, (error, data) => {
  if (error) {
    console.log(error);
  }
  console.log("all done");

  const db = data.db(dbName);
  db.collection("users").insertOne(
    {
      name: "rawan",
      age: 20,
      country: "Alex",
    },
    (error, data) => {
      if (error) {
        console.log(error);
      }
      console.log(data);
    }
  );

  db.collection("users").insertOne(
    {
      name: "rawan 2 ",
      age: 40,
      country: "Alex",
    },
    (error, data) => {
      if (error) {
        console.log(error);
      }
      console.log(data);
    }
  );

  db.collection("users").insertMany(
    [
      {
        name: "rawan 1 ",
        age: 25,
        country: "Alex",
      },
      {
        name: "rawan 2 ",
        age: 25,
        country: "Alex",
      },
      {
        name: "rawan 3 ",
        age: 25,
        country: "Alex",
      },
      {
        name: "rawan 4 ",
        age: 25,
        country: "Alex",
      },
      {
        name: "rawan 5 ",
        age: 25,
        country: "Alex",
      },
      {
        name: "rawan 6 ",
        age: 40,
        country: "Alex",
      },
      {
        name: "rawan 7 ",
        age: 40,
        country: "Alex",
      },
      {
        name: "rawan 8 ",
        age: 40,
        country: "Alex",
      },
      {
        name: "rawan 9 ",
        age: 40,
        country: "Alex",
      },
      {
        name: "rawan 10 ",
        age: 40,
        country: "Alex",
      },
    ],
    (error, data) => {
      if (error) {
        console.log(error);
      }
      console.log(data);
    }
  );

  db.collection("users")
  .find({ age: 25 })
  .toArray((error, data) => {
    if (error) {
      console.log(error);
    }
    console.log(data);
  });

  db.collection("users")
    .find({ age: 25 })
    .limit(3)
    .toArray((error, data) => {
      if (error) {
        console.log(error);
      }
      console.log(data);
    });

  db.collection("users")
    .updateOne(
      { _id: mongodb.ObjectId("64d80006340c1bfa102e6334") },
      {
        $set: { name: "ali" },
      }
    )
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });

  db.collection("users")
    .updateOne(
      { _id: mongodb.ObjectId("64d80006340c1bfa102e6335") },
      {
        $set: { name: "ahmed" },
      }
    )
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });

  db.collection("users")
    .updateOne(
      { _id: mongodb.ObjectId("64d80006340c1bfa102e6336") },
      {
        $set: { name: "alia" },
      }
    )
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });

  db.collection("users")
    .updateOne(
      { _id: mongodb.ObjectId("64d80006340c1bfa102e6337") },
      {
        $set: { name: "mai" },
      }
    )
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });

  db.collection("users")
    .updateOne(
      { _id: mongodb.ObjectId("64d80006340c1bfa102e6334") },
      {
        $inc: { age: 20 },
      }
    )
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });

  db.collection("users")
    .updateMany(
      {},
      {
        $inc: { age: 10 },
      }
    )
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });

  db.collection("users")
    .deleteOne({ _id: mongodb.ObjectId("64d80006340c1bfa102e6334") })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });

  db.collection("users")
    .deleteMany({ age: 35 })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
});
