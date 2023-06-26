const { Comment } = require("../models");

const commentdata = [
  {
    detail: "This is the best apple pie!",
    created_at: "June 25, 2023 13:00:00",
    user_id: 2,
    recipe_id: 1,
  },
  {
    detail: "Thank you for uploading this gem!",
    created_at: "June 24, 2023 13:00:00",
    user_id: 1,
    recipe_id: 1,
  },
  {
    detail: "This was a tad bit too sweet for me :(",
    created_at: "June 26, 2023 13:00:00",
    user_id: 3,
    recipe_id: 3,
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
