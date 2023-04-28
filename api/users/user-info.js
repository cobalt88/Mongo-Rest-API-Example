import express from "express";
const router = express.Router();
import User from "../../models/User.js";
import Thought from "../../models/Thought.js";

/*
  ===================================
    USER ROUTES api/users/user-info/
  ===================================
*/

/**
 * @route GET Test - api/users/user-info/test
 * @desc Test route
 * @access Public
 */
router.get("/test", async (req, res) => {
  try {
    res.status(200).send("Users test route");
  } catch (err) {
    res.status(500).send("Server error");
    console.error(err.message);
  }
});

/**
 * @route POST New User - api/users/user-info/new-user
 * @desc Create new user
 * @access Public
 * @param {Object} req.body
 * @param {String} req.body.name.firstName
 * @param {String} req.body.name.lastName
 * @param {String} req.body.email
 * @param {String} req.body.password
 * @param {String} req.body.username
 * @returns {String} "New user created"
 * @returns {String} "Server error"
 */
router.post("/new-user", async (req, res) => {
  try {
    const data = req.body;
    const newUser = new User({
      name: {
        firstName: data.name.firstName,
        lastName: data.name.lastName,
      },
      email: data.email,
      password: data.password,
      username: data.username,
    });
    await newUser.save();
    res.status(200).send("New user created");
  } catch (err) {
    res.status(500).send(`${err.message}`);
    console.error(err.message);
  }
});

/**
 * @route PUT
 */

export default router;
