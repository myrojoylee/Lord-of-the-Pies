// Call required dependencies and seed file
const router = require('express').Router();
const seedDb = require('../../seeds/seed');

// This POST route will help to seed our database in Heroku
router.post("/", async (req, res)=> {
  if(req.body.password === process.env.SEED_PASSWORD){
    await seedDb();
    res.status(200).json({message: "finished seed"});
  }
  else{
    res.status(400).json({message: "failed password"});
  }
  
});

// Export router
module.exports = router;