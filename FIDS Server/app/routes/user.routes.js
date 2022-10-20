const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");
const fileController = require("../controllers/file.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/test/all", controller.allAccess);

  app.get(
    "/api/data/dash",
    [authJwt.verifyToken],
    [authJwt.isEnabled],
    controller.userBoard
  );

  app.get(
    "/api/test/mod",
    [authJwt.verifyToken, authJwt.isModerator],
    controller.moderatorBoard
  );

  app.get(
    "/api/test/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );

  app.post ("/upload",fileController.upload);
  app.get("/files", fileController.getListFiles);
  var router = require("express").Router();

  // Create a new user
  router.post("/", controller.create);
  
  // Retrieve all controller
  router.get("/",  [authJwt.verifyToken],controller.findAll);

  // Retrieve all published controller
  router.get("/published", controller.findAllPublished);

  // Retrieve a single user with id
  router.get("/:id",[authJwt.verifyToken], controller.findOne);
 
  // Update a user with id
  router.put("/:id", [authJwt.verifyToken],controller.update);
  // Delete a user with id
  router.delete("/:id",[authJwt.verifyToken], controller.delete);

  // Delete all controller
  router.delete("/", [authJwt.verifyToken],controller.deleteAll);

  app.use('/api/users', router);
  
};
