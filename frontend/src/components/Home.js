import PostList from "./PostList";
import { useQuery } from "react-query";
import * as api from "../lib/api";
import Loader from "react-loader-spinner";

const Home = () => {
  const { isError, error, data: posts, isFetching } = useQuery("posts", api.getPosts);
  if (isFetching) {
    return (
      <div>
        <Loader type="ThreeDots" color="#cccccc" height={30} />
      </div>
    );
  }
  if (isError) {
    <div>Error : {error.message}</div>;
  }

  return <PostList posts={posts} />;
};

export default Home;
