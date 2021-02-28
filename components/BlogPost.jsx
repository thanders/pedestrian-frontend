import HeadPost from './HeadPost'
import getImage from '../Other/getImage'

export default function BlogPost({ children, meta}) {
  return (
    <>
      <HeadPost meta={meta} isBlogPost />
      <article>{children}</article>
      <div>{getImage('/vercel.svg')}</div>
    </>
  )
}