const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thought-controller.js');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/users/:userId/friends/:friendId
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

// /api/users/:userId/friends/:friendId
router.route('/:thoughtId/reactions').post(addReaction);

// /api/thoughts/:thoughtId
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

module.exports = router;
