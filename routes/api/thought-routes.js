const router = require("express").Router();

const {
    getAllThoughts,
    getThoughtbyID,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction,
} = require("../../controller/thought-controller");

router
    .route("/")
    .get(getAllThoughts)
    .post(createThought);

router
    .route("/:id")
    .get(getThoughtbyID)
    .put(updateThought)
    .delete(deleteThought);

router
    .route("/:thoughtId/reactions/:reactionId")
    .delete(deleteReaction);

router
    .route("/:thoughtId/reactions")
    .post(createReaction);

module.exports = router; 