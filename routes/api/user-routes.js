const router = require("express").Router();

const {
    getAllUsers,
    getUserbyId,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend,
} = require("../../controller/user-controller");

router
    .route("/")
    .get(getAllUsers)
    .post(createUser);

router
    .route("/:id")
    .get(getUserbyId)
    .put(updateUser)
    .delete(deleteUser);

router
    .route("/:id/friends/:friendsId")
    .post(addFriend)
    .delete(removeFriend);

module.exports = router; 