import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import { useRouter } from "next/router"
import ArticleBrowse from '../containers/ArticleBrowse';
import AppHeaderBar from '../containers/AppBarHeader'
import MainBrowse from '../components/MainBrowse';
import { posts } from '../getAllPosts';

const useStyles = makeStyles(theme => ({
  toolbar: {
    // borderBottom: `1px solid ${theme.palette.divider}`
    marginTop: 20,
    marginBottom: -20,
  },
  toolbarTitle: {
    flex: 1
  },
}))

const Blog = (props) => {
  const classes = useStyles()
  const router = useRouter()
  const { locale, locales, defaultLocale } = router

  const [articleData, setArticleData] = useState(null);
  useEffect(() => {
    if(props !== null){
      setArticleData(props);
    }
  }, [props]);

  const primaryPostId =1;
  const primary = props.otherPosts.find(post => post.postId === primaryPostId);
  const secondary = props.otherPosts;
  /*
  const secondary = props.otherPosts.filter(post => {
    if(post.postId !== primaryPostId)
    return post
  });
  */
  console.log('link', secondary);

  return (
    <>
      <CssBaseline />
      <AppHeaderBar/>
      <Container maxWidth="lg">
        <main>
          { /* <MainBrowse post={primary}/> */}
          <ArticleBrowse posts={secondary} />
        </main>
      </Container>
    </>
  )
}

const removeIndex = (array, index) =>{
  if (index > -1) {
    array.splice(index, 1);
    return array;
  }
  return null;
}


export function getStaticProps(context) {
  // Call an external API endpoint to get posts
  const secondaryObj = posts.map((post) => {
    return(
      {
        link: post.link,
        title: post.module.meta.title,
        description: post.module.meta.description,
        date: post.module.meta.date,
        postId: post.module.meta.postId,
      }
    )
  })

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      otherPosts: secondaryObj,
    },
  }
}

export default Blog