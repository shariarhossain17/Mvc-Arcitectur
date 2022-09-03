let users = [
  {
    id: 1,
    name: "Hero Alam",
    gender: "male",
    contact: "0132",
    address: "fdc",
    photoUrl:
      "https://i.pinimg.com/originals/bf/bc/d6/bfbcd69eaad507d8acb1851561a05f81.jpg",
  },
  {
    id: 2,
    name: "Hero Alam2",
    gender: "male",
    contact: "01324535",
    address: "bollywood",
    photoUrl:
      "https://i.pinimg.com/originals/bf/bc/d6/bfbcd69eaad507d8acb1851561a05f81.jpg",
  },
  {
    id: 3,
    name: "Hero Alam3",
    gender: "male",
    contact: "013234324",
    address: "fdc3",
    photoUrl:
      "https://i.pinimg.com/originals/bf/bc/d6/bfbcd69eaad507d8acb1851561a05f81.jpg",
  },
  {
    id: 4,
    name: "Hero Alam4",
    gender: "male",
    contact: "0132r343",
    address: "fdc4",
    photoUrl:
      "https://i.pinimg.com/originals/bf/bc/d6/bfbcd69eaad507d8acb1851561a05f81.jpg",
  },
  {
    id: 5,
    name: "Hero Alam5",
    gender: "male",
    contact: "01323434",
    address: "fdc5",
    photoUrl:
      "https://i.pinimg.com/originals/bf/bc/d6/bfbcd69eaad507d8acb1851561a05f81.jpg",
  },
  {
    id: 6,
    name: "Hero Alam6",
    gender: "male",
    contact: "0132433",
    address: "fdc6",
    photoUrl:
      "https://i.pinimg.com/originals/bf/bc/d6/bfbcd69eaad507d8acb1851561a05f81.jpg",
  },
];

module.exports.getRandomUser = (req, res, next) => {
  const user = users[Math.floor(Math.random() * users.length)];
  res.json(user);
};

module.exports.getAllUser = (req, res, next) => {
  const { limit } = req.query;
  res.json(users.slice(0, limit));
};
module.exports.saveUser = (req, res, next) => {
  const { name, gender, contact, address, photoUrl } = req.body;
  if (name && gender && contact && address && photoUrl) {
    users.push({
      id: users.length + 1,
      name,
      gender,
      contact,
      address,
      photoUrl,
    });
    res.json(users);
  } else {
    res.json({
      message:
        "please provide name,gender,contact,address,photoUrl all the information",
    });
  }
};

module.exports.updateUser = (req, res, next) => {
  const { id } = req.params;
  const { name, gender, contact, address, photoUrl } = req.body;
  let updateUser = users.find((user) => user.id === Number(id));

  updateUser.id = Number(id);
  if (name) {
    updateUser.name = name;
  }
  if (gender) {
    updateUser.gender = gender;
  }
  if (contact) {
    updateUser.contact = contact;
  }
  if (address) {
    updateUser.address = address;
  }
  if (photoUrl) {
    updateUser.address = photoUrl;
  }
  res.json(updateUser);
};
module.exports.bulkUpdate = (req, res, next) => {
  const { user } = req.body;
  const { name, gender, contact, address, photoUrl } = req.body;

  user.forEach((element) => {
     const updateUser = users.find((u) => u.id === element);
     updateUser.name = name
     updateUser.id = element
     if (name) {
         updateUser.name = name;
       }
       if (gender) {
         updateUser.gender = gender;
       }
       if (contact) {
         updateUser.contact = contact;
       }
       if (address) {
         updateUser.address = address;
       }
       if (photoUrl) {
         updateUser.address = photoUrl;
       };
     res.json(updateUser);
  });

};
module.exports.deleteUser = (req, res, next) => {
  const { id } = req.params;
  let removeUser = users.filter((user) => user.id !== Number(id));

  res.json(removeUser);
};
