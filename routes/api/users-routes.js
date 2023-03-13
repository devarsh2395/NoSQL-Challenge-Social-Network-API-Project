const router = require('express').Router();
const { getAllUsers, getUserById, createUser, updateUserById, deleteUserById, addFriend, removeFriend } = require('../../controllers/users-controller');

// Set up GET all and POST at /api/users
router.route('/').get(getAllUsers).post(createUser);

// Set up GET one, PUT, and DELETE at /api/users/:id
router.route('/:id').get(getUserById).put(updateUserById).delete(deleteUserById);

// Set up POST and DELETE for adding and removing friends at /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;