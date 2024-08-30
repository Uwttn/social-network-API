const router = require('express').Router();
const {
  addFriend,
  removeFriend,
  getUsers,
  getSingleUser,
  updateUser,
  createUser,
  deleteUser,
} = require('../../controllers/user-controller');

// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').delete(removeFriend).post(addFriend);

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route("/:userId").get(getSingleUser).put(updateUser).delete(deleteUser);

module.exports = router;