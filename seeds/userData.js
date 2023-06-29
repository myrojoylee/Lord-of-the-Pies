const { User } = require("../models");

const userdata = [
  {
    username: "John Smith",
    email: "JSmith@test.com",
    password: "John1234",
  },
  {
    username: "Bill Nye",
    email: "BNye@test.com",
    password: "Bill1234",
  },
  {
    username: "Forrest Gump",
    email: "FGump@test.com",
    password: "Forrest1234",
  },
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;
