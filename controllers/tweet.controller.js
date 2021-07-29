import { getAllTweetData, getOneTweetData, insertTweetData } from "../services/tweet.service.js"

export const readAllTweetData = async (req, res, next) => {
  try {
    const result = await getAllTweetData();
    return res.status(200).json({
      status: 200,
      result: result,
      message: "Succesfully get Tweet Data!",
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

export const readOneTweetData = async (req, res, next) => {
  try {
    const result = await getOneTweetData(req.params.id);
    return res.status(200).json({
      status: 200,
      result: result,
      message: "Succesfully get One Tweet Data!",
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

export const createTweetData = async (req, res, next) => {
  try {
    const { tweet, user_id } = req.body;
    if (!(tweet && user_id)) {
      throw new Error("something is blank");
    }
    const result = await insertTweetData({
      data: { tweet: tweet, user_id: user_id },
    });
    console.log(result);
    return res.status(200).json({
      status: 200,
      result: result,
      message: "Succesfully post Tweet Data!",
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};