import express from "express";
import { readAllTweetData, readOneTweetData, createTweetData } from "../controllers/tweet.controller.js";

export const tweetRouter = express.Router();

tweetRouter.get("/", (req, res) => readAllTweetData(req, res));
tweetRouter.get("/:id", (req, res) => readOneTweetData(req, res));
tweetRouter.post("/", (req, res) => createTweetData(req, res));
