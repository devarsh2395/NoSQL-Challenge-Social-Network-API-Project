const router = require('express').Router();
const { getUsers,
    getUserById,
    addUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend } = require('../../controllers/UserController');

// Set up GET all and POST at /api/users
router.route('/').get(getUsers).post(addUser);

// Set up GET one, PUT, and DELETE at /api/users/:id
router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);

// Set up POST and DELETE for adding and removing friends at /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;