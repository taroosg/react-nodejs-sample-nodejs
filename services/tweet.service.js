import { findAll, find, store } from '../repositories/tweet.repository.js';

export const getAllTweetData = async () => {
  try {
    return findAll();
  } catch (e) {
    throw Error("Error while getting All Tweet Data");
  }
};

export const getOneTweetData = async (id) => {
  try {
    return find(id);
  } catch (e) {
    throw Error("Error while getting One Tweet Data");
  }
};

export const insertTweetData = async ({ data }) => {
  try {
    const ref = await store(data);
    return {
      id: ref.id,
      data: data,
    };
  } catch (e) {
    throw Error("Error while posting Tweet Data");
  }
};