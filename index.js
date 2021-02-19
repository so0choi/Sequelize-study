// CRUD with sequelize
const models = require("./models");

// create
/*
models.User.create({
  user_name: "Zini",
}).then(console.log("Data is created! "));
*/

// read

/*
1.
models.User.findAll().then(console.log);

2.
async function getAllUsers() {
  const users = await models.User.findAll();
  users.forEach((user) => console.log(user));
}
getAllUsers();

*/

// update

// models.User.findOne({ where: { user_name: "Zini" } }).then((user) => {
//   if (user) {
//     user
//       .update({ user_name: "New Zini" })
//       .then(console.log("Data is updated!"));
//   }
// });

// delete

models.User.create({ user_name: "test user" })
  .then(() => console.log("created!"))
  .then(() => {
    models.User.findOne({ where: { user_name: "test user" } });
  })
  .then((user) => {
    if (user) {
      user
        .update({ user_name: "test user2" })
        .then(console.log("updated!"))
        .then(() => {
          models.User.destroy({ user_name: "test user" });
        })
        .then(console.log("deleted!"));
    }
  });
