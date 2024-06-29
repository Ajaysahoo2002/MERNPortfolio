const express = require("express");
const { getAllUsersAdminPage, getAllContactUsersAdminPage, deleteUserById, deleteUserContactsById, getUserById, updateUsersDataById } = require("../controllers/admin-controler");
const authMiddleware = require("../middleware/authMiddleware");
const { adminMiddleware } = require("../middleware/admin-middleware");
const router = express.Router();


router.get("/users", authMiddleware, adminMiddleware, getAllUsersAdminPage);
router.get("/users/:id", authMiddleware, adminMiddleware, getUserById);
router.patch("/users/edit/:id", authMiddleware, adminMiddleware, updateUsersDataById);
router.delete("/users/delete/:id", authMiddleware, adminMiddleware, deleteUserById);

router.get("/contacts", authMiddleware, adminMiddleware, getAllContactUsersAdminPage);
router.delete("/contacts/delete/:id", authMiddleware, adminMiddleware, deleteUserContactsById);

module.exports = router;