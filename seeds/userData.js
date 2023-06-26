const { User } = require("../models");

const userdata = [
  {
    name: "John Smith",
    email: "JSmith@test.com",
    password: "John1234",
  },
  {
    name: "Bill Nye",
    email: "BNye@test.com",
    password: "Bill1234",
  },
  {
    name: "Forrest Gump",
    email: "FGump@test.com",
    password: "Forrest1234",
  },
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;
