import axios from "./client";

export const getPosts = async (id) => {
  const { data } = await axios.get(`/api/post`);
  return data;
};

export const getPost = async (id) => {
  const { data } = await axios.get(`/api/post/${id}`);
  return data;
};

export const createPost = async ({ title, body, author }) => {
  return await axios.post(`/api/post`, { title, body, author });
};

export const deletePost = async (id) => {
  return await axios.delete(`/api/post/${id}`);
};
