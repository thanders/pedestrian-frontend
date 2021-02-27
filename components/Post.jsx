import Link from 'next/link'
import HeadPost from './HeadPost'

export const Post = ({ post }) => {
  const {
    link,
    module: { meta },
  } = post
  console.log('post', post, 'link', link);

  return (
      <article>
        <HeadPost meta={meta} />
        <Link href={link}>
          <a>Read more →</a>
        </Link>
      </article>
  )
}