import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useMutation } from "react-query";
import * as api from "../lib/api";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const history = useHistory();
  const { mutateAsync, isLoading } = useMutation(api.createPost);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const post = { title, body, author };
    await mutateAsync(post);
    history.push("/");
  };
  return (
    <div className="create">
      <h2>Add a New Post</h2>
      <form onSubmit={handleSubmit}>
        <label>Post title:</label>
        <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />
        <label>Post body:</label>
        <textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea>
        <label>Post author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        <button> {isLoading ? "Loading..." : "Add Post"}</button>
      </form>
    </div>
  );
};

export default Create;
