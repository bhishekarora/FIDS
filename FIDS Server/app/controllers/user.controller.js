exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
screenId='';
  if(req.query.screenId=='undefined') {
screenId =1;
  }

  else 
  screenId =req.query.screenId;

  reqType ='';
console.log('user board **********');
  usermodel.findByPk(screenId)
    .then(user => {
      reqType =user.content;
      console.log(user.content);
      dep='./node-js-server/app/data/scheduleDepartures.json';
      arrivals='./node-js-server/app/data/scheduleArrivals.json';
      baggage='./node-js-server/app/data/scheduleBaggage.json';
      
   
    if(reqType=='departures')
    {
            fs.readFile(dep, 'utf8' , (err, data) => {
              if (err) {
                console.error(err)
                return
              }

              //data[type]  =reqType;
              res.status(200).send(data);
  
            })
  
    }
  
    if (reqType=='arrivals'){
      fs.readFile(arrivals, 'utf8' , (err, data) => {
        if (err) {
          console.error(err)
          return
        }
      //  data[type]  =reqType;
              res.status(200).send(data);
  
      })
  
    }
    
    })



};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};
const fs = require('fs')


const db = require("../models");
const usermodel = db.user;
const Role =db.Role;
//const Role =db.u;
const Op = db.Sequelize.Op;
var bcrypt = require("bcryptjs");

// Create and Save a new user
exports.create = (req, res) => {
  // Validate request
  if (!req.body.username) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a user
  const user = {
    username: req.body.username,
    content: req.body.content,
    password:bcrypt.hashSync(req.body.password, 8),
    role:req.body.role?'admin':'user'
  };

  // Save user in the database
  usermodel.create(user)
    .then(user => {
      if (req.body.role) {
        user.setRoles([3]).then(() => {
          res.send({ message: "User registered successfully as admin!" });
        });
      }

      else{
        user.setRoles([1]).then(() => {
          res.send({ message: "User registered successfully!" });
        });

      }
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the user."
      });
    });
};

// Retrieve all users from the database.
exports.findAll = (req, res) => {
  const username = req.query.username;
  var condition = username ? { username: { [Op.like]: `%${username}%` } } : null;

  usermodel.findAll({ where: condition,  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    });
};

// Find a single user with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  usermodel.findByPk(id)
    .then(user => {
      user.getRoles().then(roles => 
      {
        var data= {
          role: roles,
          user: user,
          
          }
          res.send(data);
      })
    
    }).catch(err => {
      res.status(500).send({
        message: "Error retrieving user with id=" + id
      });
    });
};



// Update a user by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  if(req.body.pwdUpdated)
req.body.password = bcrypt.hashSync(req.body.password, 8)
  usermodel.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "user was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update user with id=${id}. Maybe user was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating user with id=" + id
      });
    });
};

// Delete a user with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  usermodel.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "user was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete user with id=${id}. Maybe user was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete user with id=" + id
      });
    });
};

// Delete all users from the database.
exports.deleteAll = (req, res) => {
  usermodel.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} users were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all users."
      });
    });
};

// find all published user
exports.findAllPublished = (req, res) => {
  usermodel.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    });
};
