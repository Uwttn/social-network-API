const router = require('express').Router();
const {
  addFriend,
  removeFriend,
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  addReaction,
  removeReaction,
} = require('../../controllers/user-controller');

// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').delete(removeFriend).post(addFriend);

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).delete(deleteUser);

// /api/users/:userId/reactions
router.route('/:userId/reactions').post(addReaction);

// /api/users/:userId/reactions/:reactionId
router.route('/:userId/reactions/:reactionId').delete(removeReaction);

module.exports = router;