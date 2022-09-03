let users = [
    { id: 1, name: "Hero Alam",gender:"male",contact:"0132",address:"fdc",photoUrl:"https://i.pinimg.com/originals/bf/bc/d6/bfbcd69eaad507d8acb1851561a05f81.jpg" },
    { id: 2, name: "Hero Alam2",gender:"male",contact:"01324535",address:"bollywood",photoUrl:"https://i.pinimg.com/originals/bf/bc/d6/bfbcd69eaad507d8acb1851561a05f81.jpg" },
    { id: 3, name: "Hero Alam3",gender:"male",contact:"013234324",address:"fdc3",photoUrl:"https://i.pinimg.com/originals/bf/bc/d6/bfbcd69eaad507d8acb1851561a05f81.jpg" },
    { id: 4, name: "Hero Alam4",gender:"male",contact:"0132r343",address:"fdc4",photoUrl:"https://i.pinimg.com/originals/bf/bc/d6/bfbcd69eaad507d8acb1851561a05f81.jpg" },
    { id: 5, name: "Hero Alam5",gender:"male",contact:"01323434",address:"fdc5",photoUrl:"https://i.pinimg.com/originals/bf/bc/d6/bfbcd69eaad507d8acb1851561a05f81.jpg" },
    { id: 6, name: "Hero Alam6",gender:"male",contact:"0132433",address:"fdc6",photoUrl:"https://i.pinimg.com/originals/bf/bc/d6/bfbcd69eaad507d8acb1851561a05f81.jpg" },
  ];


  module.exports.getRandomUser = (req,res,next) =>{
    const user = users[Math.floor(Math.random() * users.length)];
    res.json(user)
  } 

  module.exports.getAllUser = (req,res,next) => {
    const {limit} = req.query;
    res.json(users.slice(0,limit))
  }