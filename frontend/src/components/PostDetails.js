import { useMutation, useQuery } from "react-query";
import { useHistory, useParams } from "react-router-dom";
import * as api from "../lib/api";

const PostDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const { error, isError, isLoading, data: post } = useQuery(["post", id], () => api.getPost(id));
  const { mutateAsync, isLoading: isMutating } = useMutation(api.deletePost);

  const handleDelete = async () => {
    await mutateAsync(id);
    history.push("/");
  };
  return (
    <div className="post-details">
      {isLoading && <div>Loading data...</div>}
      {isError && <div>Error : {error.message}</div>}
      {post && (
        <article>
          <h2>{post.title}</h2>
          <p>Written by {post.author}</p>
          <div>{post.body}</div>
          <button onClick={handleDelete}>{isMutating ? "Loaindg..." : "Delete Post"}</button>
        </article>
      )}
    </div>
  );
};

export default PostDetails;
