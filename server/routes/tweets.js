import express from "express";
import { verifyToken } from "../verifyToken.js";
import { createTweet, deleteTweet, likeOrDislikeTweet, getAllTweets, getUserTweets, getExploreTweets } from "../controllers/tweet.js";

const router = express.Router();

//Create a new tweet
router.post('/', verifyToken, createTweet);

//Delete a tweet
router.delete('/:id', verifyToken, deleteTweet);

//Like or Dislike a tweet
router.put('/:id/like', likeOrDislikeTweet);

//Get all timeline tweets
router.get("/timeline/:id", getAllTweets);

//Get user tweets only
router.get('/user/all/:id', getUserTweets);

//Explore
router.get('/explore', verifyToken, getExploreTweets);

export default router;