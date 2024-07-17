export default async function PostsPage() {
  const result = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await result.json();
  //I need to specify the type of post

  type postType = {
    userId: number;
    id: number;
    title: string;
    body: string;
  };

  return (
    <>
      <h1>Posts</h1>
      {posts.map((post: postType) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </>
  );
}
