const express = require("express");
const router = express.Router();
const userController = require("../controller/userController.js");

// Rota POST
router.post('/', userController.addUserController);

// Rota DELETE
router.delete('/:username', userController.deleteUserController);

// Rota GET
router.get('/', userController.findUsersController);

// Rota PATCH
router.patch('/:username/toggle-star', userController.toggleUserController);

module.exports = router;