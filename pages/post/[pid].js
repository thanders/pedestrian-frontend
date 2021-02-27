import { useRouter } from 'next/router'
import { Post } from "../../components/Post";
import { posts } from "../../getAllPosts";

const Test = () => {
  const router = useRouter()
  const { pid } = router.query

  return (
      <>
      <p>Post: {pid}</p>
        {posts.map((post) => (
          <Post key={post.link} post={post} />
        ))}
      </>
    )
}

export default Test