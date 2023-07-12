// import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

// function wait(duration) {
//   return new Promise((resolve) => setTimeout(resolve, duration));
// }

function App() {
  // const queryClient = useQueryClient();

  // let data = await getUrl("2");
  // console.log(data);

  // const postsQuery = useQuery({
  //   queryKey: ["posts"],
  //   queryFn: () => wait(1000).then(() => [...POSTS]),
  // });

  // const newPostMutation = useMutation({
  //   mutationFn: (title) => {
  //     return wait(1000).then(() =>
  //       POSTS.push({ id: crypto.randomUUID, title: title })
  //     );
  //   },
  //   onSuccess: () => {
  //     queryClient.invalidateQueries(["posts"]);
  //   },
  // });

  // if (postsQuery.isLoading) return <h1>Loading</h1>;
  // if (postsQuery.isError) return <pre>{JSON.stringify(postsQuery.error)}</pre>;

  {
    /*return (
    <div>
      <h1>
        {postsQuery.data.map((post) => {
          post;
        })}
      </h1>
      {postsQuery.data.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
      <button
        disabled={newPostMutation.isLoading}
        onClick={() => newPostMutation.mutate("new post")}
      >
        Add New
      </button>
    </div>
      );*/
  }

  return (
    <>
      <Navbar />
      <Home />
    </>
  );
}

export default App;
